from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Quote/Contact Models
class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service: str
    location: Optional[str] = None
    message: str

class QuoteResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    service: str
    location: Optional[str] = None
    message: str
    status: str = "pending"
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Blog Models
class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    title: str
    excerpt: str
    content: str
    author: str
    category: str
    tags: List[str]
    imageUrl: str
    readTime: int
    publishedAt: datetime
    updatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Quote Endpoints
@api_router.post("/quotes", response_model=QuoteResponse)
async def create_quote(quote: QuoteRequest):
    """Submit a new quote request"""
    quote_dict = quote.model_dump()
    quote_obj = QuoteResponse(**quote_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = quote_obj.model_dump()
    doc['createdAt'] = doc['createdAt'].isoformat()
    doc['updatedAt'] = doc['updatedAt'].isoformat()
    
    await db.quotes.insert_one(doc)
    logger.info(f"New quote request from {quote.name} ({quote.email})")
    return quote_obj

@api_router.get("/quotes", response_model=List[QuoteResponse])
async def get_quotes():
    """Get all quote requests (admin endpoint)"""
    quotes = await db.quotes.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for quote in quotes:
        if isinstance(quote['createdAt'], str):
            quote['createdAt'] = datetime.fromisoformat(quote['createdAt'])
        if isinstance(quote['updatedAt'], str):
            quote['updatedAt'] = datetime.fromisoformat(quote['updatedAt'])
    
    return quotes

@api_router.get("/quotes/{quote_id}", response_model=QuoteResponse)
async def get_quote(quote_id: str):
    """Get a specific quote by ID"""
    quote = await db.quotes.find_one({"id": quote_id}, {"_id": 0})
    if not quote:
        raise HTTPException(status_code=404, detail="Quote not found")
    
    # Convert ISO string timestamps back to datetime objects
    if isinstance(quote['createdAt'], str):
        quote['createdAt'] = datetime.fromisoformat(quote['createdAt'])
    if isinstance(quote['updatedAt'], str):
        quote['updatedAt'] = datetime.fromisoformat(quote['updatedAt'])
    
    return QuoteResponse(**quote)

# Blog Endpoints
@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    """Get all blog posts"""
    posts = await db.blog_posts.find({}, {"_id": 0}).sort("publishedAt", -1).to_list(100)
    
    # Convert ISO string timestamps back to datetime objects
    for post in posts:
        if isinstance(post['publishedAt'], str):
            post['publishedAt'] = datetime.fromisoformat(post['publishedAt'])
        if isinstance(post['updatedAt'], str):
            post['updatedAt'] = datetime.fromisoformat(post['updatedAt'])
    
    return posts

@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    """Get a specific blog post by slug"""
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    # Convert ISO string timestamps back to datetime objects
    if isinstance(post['publishedAt'], str):
        post['publishedAt'] = datetime.fromisoformat(post['publishedAt'])
    if isinstance(post['updatedAt'], str):
        post['updatedAt'] = datetime.fromisoformat(post['updatedAt'])
    
    return BlogPost(**post)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
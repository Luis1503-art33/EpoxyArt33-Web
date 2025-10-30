"""
Seed script to populate blog posts in MongoDB
Run this once to initialize the blog posts
"""

from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
from datetime import datetime
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

blog_posts = [
    {
        "id": "1",
        "slug": "epoxy-trends-2025",
        "title": "2025 Epoxy Flooring Trends: What's Hot in Southwest Florida",
        "excerpt": "Discover the latest epoxy flooring trends taking over homes and businesses in SWFL. From metallic finishes to sustainable solutions.",
        "content": "Content placeholder - see blogData.js for full content",
        "author": "EpoxyArt33 Team",
        "category": "Trends & Design",
        "tags": ["trends", "2025", "metallic epoxy", "design", "SWFL", "Naples"],
        "imageUrl": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        "readTime": 5,
        "publishedAt": "2025-01-15T10:00:00Z",
        "updatedAt": datetime.utcnow().isoformat()
    },
    {
        "id": "2",
        "slug": "maintenance-guide",
        "title": "Complete Epoxy Floor Maintenance Guide for Florida Climate",
        "excerpt": "Keep your epoxy floors looking pristine year-round with our comprehensive maintenance guide designed specifically for Southwest Florida conditions.",
        "content": "Content placeholder - see blogData.js for full content",
        "author": "EpoxyArt33 Team",
        "category": "Maintenance",
        "tags": ["maintenance", "care", "cleaning", "Florida", "tips", "guide"],
        "imageUrl": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
        "readTime": 8,
        "publishedAt": "2025-01-10T09:00:00Z",
        "updatedAt": datetime.utcnow().isoformat()
    },
    {
        "id": "3",
        "slug": "metallic-vs-quartz",
        "title": "Metallic vs Quartz Epoxy: Which System is Right for Your Space?",
        "excerpt": "Confused between metallic and quartz epoxy systems? We break down the differences, costs, and best applications for each in Southwest Florida.",
        "content": "Content placeholder - see blogData.js for full content",
        "author": "EpoxyArt33 Team",
        "category": "Comparison Guide",
        "tags": ["metallic epoxy", "quartz epoxy", "comparison", "guide", "flooring", "commercial", "residential"],
        "imageUrl": "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80",
        "readTime": 10,
        "publishedAt": "2025-01-05T08:00:00Z",
        "updatedAt": datetime.utcnow().isoformat()
    }
]

async def seed_blog_posts():
    print("🌱 Seeding blog posts...")
    
    # Check if posts already exist
    existing_count = await db.blog_posts.count_documents({})
    if existing_count > 0:
        print(f"⚠️  Found {existing_count} existing blog posts. Clearing...")
        await db.blog_posts.delete_many({})
    
    # Insert new posts
    result = await db.blog_posts.insert_many(blog_posts)
    print(f"✅ Successfully seeded {len(result.inserted_ids)} blog posts!")
    
    # Verify
    all_posts = await db.blog_posts.find({}, {"_id": 0, "slug": 1, "title": 1}).to_list(100)
    print("\n📝 Blog posts in database:")
    for post in all_posts:
        print(f"  - {post['slug']}: {post['title']}")
    
    print("\n🎉 Blog seeding complete!")

if __name__ == "__main__":
    asyncio.run(seed_blog_posts())
    client.close()

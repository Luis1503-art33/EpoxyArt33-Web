# EpoxyArt33 Website - API Contracts & Integration Plan

## Current Status
✅ **Frontend Phase 1 Complete** - Main pages with mock data
- Home page with services, testimonials, quote form
- Services page with all 8 service types
- Gallery page with filtering
- Contact page with detailed form
- Navbar with dropdown navigation
- Footer with all links

## Mock Data Location
**File**: `/app/frontend/src/mock.js`

Contains:
- `services` - Service offerings (residential, commercial, industrial)
- `testimonials` - Customer reviews
- `galleryItems` - Project gallery images
- `stats` - Company statistics
- `benefits` - Why choose us points

## Backend Integration Plan

### Phase 1: Quote/Contact Form Backend
**Priority**: HIGH

#### API Endpoints Needed:

1. **POST /api/quotes** - Submit quote request
   ```json
   Request:
   {
     "name": "string",
     "email": "string",
     "phone": "string",
     "service": "string",
     "location": "string (optional)",
     "message": "string"
   }
   
   Response:
   {
     "id": "string",
     "message": "Quote request submitted successfully",
     "timestamp": "datetime"
   }
   ```

2. **GET /api/quotes** - Get all quote requests (admin)
   ```json
   Response:
   [
     {
       "id": "string",
       "name": "string",
       "email": "string",
       "phone": "string",
       "service": "string",
       "location": "string",
       "message": "string",
       "status": "pending|contacted|completed",
       "createdAt": "datetime"
     }
   ]
   ```

#### MongoDB Collections:

**quotes**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String (required),
  service: String (required),
  location: String,
  message: String (required),
  status: String (default: "pending"),
  createdAt: Date,
  updatedAt: Date
}
```

#### Frontend Files to Update:
- `/app/frontend/src/pages/Home.jsx` - Update handleSubmit function
- `/app/frontend/src/pages/Contact.jsx` - Update handleSubmit function

### Phase 2: Gallery Management (Optional)
**Priority**: MEDIUM

#### API Endpoints:

1. **GET /api/gallery** - Get all gallery items
2. **POST /api/gallery** - Add new gallery item (admin)
3. **DELETE /api/gallery/:id** - Remove gallery item (admin)

#### MongoDB Collections:

**gallery**
```javascript
{
  _id: ObjectId,
  title: String,
  category: String (residential|commercial|industrial),
  imageUrl: String,
  description: String,
  createdAt: Date
}
```

### Phase 3: Blog System (Future)
**Priority**: LOW

#### API Endpoints:
1. **GET /api/blog** - Get all blog posts
2. **GET /api/blog/:slug** - Get single blog post
3. **POST /api/blog** - Create blog post (admin)

### Phase 4: Service Pages with Dynamic Content
**Priority**: MEDIUM

Currently all service detail pages redirect to `/services`. 

**Future Enhancement**: Create individual pages for:
- `/garage-floor-coating`
- `/metallic-epoxy`
- `/flake-system`
- `/quartz-system`
- `/pool-deck-resurfacing`
- `/commercial-epoxy`
- `/industrial-epoxy`
- `/concrete-repair`

Each with:
- SEO-optimized content
- Before/after galleries
- Pricing information
- FAQ section specific to that service
- Related case studies

## SEO Optimization Strategy

### Current Implementation:
- Clean URL structure
- Multiple service pages for keyword targeting
- Location-based content (Naples, Marco Island, Fort Myers, etc.)
- Service area pages

### To Implement:
1. Add meta tags for each page
2. Add structured data (Schema.org) for local business
3. Add XML sitemap
4. Add robots.txt
5. Add Google Analytics
6. Add Google Search Console verification

### Target Keywords:
- "epoxy flooring Naples FL"
- "garage floor coating Fort Myers"
- "metallic epoxy floors Marco Island"
- "pool deck resurfacing SWFL"
- "commercial epoxy flooring Cape Coral"
- "industrial flooring Southwest Florida"

## Environment Variables

**Backend (.env)**:
```
MONGO_URL=<existing>
DB_NAME=<existing>
```

**Frontend (.env)**:
```
REACT_APP_BACKEND_URL=<existing>
```

## Next Steps

1. ✅ Create frontend with mock data
2. ⏳ Create backend API for quote submissions
3. ⏳ Integrate frontend forms with backend API
4. ⏳ Test quote submission flow
5. ⏳ Add email notifications (SendGrid/SMTP)
6. ⏳ Create admin dashboard to view quotes
7. Future: Gallery management, blog system, individual service pages

## Notes
- All forms currently show toast notifications with mock data
- No data is being saved to database yet
- Logo integrated from user upload
- Contact info updated with real business details:
  - Phone: (239) 276-1462
  - Email: epoxyfloorsolutions33@gmail.com
  - Service areas: Naples, Marco Island, Estero, Bonita Beach, Fort Myers, Cape Coral, SWFL

# EpoxyArt33 - Premium Epoxy Flooring Website PRD

## Overview
Professional website for EpoxyArt33, a premium epoxy flooring business serving Southwest Florida (Naples, Fort Myers, Cape Coral, Marco Island, Bonita Springs, Estero).

**Domain:** epoxyart33.com  
**Business Phone:** (239) 276-1462  
**Email:** epoxyfloorsolutions33@gmail.com

## Tech Stack
- **Frontend:** React, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Animations:** Framer Motion, react-three-fiber, @react-three/drei
- **SEO:** react-helmet-async, JSON-LD Schema Markup

## Core Pages & Features

### Service Pages (All with .html suffix for SEO)
- ✅ Garage Floor Coating
- ✅ Metallic Epoxy
- ✅ Flake System
- ✅ Quartz System
- ✅ Pool Deck Resurfacing
- ✅ Commercial Epoxy
- ✅ Industrial Epoxy
- ✅ Concrete Repair
- ✅ **Driveway Resurfacing** (NEW - Jan 27, 2025)
- ✅ **Waterproofing (TREMCO 350/351)** (NEW - Jan 27, 2025)
- ✅ **Urethane Cement (Duraflex)** (NEW - Jan 27, 2025)

### Main Pages
- ✅ Home (with 3D animations)
- ✅ Services overview
- ✅ Gallery (with filters)
- ✅ Products (suppliers & materials)
- ✅ 3D Visualizer (2D floor preview with Torginol flakes)
- ✅ Showroom
- ✅ FAQ
- ✅ Blog (with local SEO posts)
- ✅ Contact
- ✅ Why EpoxyArt33 (with Credentials & Certifications)
- ✅ **Government Contracts** (NEW - Jan 27, 2025)
- ✅ Privacy Policy

### SEO Implementation
- ✅ Unique meta tags per page
- ✅ Schema.org JSON-LD markup (without reviews/ratings)
- ✅ sitemap.xml with all URLs
- ✅ robots.txt
- ✅ .html URL suffix for crawlability

## Suppliers & Products Featured
- Torginol (Flake systems)
- Chemtec Products
- Florida Paints
- Premera
- TREMCO (Waterproofing 350/351)
- **Duraflex** (Urethane Cement) - NEW
- Wolfpack Equipment
- EZ Concrete Supply

## Recent Changes (Jan 27, 2025)

### Added: Driveway Resurfacing Service
- Created `/driveway-resurfacing.html` page
- Added 4 real project photos showing diamond pattern driveway
- Images added to gallery with Residential category
- Navigation updated (Services dropdown + Footer)
- Sitemap updated

### Added: Restaurant Project Photos (5 images)
- Added 5 photos of commercial restaurant floor project
- Technical details: MVB Solid 100% clear + High Wear Urethane topcoat
- Added to gallery under "Commercial" category
- Images: restaurant-1.jpg through restaurant-5.jpg

### Added: Pool Deck Tropical Breeze Photos (5 images)
- Added 5 photos of recent pool deck project
- Color: Torginol Tropical Breeze
- Added new section to PoolDeckResurfacing.jsx

### Added: Waterproofing Service Page (TREMCO 350/351)
- Created `/waterproofing.html` page
- Applications: Balconies, terraces, walkways/corridors
- Full technical specifications and benefits
- Installation process documentation

### Added: Urethane Cement Service Page (Duraflex)
- Created `/urethane-cement.html` page
- Applications: Commercial kitchens, food processing, breweries, industrial
- Technical specifications: thermal shock, chemical resistance, FDA/USDA
- 5 project photos added to gallery (urethane-cement-1.jpg through 5.jpg)
- Comparison section: Urethane Cement vs Standard Epoxy

### Added: Duraflex to Products Page
- New supplier section with 3 products
- Urethane Cement Mortar, UC Slurry System, Anti-Slip Aggregate

### Added: Credentials & Certifications Section
- Updated `/why-epoxyart33.html` page with comprehensive credentials
- OSHA 30 Certification showcase
- Licensed & Insured (General Liability, Workers' Comp, FL Business License)
- SAM.GOV Registration for government contracts
- Additional credentials: LLC, Bonded, W-9, Manufacturer Trained
- "We Serve All Sectors" section (Residential, Commercial, Government)
- SEO updated with certification keywords

### Added: Government Contracts Page
- Created `/government-contracts.html` dedicated page
- SAM.GOV Registration details and benefits
- 6 Credentials showcase (SAM.GOV, OSHA 30, Insured, Bonded, W-9, LLC)
- Facilities served: Federal, Military, Educational, Municipal, Healthcare, Community
- Government-grade flooring systems
- Process for government projects (5 steps)
- SEO optimized for government contractor keywords

### Files Modified
- `frontend/src/pages/DrivewayResurfacing.jsx` (NEW)
- `frontend/src/App.js` - Added route
- `frontend/src/components/Navbar.jsx` - Added service link
- `frontend/src/components/Footer.jsx` - Added service link
- `frontend/src/mock.js` - Added 4 gallery items (IDs 27-30)
- `frontend/public/sitemap.xml` - Added URL
- `frontend/public/images/gallery/` - Added driveway-1.jpg through driveway-4.jpg

## Database Schema
- **quotes:** `{ name, email, phone, service, message, submitted_at }`
- **newsletter_subscribers:** `{ email, subscribed_at }`

## API Endpoints
- `POST /api/quote` - Submit quote request
- `POST /api/newsletter` - Subscribe to newsletter

## Backlog / Future Tasks
- Continue adding content as user requests
- Add more project photos to gallery
- Create additional blog posts for local SEO
- Potentially add customer reviews/testimonials system

## Notes
- User communicates in Spanish
- All SEO content targets Naples, Fort Myers, Cape Coral, Marco Island, SWFL
- Focus on local keywords and service areas

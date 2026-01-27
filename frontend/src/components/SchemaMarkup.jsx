import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({ data }) => {
  // Default LocalBusiness schema WITHOUT aggregateRating/review
  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://epoxyart33.com/#localbusiness",
    "name": "EpoxyArt33",
    "alternateName": "EpoxyArt33 LLC",
    "image": "https://epoxyart33.com/images/projects/hero-metallic.jpg",
    "logo": "https://epoxyart33.com/logo.png",
    "url": "https://epoxyart33.com",
    "telephone": "+1-239-276-1462",
    "email": "epoxyfloorsolutions33@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 15th St SW",
      "addressLocality": "Naples",
      "addressRegion": "FL",
      "postalCode": "34117",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1420,
      "longitude": -81.7948
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Naples", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Marco Island", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Fort Myers", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Cape Coral", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Bonita Springs", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Estero", "containedInPlace": { "@type": "State", "name": "Florida" } }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570171733397",
      "https://www.instagram.com/epoxyart_33/",
      "https://maps.app.goo.gl/oruJf8Y3W72c9wPT9"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Epoxy Flooring Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage Floor Coating" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pool Deck Resurfacing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metallic Epoxy Flooring" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Epoxy Flooring" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Epoxy Flooring" } }
      ]
    },
    "description": "Naples #1 epoxy flooring contractor. Premium garage floors, pool decks, metallic epoxy & commercial coatings. OSHA 30 certified, licensed & insured. Serving Naples, Fort Myers, Marco Island & all of Southwest Florida.",
    "slogan": "Art Beneath Your Feet",
    "foundingDate": "2022",
    "knowsAbout": ["Epoxy Flooring", "Garage Floor Coating", "Pool Deck Resurfacing", "Metallic Epoxy", "Commercial Flooring", "Industrial Flooring", "Polyaspartic Coating", "Concrete Repair"],
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD"
  };

  // If custom data is provided, merge it with context
  // For Service type, ensure NO ratings are included
  const getSchema = () => {
    if (!data) {
      return defaultLocalBusinessSchema;
    }

    // If it's a Service type, create clean Service schema without ratings
    if (data["@type"] === "Service") {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": data["@id"] || `https://epoxyart33.com/#service`,
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://epoxyart33.com/#localbusiness",
          "name": "EpoxyArt33"
        },
        "areaServed": data.areaServed || "Southwest Florida",
        "serviceType": data.serviceType || "Epoxy Flooring"
      };
    }

    // If it's FAQPage type
    if (data["@type"] === "FAQPage") {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": data["@id"] || "https://epoxyart33.com/faq#faqpage",
        "name": data.name,
        "description": data.description,
        "mainEntity": data.mainEntity || []
      };
    }

    // If it's ImageGallery type
    if (data["@type"] === "ImageGallery") {
      return {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "@id": data["@id"] || "https://epoxyart33.com/gallery#gallery",
        "name": data.name,
        "description": data.description
      };
    }

    // If it's Blog type
    if (data["@type"] === "Blog") {
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": data["@id"] || "https://epoxyart33.com/blog#blog",
        "name": data.name,
        "description": data.description
      };
    }

    // If it's BlogPosting type
    if (data["@type"] === "BlogPosting") {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": data["@id"] || `https://epoxyart33.com/blog#post`,
        "headline": data.headline,
        "description": data.description,
        "author": data.author,
        "datePublished": data.datePublished,
        "publisher": {
          "@type": "Organization",
          "name": "EpoxyArt33"
        }
      };
    }

    // If it's Product type (for Products page)
    if (data["@type"] === "Product") {
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": data["@id"] || "https://epoxyart33.com/products#products",
        "name": data.name,
        "description": data.description,
        "brand": data.brand
      };
    }

    // Default: return LocalBusiness
    return defaultLocalBusinessSchema;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;

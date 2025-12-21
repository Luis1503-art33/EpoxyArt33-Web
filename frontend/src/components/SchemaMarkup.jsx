import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({ type = 'LocalBusiness', data }) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EpoxyArt33",
    "image": "https://epoxyart33.com/images/projects/hero-metallic.jpg",
    "logo": "https://epoxyart33.com/logo.png",
    "@id": "https://epoxyart33.com",
    "url": "https://epoxyart33.com",
    "telephone": "+1-239-276-1462",
    "email": "epoxyfloorsolutions33@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Naples",
      "addressRegion": "FL",
      "postalCode": "34102",
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
      {
        "@type": "City",
        "name": "Naples"
      },
      {
        "@type": "City",
        "name": "Marco Island"
      },
      {
        "@type": "City",
        "name": "Fort Myers"
      },
      {
        "@type": "City",
        "name": "Cape Coral"
      },
      {
        "@type": "City",
        "name": "Bonita Springs"
      },
      {
        "@type": "City",
        "name": "Estero"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570171733397",
      "https://www.instagram.com/epoxyart_33/",
      "https://maps.app.goo.gl/oruJf8Y3W72c9wPT9"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Premium epoxy flooring solutions in Southwest Florida. Specializing in garage floors, metallic epoxy, pool decks, and commercial epoxy flooring.",
    "slogan": "Art Beneath Your Feet",
    "foundingDate": "2022",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Epoxy Flooring Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Residential Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garage Floor Coating",
                "description": "Premium epoxy coating for residential garages with 1-day installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pool Deck Resurfacing",
                "description": "Slip-resistant epoxy coating for pool decks with UV protection"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Commercial Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Kitchen Flooring",
                "description": "Food-safe epoxy flooring for commercial kitchens"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial Epoxy",
                "description": "Heavy-duty epoxy flooring for warehouses and industrial facilities"
              }
            }
          ]
        }
      ]
    }
  };

  const schema = { ...defaultSchema, ...data };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;

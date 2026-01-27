import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "EpoxyArt33 | Premium Epoxy Flooring in Southwest Florida",
  description = "Transform your floors with EpoxyArt33's premium epoxy solutions. Garage floors, pool decks, commercial & industrial flooring. 500+ projects completed in SWFL. Free estimates!",
  keywords = "epoxy flooring Naples, garage floor coating Fort Myers, pool deck resurfacing SWFL, metallic epoxy, commercial epoxy flooring, industrial epoxy, concrete repair, Torginol flakes, polyaspartic coating",
  image = "/images/projects/hero-metallic.jpg",
  url = "",
  type = "website"
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : "https://epoxyart33.com";
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="EpoxyArt33" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Naples" />
      <meta name="geo.position" content="26.1420;-81.7948" />
      <meta name="ICBM" content="26.1420, -81.7948" />

      {/* Business Info */}
      <meta name="contact" content="epoxyfloorsolutions33@gmail.com" />
      <meta name="author" content="EpoxyArt33" />
      <meta name="copyright" content="EpoxyArt33 2025" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#B45309" />
    </Helmet>
  );
};

export default SEO;

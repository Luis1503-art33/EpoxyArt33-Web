const fs = require('fs');
const path = require('path');

const baseUrl = 'https://epoxyart33.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/gallery', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly' },
  { url: '/showroom', priority: '0.8', changefreq: 'monthly' },
  { url: '/why', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  
  // Service Pages
  { url: '/garage-floor-coating', priority: '0.9', changefreq: 'monthly' },
  { url: '/metallic-epoxy', priority: '0.9', changefreq: 'monthly' },
  { url: '/flake-system', priority: '0.9', changefreq: 'monthly' },
  { url: '/quartz-system', priority: '0.9', changefreq: 'monthly' },
  { url: '/pool-deck-resurfacing', priority: '0.9', changefreq: 'monthly' },
  { url: '/commercial-epoxy', priority: '0.9', changefreq: 'monthly' },
  { url: '/industrial-epoxy', priority: '0.9', changefreq: 'monthly' },
  { url: '/concrete-repair', priority: '0.9', changefreq: 'monthly' },
  
  // Blog Posts
  { url: '/blog/epoxy-trends-2025', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/maintenance-guide', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/metallic-vs-quartz', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/quartz-system-benefits', priority: '0.8', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString();
  
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, xmlContent);
  console.log('✅ Sitemap generated successfully at', publicPath);
};

generateSitemap();

const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://thebrainrotapp.com';
const OUTPUT_FILE = 'sitemap.xml';

// Pages with their priority and change frequency
const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog.html', priority: '0.9', changefreq: 'weekly' },
    { url: '/app.html', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq.html', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact.html', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy.html', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms.html', priority: '0.5', changefreq: 'yearly' },
    { url: '/android-waitlist.html', priority: '0.7', changefreq: 'monthly' }
];

// Function to get all blog posts
function getBlogPosts() {
    const blogDir = path.join(__dirname, 'blog');
    const blogPosts = [];
    
    if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir);
        files.forEach(file => {
            if (file.endsWith('.html')) {
                // Extract date from filename (assuming format: YYYY-MM-DD-title.html)
                const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
                const lastmod = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
                
                blogPosts.push({
                    url: `/blog/${file}`,
                    priority: '0.8',
                    changefreq: 'monthly',
                    lastmod: lastmod
                });
            }
        });
    }
    
    return blogPosts;
}

// Generate sitemap XML
function generateSitemap() {
    const blogPosts = getBlogPosts();
    const allPages = [...staticPages, ...blogPosts];
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    allPages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}${page.url}</loc>\n`;
        
        if (page.lastmod) {
            xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
        }
        
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    return xml;
}

// Write sitemap to file
function writeSitemap() {
    const sitemap = generateSitemap();
    fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');
    console.log(`✅ Sitemap generated successfully: ${OUTPUT_FILE}`);
    console.log(`📍 URL: ${DOMAIN}/sitemap.xml`);
}

// Run the generator
writeSitemap();
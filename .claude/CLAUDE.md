# Claude Code Instructions for Brainrot Website

## Blog System Overview

This website uses a simple static blog system. Blog posts are individual HTML files stored in the `/blog` directory, and they are listed dynamically on the blog index page using JavaScript.

## Adding a New Blog Post

When asked to add a new blog post, follow these steps:

1. **Create the blog post file** in `/blog/YYYY-MM-DD-slug-title.html` format
   - Use the current date in YYYY-MM-DD format
   - Create a URL-friendly slug from the title (lowercase, hyphens instead of spaces)
   
2. **Use this template structure**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[POST TITLE] - brainrot blog</title>
    <meta name="description" content="[150-160 character description]">
    <meta name="keywords" content="[relevant, comma, separated, keywords]">
    <meta name="author" content="Yoni Smolyar">
    <meta name="date" content="YYYY-MM-DD">
    
    <!-- favicon -->
    <link rel="icon" type="image/png" href="../images/favicon.png">
    <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
    
    <!-- open graph / facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://thebrainrotapp.com/blog/[filename]">
    <meta property="og:title" content="[POST TITLE]">
    <meta property="og:description" content="[description]">
    <meta property="og:image" content="https://thebrainrotapp.com/images/og-image.png">
    <meta property="article:published_time" content="YYYY-MM-DD">
    <meta property="article:author" content="Yoni Smolyar">
    
    <!-- twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://thebrainrotapp.com/blog/[filename]">
    <meta property="twitter:title" content="[POST TITLE]">
    <meta property="twitter:description" content="[description]">
    <meta property="twitter:image" content="https://thebrainrotapp.com/images/og-image.png">
    
    <!-- canonical url -->
    <link rel="canonical" href="https://thebrainrotapp.com/blog/[filename]">
    
    <!-- structured data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "[POST TITLE]",
        "description": "[description]",
        "author": {
            "@type": "Person",
            "name": "Yoni Smolyar",
            "url": "https://thebrainrotapp.com/author/yoni-smolyar.html"
        },
        "datePublished": "YYYY-MM-DD",
        "dateModified": "YYYY-MM-DD",
        "url": "https://thebrainrotapp.com/blog/[filename]",
        "image": "https://thebrainrotapp.com/images/og-image.png",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://thebrainrotapp.com/blog/[filename]"
        },
        "wordCount": "[estimated word count]",
        "articleSection": "Digital Wellness",
        "publisher": {
            "@type": "Organization",
            "name": "brainrot",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thebrainrotapp.com/images/brainrot-icon.webp"
            }
        }
    }
    </script>
    
    <!-- stylesheet -->
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <nav class="site-header">
        <div class="header-container">
            <a href="/" class="brand">
                <img src="../images/brainrot-icon.webp" alt="brainrot icon" class="brand-icon">
                <span class="brand-text">brainrot</span>
            </a>
        </div>
    </nav>
    
    <div class="container">
        <article class="blog-post">
            <header>
                <h1>[POST TITLE]</h1>
                <div class="post-meta">
                    <time datetime="YYYY-MM-DD">[Month DD, YYYY]</time>
                    <span class="reading-time">[X] min read</span>
                    <span class="post-author">by <a href="../author/yoni-smolyar.html" class="post-author">Yoni Smolyar</a></span>
                </div>
            </header>
            
            <div class="post-content">
                [CONTENT HERE]
            </div>
            
            <div class="post-footer">
                <a href="/blog.html" class="back-to-blog">← Back to Blog</a>
            </div>
        </article>
    </div>
    
    <footer>
        <nav>
            <a href="/privacy.html">privacy</a>
            <a href="/terms.html">terms</a>
            <a href="/contact.html">contact</a>
            <a href="/faq.html">faq</a>
        </nav>
    </footer>
</body>
</html>
```

3. **Update blog.js** to add the new post to the blogPosts array:
```javascript
{
    title: "[POST TITLE]",
    date: "YYYY-MM-DD",
    excerpt: "[150-160 character excerpt]",
    url: "blog/[filename]",
    readTime: "[X] min",
    author: "Yoni Smolyar",
    authorUrl: "author/yoni-smolyar.html"
}
```

4. **Regenerate the sitemap** by running:
```bash
node generate-sitemap.js
```

## Content Guidelines

- Focus on digital wellness, screen time management, and healthy tech habits
- Keep posts informative but accessible
- Include practical tips and actionable advice
- Maintain a supportive, non-judgmental tone
- Typical post length: 500-1000 words (3-7 minute read)

## SEO Best Practices

- Use descriptive, keyword-rich titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Include relevant keywords naturally in the content
- Use proper heading hierarchy (h1 > h2 > h3)
- Add internal links to other relevant pages when appropriate

## Technical Notes

- All paths are relative to the site root
- The blog uses static HTML files for optimal performance and SEO
- JavaScript enhancement is only used for the blog listing page
- The sitemap is automatically generated and includes all blog posts
- Blog posts are sorted by date (newest first) on the listing page
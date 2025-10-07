# SEO Optimization Guide - Olkunda Ameublement

This document outlines the SEO optimizations implemented for the Olkunda Ameublement website with internationalization support.

## 🎯 Implemented SEO Features

### 1. **Dynamic Metadata per Locale**
Location: `app/[locale]/layout.tsx`

Each language has optimized metadata:
- **Title**: Locale-specific, keyword-rich titles
- **Description**: Compelling descriptions with key features
- **Keywords**: Targeted keywords for furniture industry in Cameroon
- **Authors & Publisher**: Brand attribution

**French (fr):**
```
Title: Olkunda Ameublement - Meubles de Qualité au Cameroun
Keywords: meubles Cameroun, lits, canapés, chaises, tables, ameublement, mobilier, livraison Cameroun
```

**English (en):**
```
Title: Olkunda Furniture - Quality Furniture in Cameroon
Keywords: furniture Cameroon, beds, sofas, chairs, tables, furnishing, home decor, delivery Cameroon
```

### 2. **Alternate Language Links (hreflang)**
Automatically generated for each page:
```html
<link rel="canonical" href="https://olkunda.com/fr" />
<link rel="alternate" hreflang="fr" href="https://olkunda.com/fr" />
<link rel="alternate" hreflang="en" href="https://olkunda.com/en" />
<link rel="alternate" hreflang="x-default" href="https://olkunda.com/fr" />
```

### 3. **Open Graph Tags**
Full social media optimization:
- **og:title**: Locale-specific titles
- **og:description**: Compelling descriptions
- **og:image**: 1200x630px image (add `/public/og-image.jpg`)
- **og:locale**: fr_CM / en_CM (Cameroon locales)
- **og:type**: website
- **og:url**: Canonical URL per locale

### 4. **Twitter Card Tags**
Optimized for Twitter sharing:
- **twitter:card**: summary_large_image
- **twitter:title**: Locale-specific
- **twitter:description**: Locale-specific
- **twitter:image**: Shared OG image

### 5. **Sitemap with Internationalization**
Location: `app/sitemap.ts`

Generates XML sitemap with:
- Alternate language links for each URL
- Change frequency: daily
- Priority: 1.0 (homepage)
- Last modified dates

**Output:**
```xml
<url>
  <loc>https://olkunda.com/fr</loc>
  <xhtml:link rel="alternate" hreflang="fr" href="https://olkunda.com/fr"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://olkunda.com/en"/>
  <lastmod>2025-01-07</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>
```

### 6. **Robots.txt**
Location: `app/robots.ts`

Configuration:
- **Allow**: All pages (/)
- **Disallow**: /api/, /admin/
- **Sitemap**: Points to sitemap.xml

### 7. **Structured Data Ready**
The metadata structure supports adding JSON-LD structured data for:
- LocalBusiness
- Product listings
- BreadcrumbList
- Organization

## 📋 Setup Instructions

### 1. Set Base URL
Create `.env.local`:
```bash
NEXT_PUBLIC_BASE_URL=https://olkunda.com
```

### 2. Add OG Image
Create a 1200x630px image at:
```
/public/og-image.jpg
```

Recommended content:
- Olkunda logo
- Sample furniture images
- Brand colors (orange #FF9900)

### 3. Google Search Console Verification
Update in `app/[locale]/layout.tsx`:
```typescript
verification: {
  google: 'your-actual-google-verification-code',
}
```

Get your code from: https://search.google.com/search-console

### 4. Submit Sitemap
After deployment, submit to:
- **Google Search Console**: https://olkunda.com/sitemap.xml
- **Bing Webmaster Tools**: https://olkunda.com/sitemap.xml

## 🔍 SEO Best Practices Implemented

### ✅ Technical SEO
- [x] Semantic HTML structure
- [x] Mobile-first responsive design
- [x] Fast loading (Next.js optimization)
- [x] Clean URLs with locale prefixes
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Alt text for images (in ProductCard)
- [x] Canonical URLs
- [x] Robots meta tags

### ✅ International SEO
- [x] hreflang tags for language targeting
- [x] Locale-specific metadata
- [x] x-default for default language
- [x] Localized URLs (/fr, /en)
- [x] Localized sitemaps

### ✅ On-Page SEO
- [x] Keyword-rich titles
- [x] Compelling meta descriptions
- [x] Header tags with keywords
- [x] Internal linking structure
- [x] Content in multiple languages

### ✅ Social Media SEO
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Social sharing optimization
- [x] Brand consistency

## 📊 Monitoring & Analytics

### Recommended Tools
1. **Google Search Console**
   - Monitor search performance
   - Check indexing status
   - View hreflang errors

2. **Google Analytics 4**
   - Track user behavior
   - Monitor conversions
   - Analyze traffic sources

3. **Bing Webmaster Tools**
   - Additional search visibility
   - Index coverage

### Key Metrics to Track
- Organic search traffic
- Keyword rankings
- Click-through rates (CTR)
- Bounce rate
- Page load speed
- Mobile usability

## 🚀 Next Steps for Enhanced SEO

### 1. Add Structured Data (JSON-LD)
```typescript
// In layout.tsx or page.tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Olkunda Ameublement",
  "description": "...",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CM"
  },
  "telephone": "+237697111394"
};
```

### 2. Add Product Schema
For each product page, add Product schema with:
- name, description, image
- offers (price, availability)
- aggregateRating (if you have reviews)

### 3. Create Blog Section
- Furniture care tips
- Interior design ideas
- Product guides
- Boosts organic traffic

### 4. Optimize Images
- Use WebP format
- Implement lazy loading (already done with Next.js Image)
- Add descriptive alt text
- Compress images

### 5. Build Backlinks
- Local business directories in Cameroon
- Social media profiles
- Partner websites
- Guest blogging

### 6. Local SEO
- Google Business Profile
- Local citations
- Customer reviews
- Local keywords

## 📝 Content Guidelines

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Add location (Cameroun/Cameroon)
- Make it compelling

### Meta Descriptions
- 150-160 characters
- Include call-to-action
- Mention key benefits
- Natural keyword usage

### Content
- Minimum 300 words per page
- Use keywords naturally
- Answer user questions
- Update regularly

## 🔧 Maintenance

### Monthly Tasks
- [ ] Check Google Search Console for errors
- [ ] Review keyword rankings
- [ ] Update content if needed
- [ ] Check broken links
- [ ] Monitor page speed

### Quarterly Tasks
- [ ] Audit site structure
- [ ] Update metadata if needed
- [ ] Review competitor SEO
- [ ] Analyze user behavior
- [ ] Update sitemap if structure changes

## 📚 Resources

- [Next.js Metadata Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Google Search Central](https://developers.google.com/search)
- [hreflang Guide](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Schema.org](https://schema.org/)

---

**Last Updated**: January 2025
**Maintained by**: Olkunda Development Team

# SEO Configuration Guide: Canonical Tags, Robots.txt & Sitemap

## Overview

This document describes the complete SEO configuration for **Steal a Brainrot Unblocked** with the official domain `www.stealabrainrotunblocked.com`.

## 1. Canonical Tags Configuration

### Purpose
Canonical tags tell search engines which version of a page is the "official" version, preventing duplicate content issues.

### Implementation

#### Homepage (`/`)
```html
<link rel="canonical" href="https://www.stealabrainrotunblocked.com" />
```
- **Priority**: 1.0 (highest)
- **Change Frequency**: Daily
- **Purpose**: Main entry point for the website

#### Category Pages (`/all`, `/hot`, `/puzzle`, `/3d`, `/action`)
```html
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/all" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/hot" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/puzzle" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/3d" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/action" />
```
- **Priority**: 0.9
- **Change Frequency**: Daily
- **Purpose**: Main category landing pages

#### Tag Pages (`/tag/[tag]`)
```html
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/tag/brainrot" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/tag/casual" />
<!-- ... 20 tags total ... -->
```
- **Priority**: 0.8
- **Change Frequency**: Weekly
- **Tags Covered**: brainrot, casual, meme, clicker, roblox, puzzle, idle, funny, strategy, adventure, brain, arcade, action, multiplayer, battle, racing, io, shooter, building, 3d

#### Game Detail Pages (`/[slug]`)
```html
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/1v1-lol" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/kart-bros" />
<!-- ... 25 games total ... -->
```
- **Priority**: 0.7 - 0.95 (based on play count)
- **Change Frequency**: Weekly
- **Purpose**: Individual game pages with unique content

#### Information Pages
```html
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/about" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/privacy" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/terms" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/contact" />
<link rel="canonical" href="https://www.stealabrainrotunblocked.com/copyright" />
```
- **Priority**: 0.5 - 0.6
- **Change Frequency**: Monthly

## 2. Robots.txt Configuration

**File**: `public/robots.txt`

### Features
- ✅ Allows all search engines to crawl the site
- ✅ Blocks API and internal directories
- ✅ Specific crawl delays for different bots
- ✅ Blocks known bad bots (AhrefsBot, SemrushBot, DotBot)
- ✅ References all sitemap files

### Content
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /.next/
Disallow: /node_modules/

User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
Disallow: /

Sitemap: https://www.stealabrainrotunblocked.com/sitemap.xml
Sitemap: https://www.stealabrainrotunblocked.com/sitemap-games.xml
Sitemap: https://www.stealabrainrotunblocked.com/sitemap-tags.xml
```

## 3. Sitemap Configuration

### Main Sitemap (`sitemap.xml`)
- **Size**: 2.5 KB
- **URLs**: 11 main pages
- **Includes**:
  - Homepage (priority: 1.0)
  - Category pages (priority: 0.9)
  - Information pages (priority: 0.5-0.6)
  - References to game and tag sitemaps

### Games Sitemap (`sitemap-games.xml`)
- **Size**: 9.1 KB
- **URLs**: 25 game pages
- **Priority Distribution**:
  - High (0.95): Games with 1M+ plays (1v1 LOL, Kart Bros, Little Big Snake)
  - Medium (0.9): Games with 500K-1M plays (Smash Karts, Goodgame Empire, etc.)
  - Standard (0.8): Games with 10K-500K plays
  - Lower (0.7): Games with <10K plays
- **Features**:
  - Includes image URLs for rich snippets
  - Last modified dates from release dates
  - Weekly change frequency

### Tags Sitemap (`sitemap-tags.xml`)
- **Size**: 3.8 KB
- **URLs**: 20 tag pages
- **Priority**: 0.8 (all tags)
- **Change Frequency**: Weekly
- **Tags**:
  - brainrot, casual, meme, clicker, roblox
  - puzzle, idle, funny, strategy, adventure
  - brain, arcade, action, multiplayer, battle
  - racing, io, shooter, building, 3d

## 4. Implementation Details

### Canonical Tag Implementation

#### In Next.js Metadata (app/page.tsx)
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: [...],
  canonical: 'https://www.stealabrainrotunblocked.com',
  openGraph: {
    url: 'https://www.stealabrainrotunblocked.com',
    // ...
  },
};
```

#### Dynamic Routes (app/[slug]/page.tsx)
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const game = allGames.find(g => g.slug === resolvedParams.slug);
  
  return {
    canonical: `https://www.stealabrainrotunblocked.com/${game.slug}`,
    // ...
  };
}
```

### SEO Configuration File
**File**: `src/config/seo.ts`

Contains:
- `SITE_URL`: https://www.stealabrainrotunblocked.com
- `HOME_SEO`: Homepage configuration
- `CATEGORY_SEO`: Category page configurations
- `TAG_SEO`: Tag page configurations (20 tags)
- Schema generation functions for structured data

## 5. Best Practices Implemented

✅ **Canonical URLs**
- All pages have explicit canonical tags
- Prevents duplicate content issues
- Helps consolidate ranking signals

✅ **Robots.txt**
- Allows search engines to crawl public content
- Blocks unnecessary directories
- Specific rules for different bots
- References all sitemaps

✅ **Sitemaps**
- Organized into 3 files for better management
- Includes priority and change frequency
- Image URLs for rich snippets
- Last modified dates for freshness signals

✅ **URL Structure**
- Clean, descriptive URLs
- No query parameters for main content
- Consistent domain usage (www.stealabrainrotunblocked.com)

✅ **Pagination**
- Category pages support pagination with query parameters
- Example: `/all?page=2`
- First page doesn't show `?page=1` (keeps URL clean)

## 6. Testing & Verification

### Google Search Console
1. Add property: https://www.stealabrainrotunblocked.com
2. Submit sitemaps:
   - /sitemap.xml
   - /sitemap-games.xml
   - /sitemap-tags.xml
3. Check coverage and indexation status

### Bing Webmaster Tools
1. Add site: https://www.stealabrainrotunblocked.com
2. Submit sitemaps
3. Monitor crawl stats

### Online Tools
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) - Crawl and verify canonical tags
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) - Validate sitemap format
- [Robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool) - Test robots.txt rules

## 7. Maintenance

### When to Update

**Robots.txt**
- When adding new directories
- When blocking new bad bots
- When changing crawl delays

**Sitemaps**
- When adding new games (update sitemap-games.xml)
- When adding new tags (update sitemap-tags.xml)
- When changing page priorities
- Monthly: Update lastmod dates

**Canonical Tags**
- When restructuring URLs
- When consolidating duplicate content
- When changing domain

### Update Process
1. Update relevant files
2. Test with online validators
3. Submit updated sitemaps to Google Search Console
4. Monitor indexation in GSC

## 8. Current Statistics

- **Total Pages**: 56+
  - 1 Homepage
  - 5 Category pages
  - 20 Tag pages
  - 25 Game pages
  - 5 Information pages

- **Total Sitemaps**: 3
  - Main sitemap: 11 URLs
  - Games sitemap: 25 URLs
  - Tags sitemap: 20 URLs

- **Canonical Coverage**: 100%
  - All pages have explicit canonical tags
  - All URLs point to www.stealabrainrotunblocked.com

## 9. SEO Impact

### Expected Benefits
- ✅ Improved crawl efficiency
- ✅ Better indexation of all pages
- ✅ Consolidated ranking signals
- ✅ Reduced duplicate content issues
- ✅ Faster discovery of new content
- ✅ Better mobile experience signals

### Monitoring
- Track indexation in Google Search Console
- Monitor organic traffic trends
- Check keyword rankings
- Analyze click-through rates (CTR)

## References

- [Google: Consolidate duplicate URLs](https://developers.google.com/search/docs/beginner/consolidate-duplicate-urls)
- [Google: Robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [Google: Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Next.js: Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)


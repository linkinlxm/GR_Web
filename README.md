# GR Web

Static marketing and product-knowledge site for GR Link.

## Local checks

```sh
npm run check
```

This rebuilds Tailwind CSS and validates canonical URLs, required GEO files, product facts, the Open Graph image, crawler declarations, and sitemap coverage.

## Product facts

`data/product.json` is the review checklist for supported cameras, minimum iOS version, current documented version, and official URLs. When GR Link changes, update this file first and then update the visible HTML, Markdown, `llms-full.txt`, and App Store listing. `npm run validate:geo` catches missing canonical facts on the homepage.

## Search indexing release checklist

1. Run `npm run check`.
2. Confirm `sitemap.xml` dates match materially changed HTML pages.
3. Deploy and verify `/robots.txt`, `/llms.txt`, `/llms-full.txt`, and `/sitemap.xml` return HTTP 200.
4. Submit the sitemap in Google Search Console and Bing Webmaster Tools.
5. Request re-indexing for the homepage and compatibility pages after major product changes.
6. Submit changed URLs through IndexNow only after an IndexNow key has been configured; never commit the key to this repository.

The crawler policy currently allows AI search/retrieval and user-requested fetching while declining model-training crawlers. Review `robots.txt` if the product's training policy changes.

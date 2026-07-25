# Zazu Adventures Contentful Model

This model is based on the current React site structure in `zazu-web/src`.
It keeps the CMS simple for editors, while still supporting the reusable blocks
already used across the site:

- Homepage hero
- Featured tour collections
- Destination detail pages
- Tour detail pages
- Testimonials
- Simple marketing pages like About, Contact, Travel Services, and Travel Guide

## Recommended Structure

Use a mix of:

- **Singletons** for global and homepage content
- **Collection content types** for destinations, tours, testimonials, FAQs, and itinerary items
- **Reusable page blocks** for simple marketing pages

---

## 1. Global Content

### Content Type: `siteSettings`
Use this as a singleton.

Fields:

- `siteName` - Short text, required
- `logo` - Asset
- `primaryNavigation` - Reference many `navigationItem`
- `footerNavigation` - Reference many `navigationItem`
- `defaultMetaTitle` - Short text
- `defaultMetaDescription` - Long text
- `contactEmail` - Short text
- `contactPhone` - Short text
- `whatsappNumber` - Short text
- `locationLabel` - Short text
- `socialLinks` - Reference many `socialLink`

If you want the footer to be managed separately from the rest of the site
settings, keep the navigation links here and move the visual/footer copy into a
dedicated singleton below.

### Content Type: `navigationItem`
Fields:

- `label` - Short text, required
- `href` - Short text, required
- `order` - Integer
- `openInNewTab` - Boolean

### Content Type: `socialLink`
Fields:

- `label` - Short text, required
- `url` - Short text, required
- `iconKey` - Short text, optional

### Content Type: `footerSettings`
Use this as a singleton if you want the footer to be editable without touching
global navigation settings.

Fields:

- `internalName` - Short text, required
- `logo` - Asset
- `copyrightText` - Short text, required
- `builtByText` - Short text
- `footerNavigation` - Reference many `navigationItem`
- `socialLinks` - Reference many `socialLink`

Suggested footer values for the current site:

- `copyrightText` - `© 2026 Zazu Adventures. All rights reserved.`
- `builtByText` - `Built by codewithdaviess`

---

## 2. Homepage

### Content Type: `homePage`
Use this as a singleton for `/`.

Fields:

- `internalName` - Short text, required
- `seoTitle` - Short text
- `seoDescription` - Long text
- `heroEyebrow` - Short text
- `heroTitle` - Short text, required
- `heroDescription` - Long text
- `heroImage` - Asset, required
- `heroPrimaryActionLabel` - Short text
- `heroPrimaryActionHref` - Short text
- `featuredDayTours` - Reference many `tour`
- `featuredPackages` - Reference many `tour`
- `featuredMultiDayTours` - Reference many `tour`
- `featuredTestimonials` - Reference many `testimonial`

This maps directly to the current homepage sections:

- Hero carousel
- Top Selling
- Popular Packages
- Multiday Packages
- Testimonials

If you want the hero to stay as a carousel, add a repeatable block:

### Content Type: `heroSlide`
Fields:

- `eyebrow` - Short text
- `title` - Short text, required
- `description` - Long text
- `image` - Asset, required
- `primaryActionLabel` - Short text
- `primaryActionHref` - Short text
- `order` - Integer

Then reference many `heroSlide` entries from `homePage`.

---

## 3. Destination Content

### Content Type: `destination`
Collection content type for `/destinations/:id`.

Fields:

- `internalName` - Short text, required
- `title` - Short text, required
- `slug` - Short text, required, unique
- `location` - Short text
- `region` - Short text
- `summary` - Long text, required
- `heroImage` - Asset
- `about` - Long text
- `overview` - Long text
- `gallery` - Asset many
- `highlights` - List of short text
- `travelTips` - List of long text
- `whatsIncluded` - List of short text
- `duration` - Short text
- `price` - Short text
- `relatedTours` - Reference many `tour`
- `faqs` - Reference many `faqItem`

This matches the current destination pages and keeps linked tours in sync with
the tour catalog.

---

## 4. Tour Content

### Content Type: `tour`
Collection content type for `/tours/:slug`.

Fields:

- `internalName` - Short text, required
- `title` - Short text, required
- `slug` - Short text, required, unique
- `tourType` - Symbol, required
  - Valid values: `day`, `multi-day`, `package`
- `category` - Short text
- `destination` - Reference many `destination`
- `location` - Short text
- `summary` - Long text, required
- `description` - Long text
- `heroImage` - Asset, required
- `gallery` - Asset many
- `priceFrom` - Number
- `duration` - Short text
- `highlights` - List of short text
- `includes` - List of short text
- `itinerary` - Reference many `itineraryItem`
- `faqs` - Reference many `faqItem`

This is the main content type that powers:

- Day trips
- Multi-day trips
- Package tours

### Content Type: `itineraryItem`
Fields:

- `label` - Short text, required
- `description` - Long text, required
- `order` - Integer

### Content Type: `faqItem`
Fields:

- `question` - Short text, required
- `answer` - Long text, required
- `order` - Integer

---

## 5. Testimonials

### Content Type: `testimonial`
Collection content type for testimonial sections.

Fields:

- `internalName` - Short text
- `name` - Short text, required
- `date` - Date
- `image` - Asset
- `text` - Long text, required
- `featured` - Boolean
- `order` - Integer

Use `featured` to pick the testimonials shown on the homepage and about page.

---

## 6. Generic Pages

### Content Type: `page`
Use for About, Contact, Travel Services, and Travel Guide.

Fields:

- `internalName` - Short text, required
- `title` - Short text, required
- `slug` - Short text, required, unique
- `seoTitle` - Short text
- `seoDescription` - Long text
- `seoKeywords` - Short text
- `heroEyebrow` - Short text
- `heroTitle` - Short text, required
- `heroDescription` - Long text
- `heroImage` - Asset
- `body` - Rich text
- `sections` - Reference many `pageSection`

### Content Type: `pageSection`
Use this as a flexible modular block for pages that need more than just a hero.

Fields:

- `sectionType` - Symbol, required
  - Valid values: `richText`, `cta`, `featureGrid`, `testimonialGrid`, `tourGrid`, `faqGrid`, `gallery`
- `heading` - Short text
- `subheading` - Long text
- `body` - Rich text
- `image` - Asset
- `primaryActionLabel` - Short text
- `primaryActionHref` - Short text
- `secondaryActionLabel` - Short text
- `secondaryActionHref` - Short text
- `items` - Reference many entries
- `order` - Integer

This gives you enough flexibility to build future marketing pages without
changing the React layout every time.

---

## 7. Route Mapping

Current routes map cleanly to these content types:

- `/` -> `homePage`
- `/destinations` -> list of `destination`
- `/destinations/:id` -> single `destination`
- `/tours` -> list of `tour`
- `/tours/:slug` -> single `tour`
- `/about` -> `page`
- `/contact` -> `page`
- `/travel-services` -> `page`
- `/travel-guide` -> `page`

---

## 8. Suggested Field Validations

- Make `slug` unique on `page`, `destination`, and `tour`
- Require `title`, `summary`, and `heroImage` on entries that render detail pages
- Limit `tourType` to the three existing site categories
- Order repeatable references with an `order` field where the display order matters

---

## 9. Practical Migration Order

If we migrate this site into Contentful, I would load content in this order:

1. `siteSettings`
2. `navigationItem` and `socialLink`
3. `destination`
4. `tour`
5. `itineraryItem`
6. `faqItem`
7. `testimonial`
8. `homePage`
9. `page`

That keeps references resolvable as you seed the space.

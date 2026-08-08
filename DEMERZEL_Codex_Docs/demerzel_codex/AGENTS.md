# DEMERZEL Enterprises --- Codex Project Instructions

## Project objective

Build the DEMERZEL Enterprises website as a professional
field-technology platform and commerce site based on the supplied
DEMERZEL source catalogues.

The source catalogues establish a product universe spanning: - optics
and binoculars - GPS/navigation instruments - camera traps - wildlife
telemetry - surveying equipment - drones - fish finders / echo
sounders - range finders - telescopes / astronomy - field lighting and
outdoor equipment

The Vanrakshak catalogue establishes a strong optics/wildlife/forestry
positioning with product families including DRISHTI, TEJAS, CHAKOR,
RAKSHAK, VANRAAJ and NAKSHATRA.

## Non-negotiable source rules

1.  Treat the supplied catalogues as the source of truth for product
    names, specifications, descriptions and existing catalogue claims.
2.  Do not invent product specifications, prices, stock, certifications,
    warranty terms, reviews, ratings, project outcomes,
    partner/authorization status or customer claims.
3.  If a field is not present in the source material, represent it as
    missing/unknown rather than fabricating it.
4.  Preserve catalogue terminology unless the product-data layer
    explicitly normalizes a field.
5.  Do not silently "correct" apparent catalogue inconsistencies. Flag
    them in a data-quality note for review.
6.  Marketing copy must not make stronger technical or regulatory claims
    than the source supports.
7.  Third-party brands appearing in the catalogue must not automatically
    be described as authorized partners, distributors or official
    relationships.

## Product architecture

Use DEMERZEL Enterprises as the parent/company identity.

Potential product/brand hierarchy: - DEMERZEL Enterprises - Vanrakshak
optics/product family where applicable - Product series: - DRISHTI -
TEJAS - CHAKOR - RAKSHAK - VANRAAJ - NAKSHATRA

Do not rename or merge existing product families without an explicit
product-data decision.

## Website principles

The website should feel: - professional - technical - field-oriented -
premium - trustworthy - suitable for both professional and enthusiast
audiences

Primary discovery paths: 1. Search/product-led discovery 2.
Mission/use-case discovery 3. Equipment Finder

The website should support both direct commerce and quote/enquiry
workflows. High-value/professional equipment should not be forced into a
simplistic retail-only flow.

## Implementation principles

-   Build reusable components.
-   Use typed product/specification models.
-   Keep product content data-driven.
-   Avoid hardcoding specifications inside UI components.
-   Use responsive layouts.
-   Make accessibility a first-class requirement.
-   Use semantic HTML and keyboard-accessible interactions.
-   Add loading, empty, error and retry states.
-   Use stable URL slugs.
-   Keep SEO metadata data-driven.
-   Do not create fake reviews, prices, stock counts or testimonials.
-   Separate CMS/catalogue content from application logic.
-   Add tests for important product filtering, comparison and enquiry
    flows.

## Suggested route structure

Public: - / - /products - /products/\[category\] -
/products/\[category\]/\[slug\] - /solutions - /solutions/\[slug\] -
/industries - /industries/\[slug\] - /brands - /projects - /resources -
/resources/catalogues - /resources/datasheets - /resources/guides -
/resources/blog - /resources/faq - /about - /contact - /quote - /support

Authenticated: - /account/dashboard - /account/orders -
/account/quotes - /account/wishlist - /account/equipment -
/account/projects - /account/service - /account/documents -
/account/profile - /account/organization

## Before implementation

Read: 1. docs/PRODUCT_CATALOG.md 2. docs/WEBSITE_SPEC.md 3.
docs/DATA_MODEL.md 4. docs/CONTENT_RULES.md 5.
docs/IMPLEMENTATION_PLAN.md 6. skills/catalogue-content.md 7.
skills/product-pages.md 8. skills/website-ui.md 9. skills/ecommerce.md
10. skills/quality.md

Then inspect the existing repository and preserve useful existing
conventions before adding new architecture.

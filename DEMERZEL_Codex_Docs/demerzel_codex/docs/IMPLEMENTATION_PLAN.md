# DEMERZEL Implementation Plan

## Phase 0 --- Repository inspection

Before coding: 1. inspect existing repository 2. identify framework 3.
identify package manager 4. inspect existing components 5. inspect
current routing 6. inspect environment variables 7. inspect database
setup 8. inspect testing setup 9. preserve existing conventions where
reasonable

Do not rewrite the entire project without evidence that it is necessary.

## Phase 1 --- Foundation

Implement: - design tokens - typography - layout - header - footer -
responsive navigation - buttons - cards - inputs - modal/dialog -
toast - loading - empty - error - breadcrumbs

## Phase 2 --- Catalogue domain

Implement: - Category - Brand - Product - ProductSpecification -
ProductImage - ProductDocument

Build seed data only from the supplied catalogue.

Mark uncertain source records as `needs_review`.

## Phase 3 --- Product discovery

Implement: - product listing - search - filters - sorting - pagination -
product detail - compare - wishlist

## Phase 4 --- Mission discovery

Implement: - solution pages - application mapping - Equipment Finder

Equipment Finder should initially be deterministic/rule-based, not
AI-dependent.

Example inputs: - mission - environment - desired distance - low-light
requirement - portability - field of view

Recommendations must map to stored product data.

## Phase 5 --- Commerce

Implement: - cart - checkout if commercial requirements are known -
enquiry - quote request - order history

If payment/shipping requirements are not defined, prioritize
quote/enquiry architecture rather than inventing payment rules.

## Phase 6 --- Customer portal

Implement: - dashboard - orders - quotes - equipment - documents -
service - organization

## Phase 7 --- CMS/admin

Implement: - product CRUD - specification management - category
management - brand management - document management - solution content -
project content - resource content

## Phase 8 --- DEMERZEL FIELD foundation

Do not attempt full hardware integration initially.

Implement: - account - equipment registry - project - field session -
map shell - observation - report shell

Keep hardware integrations behind adapters.

## Phase 9 --- Quality

Required: - unit tests - component tests - API tests - critical E2E
flows - accessibility checks - responsive checks - data validation

Critical E2E: 1. browse category 2. filter products 3. open product 4.
compare products 5. request quote 6. account login 7. view equipment 8.
submit service request

## Phase 10 --- SEO and production

-   metadata
-   sitemap
-   robots
-   canonical URLs
-   Open Graph
-   structured data
-   image optimization
-   caching
-   error monitoring
-   analytics

Do not expose customer or equipment data in analytics events.

## Definition of done

A feature is not done until: - UI is responsive - loading/empty/error
states exist - validation exists - accessibility is addressed -
source-grounded data is used - tests cover important behavior - no
fabricated catalogue information is introduced

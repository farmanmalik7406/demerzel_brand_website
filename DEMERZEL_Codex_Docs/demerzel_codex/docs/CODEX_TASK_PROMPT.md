# Codex Starting Brief --- DEMERZEL Website

You are implementing the DEMERZEL Enterprises website.

Read these files first: - AGENTS.md - docs/PRODUCT_CATALOG.md -
docs/WEBSITE_SPEC.md - docs/DATA_MODEL.md - docs/CONTENT_RULES.md -
docs/IMPLEMENTATION_PLAN.md - skills/catalogue-content.md -
skills/product-pages.md - skills/website-ui.md - skills/ecommerce.md -
skills/quality.md

## First task

Do not immediately generate the entire application.

First: 1. inspect the repository 2. report the existing stack and
architecture 3. identify what can be reused 4. identify missing
infrastructure 5. propose the smallest implementation sequence 6. then
implement Phase 1 and Phase 2 from docs/IMPLEMENTATION_PLAN.md

## Product-data requirement

Create a clean, typed catalogue data layer.

Start with the Vanrakshak optics products because their technical data
is sufficiently detailed in the supplied catalogue.

Implement these series: - DRISHTI - TEJAS - CHAKOR - RAKSHAK - VANRAAJ -
NAKSHATRA

Do not fabricate prices, inventory, reviews or warranty terms.

For the broader A&S catalogue, create category/brand records and only
populate detailed product specifications where they are explicitly
available in the source material.

## Important

If source information is ambiguous, mark the record for review.

Do not silently correct source inconsistencies.

Build reusable components and keep product rendering data-driven.

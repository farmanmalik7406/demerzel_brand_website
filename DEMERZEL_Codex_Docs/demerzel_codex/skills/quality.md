# Skill: Quality and Verification

## Source verification

Every catalogue specification must be traceable.

## Tests

At minimum: - product listing renders - filters work - search works -
product detail renders - specification groups render - compare works -
quote submission validates - authentication protects account routes

## Data validation

Validate: - product name - slug - SKU if present - specification
values - source references - image alt text - category - brand

## Security

-   validate server-side
-   authorize every account resource
-   do not expose organization data across tenants
-   rate-limit public enquiry endpoints
-   sanitize rich content
-   validate uploaded documents
-   avoid leaking serial numbers

## Accessibility

Test: - keyboard - focus - headings - labels - dialogs - tables - color
contrast - reduced motion

## Release gate

Do not release if: - fabricated product data exists - source ambiguity
is silently corrected - critical account data is exposed - quote/order
APIs trust client-side pricing - core mobile navigation is broken

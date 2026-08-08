# Skill: DEMERZEL Commerce

## Commerce model

Support two purchase paths:

### Retail path

Product → Cart → Checkout → Order

### Professional path

Product → Enquiry → Quote → Approval → Order

Do not assume every catalogue product has a public price.

## Quote workflow

States: - draft - submitted - under_review - quote_sent -
customer_accepted - customer_declined - expired - converted_to_order

## Cart

Cart items must reference product IDs and current commercial data.

Do not trust client-side prices.

## Customer data

Protect: - names - contact information - addresses - organization
information - orders - equipment serial numbers

Do not expose these fields in public APIs.

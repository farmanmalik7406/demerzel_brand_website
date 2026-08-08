# DEMERZEL Data Model

## Product

``` ts
type Product = {
  id: string;
  slug: string;
  name: string;
  brandId?: string;
  categoryId: string;
  series?: string;
  sku?: string;
  status: "draft" | "published" | "archived";
  shortDescription?: string;
  description?: string;
  applications: string[];
  features: string[];
  specifications: ProductSpecification[];
  images: ProductImage[];
  documents: ProductDocument[];
  pricing?: ProductPricing;
  inventory?: ProductInventory;
  sourceNotes?: string[];
  dataQualityStatus: "verified" | "needs_review";
};
```

## Specification

Use a generic specification system so binoculars, GPS devices, thermal
cameras, drones and survey equipment can coexist.

``` ts
type ProductSpecification = {
  key: string;
  label: string;
  value: string | number | boolean;
  unit?: string;
  group: string;
  source: "catalogue" | "verified_business_data";
  verified: boolean;
};
```

Example groups: - Optical - Field of View - Physical - Environmental -
Navigation - Battery - Imaging - Connectivity - Surveying

## Brand

``` ts
type Brand = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  status: "draft" | "published";
  commercialRelationship?: "own" | "catalogue" | "partner_verified";
};
```

Default third-party relationship should be `catalogue`, not
`partner_verified`.

## Category

``` ts
type Category = {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  description?: string;
};
```

## Application

``` ts
type Application = {
  id: string;
  name: string;
  slug: string;
};
```

Examples: - Wildlife Observation - Forestry - Forest Patrolling -
Birding - Surveillance - Survey & Mapping - Astronomy - Outdoor
Exploration

Only assign applications that are supported by catalogue language.

## Product image

``` ts
type ProductImage = {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
  type: "product" | "field" | "technical" | "diagram";
};
```

## Product document

``` ts
type ProductDocument = {
  id: string;
  name: string;
  url: string;
  type: "catalogue" | "datasheet" | "manual" | "guide" | "other";
};
```

## Pricing

``` ts
type ProductPricing = {
  currency: string;
  amount?: number;
  priceLabel?: string;
  enquiryOnly: boolean;
};
```

Never invent amount values.

## Inventory

``` ts
type ProductInventory = {
  tracked: boolean;
  quantity?: number;
  status?: "in_stock" | "low_stock" | "out_of_stock" | "on_request";
};
```

Never invent inventory values.

## Commerce

``` text
Customer
Organization
Address
Cart
Order
OrderItem
Payment
Shipment
Quote
QuoteItem
```

## Equipment management

``` text
Equipment
EquipmentAssignment
EquipmentEvent
Warranty
ServiceRequest
MaintenanceRecord
```

## Field platform

Proposed future entities:

``` text
FieldSession
Observation
Waypoint
Track
FieldReport
Project
ProjectMember
CameraTrap
```

These are product-platform proposals, not catalogue claims.

## Account roles

Suggested: - customer - organization_admin - field_user -
procurement_user - support_user - content_editor - product_manager -
admin

Use least privilege.

export type ProductSpecification = {
  key: string;
  label: string;
  value: string | number | boolean;
  unit?: string;
  group: string;
  source?: string;
  verified?: boolean;
};

export type ProductImage = {
  url: string;
  alt: string;
  sortOrder?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  series?: string;
  category: string;
  shortDescription?: string;
  applications: string[];
  features?: string[];
  specifications: ProductSpecification[];
  images: ProductImage[];
  dataQualityStatus?: "verified" | "needs_review";
};

// Seeded from DEMERZEL Codex Product Catalogue (Vanrakshak section)
export const products: Product[] = [
  {
    id: "vanraaj-10x42-ed",
    slug: "vanraaj-10x42-ed",
    name: "VANRAAJ 10X42 ED",
    brand: "Vanrakshak",
    series: "VANRAAJ",
    category: "Optics",
    shortDescription: "Premium ED binoculars for safaris and extended-range observation.",
    applications: ["Wildlife", "Outdoor", "Birding"],
    specifications: [
      { key: "magnification", label: "Magnification", value: "10", unit: "X", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "objective", label: "Objective diameter", value: "42", unit: "mm", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "weight", label: "Weight", value: "700", unit: "g", group: "Field", source: "Vanrakshak catalogue", verified: true },
      { key: "waterproof", label: "Waterproof", value: "Yes", group: "Field", source: "Vanrakshak catalogue", verified: true },
      { key: "nitrogen_filled", label: "Nitrogen filled", value: "Yes", group: "Field", source: "Vanrakshak catalogue", verified: true }
    ],
    images: [
      { url: "/assets/product-images/vanrakshak/vanrakshak-p05-img01.png", alt: "VANRAAJ 10X42 ED" }
    ],
    dataQualityStatus: "verified"
  },
  {
    id: "drishti-8x42",
    slug: "drishti-8x42",
    name: "DRISHTI 8X42",
    brand: "Vanrakshak",
    series: "DRISHTI",
    category: "Optics",
    shortDescription: "Field binocular for wildlife professionals and birders.",
    applications: ["Wildlife", "Forestry", "Birding"],
    specifications: [
      { key: "magnification", label: "Magnification", value: "8", unit: "X", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "objective", label: "Objective diameter", value: "42", unit: "mm", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "angular_fov", label: "Angular FOV", value: "5.5", unit: "°", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "weight", label: "Weight", value: "520", unit: "g", group: "Field", source: "Vanrakshak catalogue", verified: true }
    ],
    images: [
      { url: "/assets/product-images/vanrakshak/vanrakshak-p01-img01.png", alt: "DRISHTI 8X42" }
    ],
    dataQualityStatus: "verified"
  },
  {
    id: "tejas-10x42",
    slug: "tejas-10x42",
    name: "TEJAS 10X42",
    brand: "Vanrakshak",
    series: "TEJAS",
    category: "Optics",
    shortDescription: "Versatile binocular for long-distance viewing and outdoor use.",
    applications: ["Outdoor", "Wildlife"],
    specifications: [
      { key: "magnification", label: "Magnification", value: "10", unit: "X", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "objective", label: "Objective diameter", value: "42", unit: "mm", group: "Optical", source: "Vanrakshak catalogue", verified: true },
      { key: "weight", label: "Weight", value: "625", unit: "g", group: "Field", source: "Vanrakshak catalogue", verified: true }
    ],
    images: [
      { url: "/assets/product-images/vanrakshak/vanrakshak-p02-img01.png", alt: "TEJAS 10X42" }
    ],
    dataQualityStatus: "verified"
  }
];

export default products;

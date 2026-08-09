import products, { Product, ProductSpecification } from "../data/products";

export type ProductFilters = {
  brand?: string;
  category?: string;
  series?: string;
  application?: string;
};

export function getAllProducts(): Product[] {
  return products;
}

export function getBrands(): string[] {
  const set = new Set<string>();
  products.forEach(p => set.add(p.brand));
  return Array.from(set).sort();
}

export function getCategories(): string[] {
  const set = new Set<string>();
  products.forEach(p => set.add(p.category));
  return Array.from(set).sort();
}

export function getSeries(): string[] {
  const set = new Set<string>();
  products.forEach(p => {
    if (p.series) set.add(p.series);
  });
  return Array.from(set).sort();
}

export function getApplications(): string[] {
  const set = new Set<string>();
  products.forEach(p => (p.applications || []).forEach(a => set.add(a)));
  return Array.from(set).sort();
}

export function searchProducts(query: string, filters: ProductFilters = {}): Product[] {
  const q = query.trim().toLowerCase();
  return products.filter(p => {
    if (filters.brand && p.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
    if (filters.category && p.category.toLowerCase() !== filters.category.toLowerCase()) return false;
    if (filters.series && p.series && p.series.toLowerCase() !== filters.series.toLowerCase()) return false;
    if (filters.application && !p.applications.map(a => a.toLowerCase()).includes(filters.application.toLowerCase())) return false;

    if (!q) return true;

    const hay = [p.name, p.series || "", p.brand, p.shortDescription || "", p.category, ...(p.applications || [])].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductPath(product: Product): string {
  return `/products/${product.category.toLowerCase()}/${product.slug}`;
}

const preferredSpecKeys = [
  "magnification",
  "objective",
  "angular_fov",
  "linear_fov",
  "close_focus",
  "weight",
  "prism",
  "lens_coating",
  "waterproof",
  "nitrogen_filled"
];

export function formatSpecValue(specification: ProductSpecification): string {
  return `${specification.value}${specification.unit ? ` ${specification.unit}` : ""}`;
}

export function getPreferredSpecs(product: Product, limit = 4): ProductSpecification[] {
  return preferredSpecKeys
    .map((key) => product.specifications.find((specification) => specification.key === key))
    .filter(Boolean)
    .slice(0, limit) as ProductSpecification[];
}

export function getProductCopy(product: Product): string {
  if (product.shortDescription) return product.shortDescription;
  const specs = getPreferredSpecs(product, 2).map(formatSpecValue).join(", ");
  return specs ? `${product.name} with ${specs}.` : product.name;
}

export function getFeaturedProducts(limit = 6): Product[] {
  const ranked = [...products].sort((a, b) => {
    const score = (product: Product) => {
      const imageScore = product.images.length * 4;
      const specScore = product.specifications.length;
      const copyScore = product.shortDescription ? 4 : 0;
      const familyScore = product.series ? 2 : 0;
      return imageScore + specScore + copyScore + familyScore;
    };

    return score(b) - score(a);
  });

  const selected: Product[] = [];
  const usedSeries = new Set<string>();

  ranked.forEach((product) => {
    if (selected.length >= limit) return;
    if (product.series && usedSeries.has(product.series)) return;
    selected.push(product);
    if (product.series) usedSeries.add(product.series);
  });

  ranked.forEach((product) => {
    if (selected.length >= limit) return;
    if (!selected.some((item) => item.id === product.id)) selected.push(product);
  });

  return selected;
}

export default {
  getAllProducts,
  getBrands,
  getCategories,
  getSeries,
  getApplications,
  searchProducts,
  getProductBySlug,
  getProductPath,
  getPreferredSpecs,
  getProductCopy,
  getFeaturedProducts
};

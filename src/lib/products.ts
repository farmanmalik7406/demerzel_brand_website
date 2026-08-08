import products, { Product } from "../data/products";

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

export default {
  getAllProducts,
  getBrands,
  getCategories,
  searchProducts,
  getProductBySlug
};

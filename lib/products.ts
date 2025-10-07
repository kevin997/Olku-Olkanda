// Product type definition
export interface Product {
  id: string;
  name: string;
  category: 'beds' | 'sofas' | 'chairs' | 'tables' | 'storage' | 'decor';
  price: number;
  currency: string;
  image: string;
  description?: string;
  inStock: boolean;
}

// Sample products - Replace with your actual product data
export const products: Product[] = [
  // Beds
  {
    id: 'bed-001',
    name: 'Lit King Size Moderne',
    category: 'beds',
    price: 450000,
    currency: 'FCFA',
    image: '/products/bed-1.jpg',
    description: 'Lit king size avec tête de lit capitonnée',
    inStock: true,
  },
  {
    id: 'bed-002',
    name: 'Lit Queen Élégant',
    category: 'beds',
    price: 380000,
    currency: 'FCFA',
    image: '/products/bed-2.jpg',
    description: 'Lit queen avec rangement intégré',
    inStock: true,
  },
  {
    id: 'bed-003',
    name: 'Lit Simple Confort',
    category: 'beds',
    price: 180000,
    currency: 'FCFA',
    image: '/products/bed-3.jpg',
    description: 'Lit simple avec matelas orthopédique',
    inStock: true,
  },
  // Sofas
  {
    id: 'sofa-001',
    name: 'Canapé 3 Places Premium',
    category: 'sofas',
    price: 550000,
    currency: 'FCFA',
    image: '/products/sofa-1.jpg',
    description: 'Canapé en cuir véritable 3 places',
    inStock: true,
  },
  {
    id: 'sofa-002',
    name: 'Canapé d\'Angle Moderne',
    category: 'sofas',
    price: 780000,
    currency: 'FCFA',
    image: '/products/sofa-2.jpg',
    description: 'Canapé d\'angle convertible avec coffre',
    inStock: true,
  },
  {
    id: 'sofa-003',
    name: 'Canapé 2 Places Compact',
    category: 'sofas',
    price: 320000,
    currency: 'FCFA',
    image: '/products/sofa-3.jpg',
    description: 'Canapé 2 places en tissu doux',
    inStock: true,
  },
  // Chairs
  {
    id: 'chair-001',
    name: 'Chaise Salle à Manger',
    category: 'chairs',
    price: 45000,
    currency: 'FCFA',
    image: '/products/chair-1.jpg',
    description: 'Chaise en bois massif avec coussin',
    inStock: true,
  },
  {
    id: 'chair-002',
    name: 'Fauteuil Bureau Ergonomique',
    category: 'chairs',
    price: 125000,
    currency: 'FCFA',
    image: '/products/chair-2.jpg',
    description: 'Fauteuil de bureau avec support lombaire',
    inStock: true,
  },
  // Tables
  {
    id: 'table-001',
    name: 'Table à Manger 6 Places',
    category: 'tables',
    price: 280000,
    currency: 'FCFA',
    image: '/products/table-1.jpg',
    description: 'Table en bois massif pour 6 personnes',
    inStock: true,
  },
  {
    id: 'table-002',
    name: 'Table Basse Moderne',
    category: 'tables',
    price: 95000,
    currency: 'FCFA',
    image: '/products/table-2.jpg',
    description: 'Table basse avec plateau en verre',
    inStock: true,
  },
];

// Category labels
export const categoryLabels: Record<Product['category'], string> = {
  beds: 'Lits',
  sofas: 'Canapés',
  chairs: 'Chaises',
  tables: 'Tables',
  storage: 'Rangement',
  decor: 'Décoration',
};

// Get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category);
}

// Get all categories
export function getAllCategories(): Product['category'][] {
  return Array.from(new Set(products.map(p => p.category)));
}

// Format price
export function formatPrice(price: number, currency: string = 'FCFA'): string {
  return `${price.toLocaleString('fr-FR')} ${currency}`;
}

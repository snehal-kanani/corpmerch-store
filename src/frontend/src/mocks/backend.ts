import type { backendInterface, Product, ContactSubmission } from "../backend";
import { Category, SortOrder } from "../backend";

const now = BigInt(Date.now()) * BigInt(1_000_000);

const sampleProducts: Product[] = [
  {
    id: BigInt(1),
    featured: true,
    stockQty: BigInt(50),
    name: "Classic Corporate T-Shirt",
    createdAt: now,
    updatedAt: now,
    description: "High-quality cotton t-shirt perfect for corporate branding.",
    imageUrl: "",
    category: Category.tshirt,
    price: 499,
  },
  {
    id: BigInt(2),
    featured: false,
    stockQty: BigInt(30),
    name: "Premium Logo Cap",
    createdAt: now,
    updatedAt: now,
    description: "Structured cap with embroidered company logo.",
    imageUrl: "",
    category: Category.cap,
    price: 299,
  },
  {
    id: BigInt(3),
    featured: true,
    stockQty: BigInt(20),
    name: "Executive Tote Bag",
    createdAt: now,
    updatedAt: now,
    description: "Durable canvas tote bag ideal for trade shows and events.",
    imageUrl: "",
    category: Category.bag,
    price: 699,
  },
  {
    id: BigInt(4),
    featured: false,
    stockQty: BigInt(40),
    name: "Polo T-Shirt",
    createdAt: now,
    updatedAt: now,
    description: "Professional polo shirt with custom logo print.",
    imageUrl: "",
    category: Category.tshirt,
    price: 599,
  },
];

const sampleSubmissions: ContactSubmission[] = [
  {
    id: BigInt(1),
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    message: "Interested in bulk order of t-shirts for our company event.",
    createdAt: now,
  },
];

export const mockBackend: backendInterface = {
  addProduct: async (_token, input) => ({
    id: BigInt(99),
    createdAt: now,
    updatedAt: now,
    ...input,
  }),
  adminLogin: async (email, _password) => ({
    __kind__: "ok",
    ok: "mock-admin-token-123",
  }),
  deleteProduct: async (_token, _id) => true,
  getProduct: async (id) => sampleProducts.find((p) => p.id === id) ?? null,
  listContactSubmissions: async (_token) => sampleSubmissions,
  listProducts: async (filter) => {
    let results = [...sampleProducts];
    if (filter.category) {
      results = results.filter((p) => p.category === filter.category);
    }
    if (filter.searchQuery) {
      const q = filter.searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (filter.sortOrder === SortOrder.priceAsc) {
      results.sort((a, b) => a.price - b.price);
    } else if (filter.sortOrder === SortOrder.priceDesc) {
      results.sort((a, b) => b.price - a.price);
    } else if (filter.sortOrder === SortOrder.featured) {
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return results;
  },
  submitContactForm: async (input) => ({
    id: BigInt(99),
    createdAt: now,
    ...input,
  }),
  updateProduct: async (_token, _input) => true,
};

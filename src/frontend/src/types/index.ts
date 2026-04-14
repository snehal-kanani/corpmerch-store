import type { Category, SortOrder } from "../backend";

export type { Category, SortOrder };

export interface Product {
  id: bigint;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  stockQty: bigint;
  featured: boolean;
  createdAt: bigint;
  updatedAt: bigint;
}

export interface ContactSubmission {
  id: bigint;
  name: string;
  email: string;
  message: string;
  createdAt: bigint;
}

export interface ProductFilter {
  category?: Category;
  searchQuery?: string;
  sortOrder?: SortOrder;
}

export interface CreateProductInput {
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  stockQty: bigint;
  featured: boolean;
}

export interface UpdateProductInput {
  id: bigint;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  stockQty: bigint;
  featured: boolean;
}

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export type AdminLoginResult =
  | { __kind__: "ok"; ok: string }
  | { __kind__: "err"; err: string };

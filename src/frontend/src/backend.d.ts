import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ProductFilter {
    sortOrder?: SortOrder;
    category?: Category;
    searchQuery?: string;
}
export interface ContactInput {
    name: string;
    email: string;
    message: string;
}
export type Timestamp = bigint;
export interface ContactSubmission {
    id: ContactId;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export type AdminLoginResult = {
    __kind__: "ok";
    ok: string;
} | {
    __kind__: "err";
    err: string;
};
export type ProductId = bigint;
export type ContactId = bigint;
export interface CreateProductInput {
    featured: boolean;
    stockQty: bigint;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: number;
}
export interface Product {
    id: ProductId;
    featured: boolean;
    stockQty: bigint;
    name: string;
    createdAt: Timestamp;
    description: string;
    updatedAt: Timestamp;
    imageUrl: string;
    category: Category;
    price: number;
}
export interface UpdateProductInput {
    id: ProductId;
    featured: boolean;
    stockQty: bigint;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: number;
}
export enum Category {
    bag = "bag",
    cap = "cap",
    tshirt = "tshirt"
}
export enum SortOrder {
    featured = "featured",
    newest = "newest",
    priceDesc = "priceDesc",
    priceAsc = "priceAsc"
}
export interface backendInterface {
    addProduct(token: string, input: CreateProductInput): Promise<Product>;
    adminLogin(email: string, password: string): Promise<AdminLoginResult>;
    deleteProduct(token: string, id: ProductId): Promise<boolean>;
    getProduct(id: ProductId): Promise<Product | null>;
    listContactSubmissions(token: string): Promise<Array<ContactSubmission>>;
    listProducts(filter: ProductFilter): Promise<Array<Product>>;
    submitContactForm(input: ContactInput): Promise<ContactSubmission>;
    updateProduct(token: string, input: UpdateProductInput): Promise<boolean>;
}

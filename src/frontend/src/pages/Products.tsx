import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { PackageSearch, Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Category } from "../backend.d";
import type { SortOrder } from "../backend.d";
import { Layout } from "../components/Layout";
import { ProductCard, ProductCardSkeleton } from "../components/ProductCard";
import { ProductDetail } from "../components/ProductDetail";
import {
  type FiltersState,
  ProductFiltersMobile,
  ProductFiltersSidebar,
} from "../components/ProductFilters";
import { useProducts } from "../hooks/use-products";
import type { Product } from "../types";

const DEFAULT_FILTERS: FiltersState = {
  search: "",
  categories: [],
  minPrice: "",
  maxPrice: "",
  sort: "",
};

function parseSearchToFilters(params: Record<string, string>): FiltersState {
  const cats: Category[] = [];
  if (params.cat) {
    for (const c of params.cat.split(",")) {
      if (Object.values(Category).includes(c as Category))
        cats.push(c as Category);
    }
  }
  return {
    search: params.q ?? "",
    categories: cats,
    minPrice: params.minPrice ?? "",
    maxPrice: params.maxPrice ?? "",
    sort: (params.sort as SortOrder) || "",
  };
}

function filtersToSearchParams(f: FiltersState): Record<string, string> {
  const p: Record<string, string> = {};
  if (f.search) p.q = f.search;
  if (f.categories.length > 0) p.cat = f.categories.join(",");
  if (f.minPrice) p.minPrice = f.minPrice;
  if (f.maxPrice) p.maxPrice = f.maxPrice;
  if (f.sort) p.sort = f.sort;
  return p;
}

export default function Products() {
  const navigate = useNavigate();
  const rawSearch = useSearch({ strict: false }) as Record<string, string>;
  const [filters, setFilters] = useState<FiltersState>(() =>
    parseSearchToFilters(rawSearch),
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const searchDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  const backendFilter = useMemo(() => {
    const f: { category?: Category; sortOrder?: SortOrder } = {};
    if (filters.categories.length === 1) f.category = filters.categories[0];
    if (filters.sort) f.sortOrder = filters.sort as SortOrder;
    return f;
  }, [filters.categories, filters.sort]);

  const { data: rawProducts, isLoading } = useProducts(backendFilter);

  const products = useMemo(() => {
    if (!rawProducts) return [];
    return rawProducts.filter((p) => {
      if (
        filters.categories.length > 1 &&
        !filters.categories.includes(p.category)
      )
        return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        )
          return false;
      }
      if (filters.minPrice !== "" && p.price < Number(filters.minPrice))
        return false;
      if (filters.maxPrice !== "" && p.price > Number(filters.maxPrice))
        return false;
      return true;
    });
  }, [rawProducts, filters]);

  const pushFiltersToURL = useCallback(
    (f: FiltersState) => {
      const params = filtersToSearchParams(f);
      void navigate({ to: "/products", search: params, replace: true });
    },
    [navigate],
  );

  function handleFiltersChange(f: FiltersState) {
    setFilters(f);
    if (searchDebounce.current) clearTimeout(searchDebounce.current);
    searchDebounce.current = setTimeout(() => pushFiltersToURL(f), 400);
  }

  function handleClearFilters() {
    setFilters(DEFAULT_FILTERS);
    void navigate({ to: "/products", search: {}, replace: true });
  }

  function handleViewDetails(product: Product) {
    setSelectedProduct(product);
    setDetailOpen(true);
  }

  const hasActiveFilters =
    filters.search !== "" ||
    filters.categories.length > 0 ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "" ||
    filters.sort !== "";

  return (
    <Layout>
      {/* Page Hero */}
      <section
        className="bg-card border-b border-border py-10 px-4"
        data-ocid="products.hero_section"
      >
        <div className="container mx-auto">
          <h1 className="text-section-heading text-foreground mb-2">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl">
            Premium corporate merchandise — T-shirts, caps and bags,
            custom-branded for your business.
          </p>
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Search products by name or description…"
              value={filters.search}
              onChange={(e) =>
                handleFiltersChange({ ...filters, search: e.target.value })
              }
              className="h-14 text-lg pl-12 pr-4 border-input rounded-xl focus-visible:ring-primary"
              aria-label="Search products"
              data-ocid="products.search_input"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-10 px-4 bg-background"
        data-ocid="products.content_section"
      >
        <div className="container mx-auto flex gap-8 items-start">
          {/* Sidebar Filters (desktop) */}
          <ProductFiltersSidebar
            filters={filters}
            onChange={handleFiltersChange}
            onClear={handleClearFilters}
            productCount={products.length}
          />

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Mobile top bar */}
            <div className="flex items-center justify-between gap-3 mb-6 lg:hidden">
              <span className="text-base text-muted-foreground font-medium">
                {isLoading ? "Loading…" : `${products.length} products`}
              </span>
              <ProductFiltersMobile
                filters={filters}
                onChange={handleFiltersChange}
                onClear={handleClearFilters}
                productCount={products.length}
              />
            </div>

            {/* Loading skeletons */}
            {isLoading && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                data-ocid="products.loading_state"
              >
                {Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((key) => (
                  <ProductCardSkeleton key={key} />
                ))}
              </div>
            )}

            {/* Empty state */}
            {!isLoading && products.length === 0 && (
              <div
                className="flex flex-col items-center justify-center py-20 text-center gap-4"
                data-ocid="products.empty_state"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-2">
                  <PackageSearch className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold font-display text-foreground">
                  No products found
                </h2>
                <p className="text-lg text-muted-foreground max-w-sm">
                  {hasActiveFilters
                    ? "No products match your current filters. Try adjusting your search or filters."
                    : "No products are available yet. Check back soon!"}
                </p>
                {hasActiveFilters && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 text-base mt-2 font-semibold border-primary text-primary hover:bg-primary/5"
                    onClick={handleClearFilters}
                    data-ocid="products.empty_state.clear_button"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            )}

            {/* Product Grid */}
            {!isLoading && products.length > 0 && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                data-ocid="products.grid"
              >
                {products.map((product, index) => (
                  <ProductCard
                    key={product.id.toString()}
                    product={product}
                    index={index + 1}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <ProductDetail
        product={selectedProduct}
        open={detailOpen}
        onClose={() => {
          setDetailOpen(false);
          setSelectedProduct(null);
        }}
      />
    </Layout>
  );
}

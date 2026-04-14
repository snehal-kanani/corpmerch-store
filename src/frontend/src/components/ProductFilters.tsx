import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import { Category, SortOrder } from "../backend.d";

export interface FiltersState {
  search: string;
  categories: Category[];
  minPrice: string;
  maxPrice: string;
  sort: SortOrder | "";
}

interface FilterPanelContentProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  onClear: () => void;
  productCount: number;
}

const CATEGORY_OPTIONS: { value: Category; label: string }[] = [
  { value: Category.tshirt, label: "T-Shirts" },
  { value: Category.cap, label: "Caps" },
  { value: Category.bag, label: "Bags" },
];

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: SortOrder.newest, label: "Newest First" },
  { value: SortOrder.featured, label: "Featured First" },
  { value: SortOrder.priceAsc, label: "Price: Low to High" },
  { value: SortOrder.priceDesc, label: "Price: High to Low" },
];

function FilterContent({
  filters,
  onChange,
  onClear,
  productCount,
}: FilterPanelContentProps) {
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "" ||
    filters.sort !== "";

  function toggleCategory(cat: Category) {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: updated });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Results count + clear */}
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-foreground">
          {productCount} {productCount === 1 ? "product" : "products"} found
        </span>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="h-9 text-sm text-primary hover:text-primary/80 font-semibold"
            onClick={onClear}
            data-ocid="products.filters.clear_button"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <Separator />

      {/* Category Filter */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-foreground">Category</h3>
        <div className="flex flex-col gap-3">
          {/* All option */}
          <div className="flex items-center gap-3 min-h-[44px]">
            <Checkbox
              id="cat-all"
              checked={filters.categories.length === 0}
              onCheckedChange={() => onChange({ ...filters, categories: [] })}
              className="w-5 h-5"
              data-ocid="products.filters.category_all"
            />
            <Label
              htmlFor="cat-all"
              className="text-base font-medium text-foreground cursor-pointer"
            >
              All Products
            </Label>
          </div>
          {CATEGORY_OPTIONS.map((opt) => (
            <div
              key={opt.value}
              className="flex items-center gap-3 min-h-[44px]"
            >
              <Checkbox
                id={`cat-${opt.value}`}
                checked={filters.categories.includes(opt.value)}
                onCheckedChange={() => toggleCategory(opt.value)}
                className="w-5 h-5"
                data-ocid={`products.filters.category_${opt.value}`}
              />
              <Label
                htmlFor={`cat-${opt.value}`}
                className="text-base font-medium text-foreground cursor-pointer"
              >
                {opt.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-foreground">Price Range (₹)</h3>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            min={0}
            className="h-12 text-base"
            onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
            data-ocid="products.filters.min_price_input"
          />
          <span className="text-muted-foreground font-semibold shrink-0">
            –
          </span>
          <Input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            min={0}
            className="h-12 text-base"
            onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
            data-ocid="products.filters.max_price_input"
          />
        </div>
      </div>

      <Separator />

      {/* Sort */}
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-foreground">Sort By</h3>
        <Select
          value={filters.sort || ""}
          onValueChange={(val) =>
            onChange({ ...filters, sort: (val as SortOrder) || "" })
          }
        >
          <SelectTrigger
            className="h-12 text-base"
            data-ocid="products.filters.sort_select"
          >
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                className="text-base py-2.5"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

interface ProductFiltersProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  onClear: () => void;
  productCount: number;
}

// Desktop sidebar version
export function ProductFiltersSidebar({
  filters,
  onChange,
  onClear,
  productCount,
}: ProductFiltersProps) {
  return (
    <aside
      className="hidden lg:block w-64 shrink-0 sticky top-24 self-start"
      data-ocid="products.filters.panel"
    >
      <div className="bg-card rounded-xl border border-border p-5">
        <h2 className="text-lg font-bold font-display text-foreground mb-4">
          Filters
        </h2>
        <FilterContent
          filters={filters}
          onChange={onChange}
          onClear={onClear}
          productCount={productCount}
        />
      </div>
    </aside>
  );
}

// Mobile sheet version
export function ProductFiltersMobile({
  filters,
  onChange,
  onClear,
  productCount,
}: ProductFiltersProps) {
  const [open, setOpen] = useState(false);
  const activeCount =
    filters.categories.length +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.sort ? 1 : 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="lg:hidden h-12 text-base gap-2 border-border"
          data-ocid="products.filters.mobile_open_button"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filters
          {activeCount > 0 && (
            <span className="ml-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-80 overflow-y-auto"
        data-ocid="products.filters.mobile_sheet"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-display">Filters</SheetTitle>
        </SheetHeader>
        <FilterContent
          filters={filters}
          onChange={onChange}
          onClear={() => {
            onClear();
            setOpen(false);
          }}
          productCount={productCount}
        />
        <div className="mt-8">
          <Button
            className="w-full h-12 text-base font-semibold"
            onClick={() => setOpen(false)}
            data-ocid="products.filters.mobile_apply_button"
          >
            Show {productCount} Products
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

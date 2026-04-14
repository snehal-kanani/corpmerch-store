import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Category } from "../backend.d";
import type { Product } from "../types";

const CATEGORY_LABELS: Record<Category, string> = {
  [Category.tshirt]: "T-Shirt",
  [Category.cap]: "Cap",
  [Category.bag]: "Bag",
};

const CATEGORY_BADGE_CLASS: Record<Category, string> = {
  [Category.tshirt]:
    "bg-primary/15 text-primary border-primary/30 hover:bg-primary/20",
  [Category.cap]:
    "bg-secondary/80 text-secondary-foreground border-secondary/60 hover:bg-secondary",
  [Category.bag]:
    "bg-secondary/30 text-secondary-foreground border-secondary/40 hover:bg-secondary/40",
};

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({
  product,
  index,
  onViewDetails,
}: ProductCardProps) {
  const isInStock = product.stockQty > 0n;

  return (
    <Card
      className="group flex flex-col overflow-hidden border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer bg-card"
      data-ocid={`products.item.${index}`}
      onClick={() => onViewDetails(product)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted aspect-[4/3]">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/assets/images/placeholder.svg";
            }}
          />
        ) : (
          <img
            src="/assets/images/placeholder.svg"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        )}
        {!isInStock && (
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <span className="bg-card text-foreground text-sm font-bold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        {product.featured && isInStock && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      <CardContent className="flex-1 p-4 flex flex-col gap-2">
        {/* Category + Name */}
        <div className="flex items-start justify-between gap-2">
          <Badge
            variant="outline"
            className={`text-xs font-semibold shrink-0 ${CATEGORY_BADGE_CLASS[product.category]}`}
          >
            {CATEGORY_LABELS[product.category]}
          </Badge>
        </div>

        <h3 className="text-xl font-bold font-display text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>

        <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-3">
        <span className="text-2xl font-bold text-foreground font-display">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        <Button
          size="default"
          className="h-12 px-5 text-base font-semibold shrink-0"
          data-ocid={`products.view_button.${index}`}
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="flex flex-col overflow-hidden border border-border bg-card">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <CardContent className="p-4 flex flex-col gap-3">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-12 w-32" />
      </CardFooter>
    </Card>
  );
}

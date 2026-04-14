import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Ruler, X } from "lucide-react";
import { Category } from "../backend.d";
import type { Product } from "../types";
// Category is used as value (object keys) so cannot be type-only import

const CATEGORY_LABELS: Record<Category, string> = {
  [Category.tshirt]: "T-Shirt",
  [Category.cap]: "Cap",
  [Category.bag]: "Bag",
};

const CATEGORY_BADGE_CLASS: Record<Category, string> = {
  [Category.tshirt]: "bg-primary/15 text-primary border-primary/30",
  [Category.cap]:
    "bg-secondary/80 text-secondary-foreground border-secondary/60",
  [Category.bag]:
    "bg-secondary/30 text-secondary-foreground border-secondary/40",
};

const SIZE_GUIDES: Record<Category, { headers: string[]; rows: string[][] }> = {
  [Category.tshirt]: {
    headers: ["Size", "Chest (in)", "Length (in)", "Sleeve (in)"],
    rows: [
      ["S", "36", "27", "8"],
      ["M", "38", "28", "8.5"],
      ["L", "40", "29", "9"],
      ["XL", "42", "30", "9.5"],
      ["XXL", "44", "31", "10"],
    ],
  },
  [Category.cap]: {
    headers: ["Size", "Head Circumference"],
    rows: [["One Size", "54–60 cm (adjustable)"]],
  },
  [Category.bag]: {
    headers: ["Type", "Dimensions (cm)", "Capacity"],
    rows: [
      ["Tote", "38 × 42 × 10", "~15 L"],
      ["Backpack", "30 × 45 × 15", "~25 L"],
      ["Duffel", "50 × 28 × 28", "~40 L"],
    ],
  },
};

interface ProductDetailProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, open, onClose }: ProductDetailProps) {
  if (!product) return null;

  const isInStock = product.stockQty > 0n;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ordering *${product.name}* (₹${product.price.toLocaleString("en-IN")}). Please share more details.`,
  );
  const whatsappUrl = `https://wa.me/911234567890?text=${whatsappMessage}`;
  const sizeGuide = SIZE_GUIDES[product.category];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto p-0"
        data-ocid="products.detail.dialog"
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-smooth"
          onClick={onClose}
          aria-label="Close"
          data-ocid="products.detail.close_button"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
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
          {product.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col gap-5">
          <DialogHeader>
            <div className="flex flex-wrap items-start gap-3">
              <Badge
                variant="outline"
                className={`text-sm font-semibold ${CATEGORY_BADGE_CLASS[product.category]}`}
              >
                {CATEGORY_LABELS[product.category]}
              </Badge>
              <Badge
                variant="outline"
                className={
                  isInStock
                    ? "bg-secondary/20 text-secondary-foreground border-secondary/40 text-sm"
                    : "bg-destructive/10 text-destructive border-destructive/30 text-sm"
                }
              >
                {isInStock
                  ? `✓ In Stock (${product.stockQty.toString()} units)`
                  : "✗ Out of Stock"}
              </Badge>
            </div>
            <DialogTitle className="text-2xl font-display font-bold text-foreground leading-snug mt-1">
              {product.name}
            </DialogTitle>
          </DialogHeader>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold font-display text-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-muted-foreground text-base">per unit</span>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-2">
              Description
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          {/* Size Guide */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Ruler className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-foreground">
                Size Guide
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    {sizeGuide.headers.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left font-semibold text-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.rows.map((row) => (
                    <tr
                      key={row[0]}
                      className={
                        sizeGuide.rows.indexOf(row) % 2 === 0
                          ? "bg-card"
                          : "bg-muted/40"
                      }
                    >
                      {row.map((cell) => (
                        <td
                          key={cell}
                          className="px-4 py-2.5 text-muted-foreground"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* Inquiry CTA */}
          <div className="bg-muted/40 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-base font-semibold text-foreground">
              Interested in bulk order? Get a custom quote!
            </p>
            <p className="text-sm text-muted-foreground">
              Minimum order quantity: 20 units. Custom branding available.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              data-ocid="products.detail.whatsapp_button"
            >
              <Button className="h-12 text-base font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Enquire on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { j as jsxRuntimeExports, S as Skeleton, c as cn, r as reactExports, u as useNavigate, a as useSearch } from "./index-BoS_c9l9.js";
import { c as createLucideIcon, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { I as Input } from "./input-Bzq8Oyhq.js";
import { C as Card, a as CardContent, b as CardFooter, X, M as MessageCircle, L as Layout } from "./card-WJECMchA.js";
import { B as Badge } from "./badge-DP2PmGMe.js";
import { R as Root$1, C as Content, a as Close, T as Title, P as Portal, O as Overlay, b as Trigger, S as Search } from "./index-DEofpqM8.js";
import { P as Primitive, L as Label } from "./label-BmS7YbRW.js";
import { C as Checkbox, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CN3I2qcM.js";
import { u as useProducts } from "./use-products-CRlBsW0k.js";
import "./menu-DTtBBOqd.js";
import "./index-8assIisn.js";
import "./use-admin-BkUQat1e.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
];
const PackageSearch = createLucideIcon("package-search", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
];
const Ruler = createLucideIcon("ruler", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
var Category = /* @__PURE__ */ ((Category2) => {
  Category2["bag"] = "bag";
  Category2["cap"] = "cap";
  Category2["tshirt"] = "tshirt";
  return Category2;
})(Category || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2) => {
  SortOrder2["featured"] = "featured";
  SortOrder2["newest"] = "newest";
  SortOrder2["priceDesc"] = "priceDesc";
  SortOrder2["priceAsc"] = "priceAsc";
  return SortOrder2;
})(SortOrder || {});
const CATEGORY_LABELS$1 = {
  [Category.tshirt]: "T-Shirt",
  [Category.cap]: "Cap",
  [Category.bag]: "Bag"
};
const CATEGORY_BADGE_CLASS$1 = {
  [Category.tshirt]: "bg-primary/15 text-primary border-primary/30 hover:bg-primary/20",
  [Category.cap]: "bg-secondary/80 text-secondary-foreground border-secondary/60 hover:bg-secondary",
  [Category.bag]: "bg-secondary/30 text-secondary-foreground border-secondary/40 hover:bg-secondary/40"
};
function ProductCard({
  product,
  index,
  onViewDetails
}) {
  const isInStock = product.stockQty > 0n;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "group flex flex-col overflow-hidden border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer bg-card",
      "data-ocid": `products.item.${index}`,
      onClick: () => onViewDetails(product),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-muted aspect-[4/3]", children: [
          product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              onError: (e) => {
                e.currentTarget.src = "/assets/images/placeholder.svg";
              }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/images/placeholder.svg",
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          ),
          !isInStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card text-foreground text-sm font-bold px-3 py-1 rounded-full", children: "Out of Stock" }) }),
          product.featured && isInStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full", children: "⭐ Featured" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex-1 p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `text-xs font-semibold shrink-0 ${CATEGORY_BADGE_CLASS$1[product.category]}`,
              children: CATEGORY_LABELS$1[product.category]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground line-clamp-2 leading-relaxed flex-1", children: product.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "p-4 pt-0 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-foreground font-display", children: [
            "₹",
            product.price.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "default",
              className: "h-12 px-5 text-base font-semibold shrink-0",
              "data-ocid": `products.view_button.${index}`,
              onClick: (e) => {
                e.stopPropagation();
                onViewDetails(product);
              },
              children: "View Details"
            }
          )
        ] })
      ]
    }
  );
}
function ProductCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col overflow-hidden border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full rounded-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "p-4 pt-0 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-32" })
    ] })
  ] });
}
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const CATEGORY_LABELS = {
  [Category.tshirt]: "T-Shirt",
  [Category.cap]: "Cap",
  [Category.bag]: "Bag"
};
const CATEGORY_BADGE_CLASS = {
  [Category.tshirt]: "bg-primary/15 text-primary border-primary/30",
  [Category.cap]: "bg-secondary/80 text-secondary-foreground border-secondary/60",
  [Category.bag]: "bg-secondary/30 text-secondary-foreground border-secondary/40"
};
const SIZE_GUIDES = {
  [Category.tshirt]: {
    headers: ["Size", "Chest (in)", "Length (in)", "Sleeve (in)"],
    rows: [
      ["S", "36", "27", "8"],
      ["M", "38", "28", "8.5"],
      ["L", "40", "29", "9"],
      ["XL", "42", "30", "9.5"],
      ["XXL", "44", "31", "10"]
    ]
  },
  [Category.cap]: {
    headers: ["Size", "Head Circumference"],
    rows: [["One Size", "54–60 cm (adjustable)"]]
  },
  [Category.bag]: {
    headers: ["Type", "Dimensions (cm)", "Capacity"],
    rows: [
      ["Tote", "38 × 42 × 10", "~15 L"],
      ["Backpack", "30 × 45 × 15", "~25 L"],
      ["Duffel", "50 × 28 × 28", "~40 L"]
    ]
  }
};
function ProductDetail({ product, open, onClose }) {
  if (!product) return null;
  const isInStock = product.stockQty > 0n;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ordering *${product.name}* (₹${product.price.toLocaleString("en-IN")}). Please share more details.`
  );
  const whatsappUrl = `https://wa.me/911234567890?text=${whatsappMessage}`;
  const sizeGuide = SIZE_GUIDES[product.category];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto p-0",
      "data-ocid": "products.detail.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
            onClick: onClose,
            "aria-label": "Close",
            "data-ocid": "products.detail.close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[16/9] bg-muted overflow-hidden", children: [
          product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover",
              onError: (e) => {
                e.currentTarget.src = "/assets/images/placeholder.svg";
              }
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/images/placeholder.svg",
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          ),
          product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full", children: "⭐ Featured" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-sm font-semibold ${CATEGORY_BADGE_CLASS[product.category]}`,
                  children: CATEGORY_LABELS[product.category]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: isInStock ? "bg-secondary/20 text-secondary-foreground border-secondary/40 text-sm" : "bg-destructive/10 text-destructive border-destructive/30 text-sm",
                  children: isInStock ? `✓ In Stock (${product.stockQty.toString()} units)` : "✗ Out of Stock"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-display font-bold text-foreground leading-snug mt-1", children: product.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-bold font-display text-foreground", children: [
              "₹",
              product.price.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-base", children: "per unit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground mb-2", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Size Guide" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: sizeGuide.headers.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-4 py-2.5 text-left font-semibold text-foreground",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sizeGuide.rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "tr",
                {
                  className: sizeGuide.rows.indexOf(row) % 2 === 0 ? "bg-card" : "bg-muted/40",
                  children: row.map((cell) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-2.5 text-muted-foreground",
                      children: cell
                    },
                    cell
                  ))
                },
                row[0]
              )) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-4 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground", children: "Interested in bulk order? Get a custom quote!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Minimum order quantity: 20 units. Custom branding available." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex",
                "data-ocid": "products.detail.whatsapp_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "h-12 text-base font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                  "Enquire on WhatsApp"
                ] })
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
const CATEGORY_OPTIONS = [
  { value: Category.tshirt, label: "T-Shirts" },
  { value: Category.cap, label: "Caps" },
  { value: Category.bag, label: "Bags" }
];
const SORT_OPTIONS = [
  { value: SortOrder.newest, label: "Newest First" },
  { value: SortOrder.featured, label: "Featured First" },
  { value: SortOrder.priceAsc, label: "Price: Low to High" },
  { value: SortOrder.priceDesc, label: "Price: High to Low" }
];
function FilterContent({
  filters,
  onChange,
  onClear,
  productCount
}) {
  const hasActiveFilters = filters.categories.length > 0 || filters.minPrice !== "" || filters.maxPrice !== "" || filters.sort !== "";
  function toggleCategory(cat) {
    const updated = filters.categories.includes(cat) ? filters.categories.filter((c) => c !== cat) : [...filters.categories, cat];
    onChange({ ...filters, categories: updated });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-semibold text-foreground", children: [
        productCount,
        " ",
        productCount === 1 ? "product" : "products",
        " found"
      ] }),
      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-9 text-sm text-primary hover:text-primary/80 font-semibold",
          onClick: onClear,
          "data-ocid": "products.filters.clear_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
            "Clear all"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-h-[44px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              id: "cat-all",
              checked: filters.categories.length === 0,
              onCheckedChange: () => onChange({ ...filters, categories: [] }),
              className: "w-5 h-5",
              "data-ocid": "products.filters.category_all"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "cat-all",
              className: "text-base font-medium text-foreground cursor-pointer",
              children: "All Products"
            }
          )
        ] }),
        CATEGORY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 min-h-[44px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: `cat-${opt.value}`,
                  checked: filters.categories.includes(opt.value),
                  onCheckedChange: () => toggleCategory(opt.value),
                  className: "w-5 h-5",
                  "data-ocid": `products.filters.category_${opt.value}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: `cat-${opt.value}`,
                  className: "text-base font-medium text-foreground cursor-pointer",
                  children: opt.label
                }
              )
            ]
          },
          opt.value
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Price Range (₹)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            placeholder: "Min",
            value: filters.minPrice,
            min: 0,
            className: "h-12 text-base",
            onChange: (e) => onChange({ ...filters, minPrice: e.target.value }),
            "data-ocid": "products.filters.min_price_input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold shrink-0", children: "–" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            placeholder: "Max",
            value: filters.maxPrice,
            min: 0,
            className: "h-12 text-base",
            onChange: (e) => onChange({ ...filters, maxPrice: e.target.value }),
            "data-ocid": "products.filters.max_price_input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Sort By" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: filters.sort || "",
          onValueChange: (val) => onChange({ ...filters, sort: val || "" }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-12 text-base",
                "data-ocid": "products.filters.sort_select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select sort order" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectItem,
              {
                value: opt.value,
                className: "text-base py-2.5",
                children: opt.label
              },
              opt.value
            )) })
          ]
        }
      )
    ] })
  ] });
}
function ProductFiltersSidebar({
  filters,
  onChange,
  onClear,
  productCount
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "aside",
    {
      className: "hidden lg:block w-64 shrink-0 sticky top-24 self-start",
      "data-ocid": "products.filters.panel",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold font-display text-foreground mb-4", children: "Filters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterContent,
          {
            filters,
            onChange,
            onClear,
            productCount
          }
        )
      ] })
    }
  );
}
function ProductFiltersMobile({
  filters,
  onChange,
  onClear,
  productCount
}) {
  const [open, setOpen] = reactExports.useState(false);
  const activeCount = filters.categories.length + (filters.minPrice ? 1 : 0) + (filters.maxPrice ? 1 : 0) + (filters.sort ? 1 : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        className: "lg:hidden h-12 text-base gap-2 border-border",
        "data-ocid": "products.filters.mobile_open_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-5 h-5" }),
          "Filters",
          activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center", children: activeCount })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SheetContent,
      {
        side: "left",
        className: "w-80 overflow-y-auto",
        "data-ocid": "products.filters.mobile_sheet",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-xl font-display", children: "Filters" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterContent,
            {
              filters,
              onChange,
              onClear: () => {
                onClear();
                setOpen(false);
              },
              productCount
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full h-12 text-base font-semibold",
              onClick: () => setOpen(false),
              "data-ocid": "products.filters.mobile_apply_button",
              children: [
                "Show ",
                productCount,
                " Products"
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const DEFAULT_FILTERS = {
  search: "",
  categories: [],
  minPrice: "",
  maxPrice: "",
  sort: ""
};
function parseSearchToFilters(params) {
  const cats = [];
  if (params.cat) {
    for (const c of params.cat.split(",")) {
      if (Object.values(Category).includes(c))
        cats.push(c);
    }
  }
  return {
    search: params.q ?? "",
    categories: cats,
    minPrice: params.minPrice ?? "",
    maxPrice: params.maxPrice ?? "",
    sort: params.sort || ""
  };
}
function filtersToSearchParams(f) {
  const p = {};
  if (f.search) p.q = f.search;
  if (f.categories.length > 0) p.cat = f.categories.join(",");
  if (f.minPrice) p.minPrice = f.minPrice;
  if (f.maxPrice) p.maxPrice = f.maxPrice;
  if (f.sort) p.sort = f.sort;
  return p;
}
function Products() {
  const navigate = useNavigate();
  const rawSearch = useSearch({ strict: false });
  const [filters, setFilters] = reactExports.useState(
    () => parseSearchToFilters(rawSearch)
  );
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const [detailOpen, setDetailOpen] = reactExports.useState(false);
  const searchDebounce = reactExports.useRef(null);
  const backendFilter = reactExports.useMemo(() => {
    const f = {};
    if (filters.categories.length === 1) f.category = filters.categories[0];
    if (filters.sort) f.sortOrder = filters.sort;
    return f;
  }, [filters.categories, filters.sort]);
  const { data: rawProducts, isLoading } = useProducts(backendFilter);
  const products = reactExports.useMemo(() => {
    if (!rawProducts) return [];
    return rawProducts.filter((p) => {
      if (filters.categories.length > 1 && !filters.categories.includes(p.category))
        return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q))
          return false;
      }
      if (filters.minPrice !== "" && p.price < Number(filters.minPrice))
        return false;
      if (filters.maxPrice !== "" && p.price > Number(filters.maxPrice))
        return false;
      return true;
    });
  }, [rawProducts, filters]);
  const pushFiltersToURL = reactExports.useCallback(
    (f) => {
      const params = filtersToSearchParams(f);
      void navigate({ to: "/products", search: params, replace: true });
    },
    [navigate]
  );
  function handleFiltersChange(f) {
    setFilters(f);
    if (searchDebounce.current) clearTimeout(searchDebounce.current);
    searchDebounce.current = setTimeout(() => pushFiltersToURL(f), 400);
  }
  function handleClearFilters() {
    setFilters(DEFAULT_FILTERS);
    void navigate({ to: "/products", search: {}, replace: true });
  }
  function handleViewDetails(product) {
    setSelectedProduct(product);
    setDetailOpen(true);
  }
  const hasActiveFilters = filters.search !== "" || filters.categories.length > 0 || filters.minPrice !== "" || filters.maxPrice !== "" || filters.sort !== "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-10 px-4",
        "data-ocid": "products.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-section-heading text-foreground mb-2", children: "Our Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-6 max-w-xl", children: "Premium corporate merchandise — T-shirts, caps and bags, custom-branded for your business." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "search",
                placeholder: "Search products by name or description…",
                value: filters.search,
                onChange: (e) => handleFiltersChange({ ...filters, search: e.target.value }),
                className: "h-14 text-lg pl-12 pr-4 border-input rounded-xl focus-visible:ring-primary",
                "aria-label": "Search products",
                "data-ocid": "products.search_input"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 px-4 bg-background",
        "data-ocid": "products.content_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductFiltersSidebar,
            {
              filters,
              onChange: handleFiltersChange,
              onClear: handleClearFilters,
              productCount: products.length
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-6 lg:hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground font-medium", children: isLoading ? "Loading…" : `${products.length} products` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductFiltersMobile,
                {
                  filters,
                  onChange: handleFiltersChange,
                  onClear: handleClearFilters,
                  productCount: products.length
                }
              )
            ] }),
            isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
                "data-ocid": "products.loading_state",
                children: Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {}, key))
              }
            ),
            !isLoading && products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center py-20 text-center gap-4",
                "data-ocid": "products.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageSearch, { className: "w-10 h-10 text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground", children: "No products found" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-sm", children: hasActiveFilters ? "No products match your current filters. Try adjusting your search or filters." : "No products are available yet. Check back soon!" }),
                  hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "h-12 text-base mt-2 font-semibold border-primary text-primary hover:bg-primary/5",
                      onClick: handleClearFilters,
                      "data-ocid": "products.empty_state.clear_button",
                      children: "Clear All Filters"
                    }
                  )
                ]
              }
            ),
            !isLoading && products.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
                "data-ocid": "products.grid",
                children: products.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProductCard,
                  {
                    product,
                    index: index + 1,
                    onViewDetails: handleViewDetails
                  },
                  product.id.toString()
                ))
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDetail,
      {
        product: selectedProduct,
        open: detailOpen,
        onClose: () => {
          setDetailOpen(false);
          setSelectedProduct(null);
        }
      }
    )
  ] });
}
export {
  Products as default
};

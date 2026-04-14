import { j as jsxRuntimeExports, r as reactExports, c as cn, u as useNavigate, S as Skeleton, b as ue } from "./index-BoS_c9l9.js";
import { c as composeEventHandlers, a as createSlottable, b as createContextScope } from "./index-8assIisn.js";
import { c as createLucideIcon, u as useComposedRefs, b as buttonVariants, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { R as Root, b as Trigger, W as WarningProvider, C as Content, T as Title, D as Description, a as Close, c as createDialogScope, P as Portal, O as Overlay, S as Search } from "./index-DEofpqM8.js";
import { B as Badge } from "./badge-DP2PmGMe.js";
import { I as Input } from "./input-Bzq8Oyhq.js";
import { A as AdminLayout } from "./AdminLayout-Dt0EH1yO.js";
import { a as useAdminStore } from "./use-admin-BkUQat1e.js";
import { u as useProducts, c as useDeleteProduct } from "./use-products-CRlBsW0k.js";
import "./package-BvE6Q_mh.js";
import "./menu-DTtBBOqd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 22v-9", key: "x3hkom" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      key: "2ntwy6"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      key: "1pmm1c"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
      key: "12ttoo"
    }
  ]
];
const PackageOpen = createLucideIcon("package-open", __iconNode$3);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const CATEGORY_LABELS = {
  tshirt: "T-Shirt",
  cap: "Cap",
  bag: "Bag"
};
const CATEGORY_BADGE = {
  tshirt: "bg-primary/15 text-primary border-primary/25",
  cap: "bg-secondary/25 text-secondary-foreground border-secondary/30",
  bag: "bg-accent/15 text-primary border-accent/25"
};
function AdminProducts() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);
  const { data: products, isLoading } = useProducts();
  const deleteProduct = useDeleteProduct();
  const filtered = reactExports.useMemo(() => {
    if (!products) return [];
    const q = search.toLowerCase().trim();
    if (!q) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || (CATEGORY_LABELS[p.category] ?? "").toLowerCase().includes(q)
    );
  }, [products, search]);
  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteProduct.mutateAsync(deleteTarget.id);
      ue.success(`"${deleteTarget.name}" deleted successfully.`);
    } catch {
      ue.error("Could not delete product. Please try again.");
    } finally {
      setDeleteTarget(null);
    }
  };
  if (!token) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto space-y-6",
      "data-ocid": "admin_products.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 w-full sm:max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search products…",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "h-11 pl-10 text-base",
                "data-ocid": "admin_products.search_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => navigate({ to: "/admin/products/new" }),
              className: "h-11 text-base font-semibold shrink-0 flex items-center gap-2",
              "data-ocid": "admin_products.add_product_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
                "Add New Product"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border shadow-sm overflow-hidden", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "p-6 space-y-3",
            "data-ocid": "admin_products.loading_state",
            children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full rounded-xl" }, i))
          }
        ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-20 px-4 text-center",
            "data-ocid": "admin_products.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PackageOpen, { className: "w-16 h-16 text-muted-foreground/40 mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-foreground", children: "No products found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 mb-5", children: search ? "Try a different search term." : "Add your first product to get started." }),
              !search && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => navigate({ to: "/admin/products/new" }),
                  "data-ocid": "admin_products.empty_add_button",
                  children: "Add Product"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "table",
          {
            className: "w-full text-left",
            "data-ocid": "admin_products.table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide", children: "Image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-right", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-right", children: "Stock" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center", children: "Featured" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filtered.map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "hover:bg-muted/20 transition-colors",
                  "data-ocid": `admin_products.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg overflow-hidden bg-muted border border-border shrink-0", children: product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: product.imageUrl,
                        alt: product.name,
                        className: "w-full h-full object-cover"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageOpen, { className: "w-5 h-5 text-muted-foreground/40" }) }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-base text-foreground truncate max-w-[200px]", children: product.name }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold border ${CATEGORY_BADGE[product.category] ?? "bg-muted text-muted-foreground border-border"}`,
                        children: CATEGORY_LABELS[product.category] ?? product.category
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right font-mono font-semibold text-foreground", children: [
                      "₹",
                      product.price.toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: Number(product.stockQty) > 0 ? "secondary" : "destructive",
                        className: "font-mono text-sm",
                        children: product.stockQty.toString()
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: product.featured ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/15 text-primary border-primary/25 text-sm", children: "Yes" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm font-medium", children: "No" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => navigate({
                            to: `/admin/products/${product.id.toString()}/edit`
                          }),
                          className: "h-9 px-3 text-sm font-medium hover:bg-primary/10 hover:text-primary",
                          "data-ocid": `admin_products.edit_button.${idx + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4 mr-1" }),
                            "Edit"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => setDeleteTarget(product),
                            className: "h-9 px-3 text-sm font-medium hover:bg-destructive/10 hover:text-destructive",
                            "data-ocid": `admin_products.delete_button.${idx + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 mr-1" }),
                              "Delete"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "admin_products.dialog", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-xl font-display", children: "Delete Product?" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-base", children: [
                              "Are you sure you want to delete",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                                '"',
                                deleteTarget == null ? void 0 : deleteTarget.name,
                                '"'
                              ] }),
                              "? This action cannot be undone."
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              AlertDialogCancel,
                              {
                                onClick: () => setDeleteTarget(null),
                                className: "h-11 text-base",
                                "data-ocid": "admin_products.cancel_button",
                                children: "Cancel"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              AlertDialogAction,
                              {
                                onClick: handleDelete,
                                className: "h-11 text-base bg-destructive hover:bg-destructive/90 text-destructive-foreground",
                                "data-ocid": "admin_products.confirm_button",
                                children: deleteProduct.isPending ? "Deleting…" : "Yes, Delete"
                              }
                            )
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ]
                },
                product.id.toString()
              )) })
            ]
          }
        ) }) })
      ]
    }
  ) });
}
export {
  AdminProducts as default
};

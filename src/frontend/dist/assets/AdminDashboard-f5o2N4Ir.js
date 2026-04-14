import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, S as Skeleton } from "./index-BoS_c9l9.js";
import { B as Badge } from "./badge-DP2PmGMe.js";
import { c as createLucideIcon, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { A as AdminLayout, M as MessageSquare } from "./AdminLayout-Dt0EH1yO.js";
import { a as useAdminStore } from "./use-admin-BkUQat1e.js";
import { u as useProducts, b as useContacts } from "./use-products-CRlBsW0k.js";
import { P as Package } from "./package-BvE6Q_mh.js";
import { S as Star } from "./star-DCHOYRXD.js";
import "./menu-DTtBBOqd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function StatCard({
  label,
  value,
  icon: Icon,
  iconClass,
  loading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-6 flex items-center gap-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${iconClass}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-medium truncate", children: label }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-16 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-foreground mt-0.5", children: value })
    ] })
  ] });
}
function AdminDashboard() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: contacts, isLoading: contactsLoading } = useContacts();
  const totalProducts = (products == null ? void 0 : products.length) ?? 0;
  const featuredCount = (products == null ? void 0 : products.filter((p) => p.featured).length) ?? 0;
  const totalInquiries = (contacts == null ? void 0 : contacts.length) ?? 0;
  if (!token) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto space-y-8",
      "data-ocid": "admin_dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-foreground", children: "Welcome back 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mt-1", children: "Here's a quick overview of your store." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
            "data-ocid": "admin_dashboard.stats_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  label: "Total Products",
                  value: totalProducts,
                  icon: Package,
                  iconClass: "bg-primary/10 text-primary",
                  loading: productsLoading
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  label: "Total Categories",
                  value: 3,
                  icon: Tag,
                  iconClass: "bg-secondary/20 text-secondary-foreground"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  label: "Featured Products",
                  value: featuredCount,
                  icon: Star,
                  iconClass: "bg-accent/10 text-primary",
                  loading: productsLoading
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  label: "Total Inquiries",
                  value: totalInquiries,
                  icon: MessageSquare,
                  iconClass: "bg-muted text-muted-foreground",
                  loading: contactsLoading
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-2xl border border-border p-6 shadow-sm",
            "data-ocid": "admin_dashboard.quick_actions_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl text-foreground mb-4", children: "Quick Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => navigate({ to: "/admin/products/new" }),
                    className: "h-11 text-base font-semibold",
                    "data-ocid": "admin_dashboard.add_product_button",
                    children: "+ Add New Product"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => navigate({ to: "/admin/products" }),
                    className: "h-11 text-base font-semibold",
                    "data-ocid": "admin_dashboard.view_products_button",
                    children: "View Products"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: () => navigate({ to: "/admin/inquiries" }),
                    className: "h-11 text-base font-semibold",
                    "data-ocid": "admin_dashboard.view_inquiries_button",
                    children: "View Inquiries"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-2xl border border-border p-6 shadow-sm",
            "data-ocid": "admin_dashboard.categories_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl text-foreground mb-4", children: "Product Categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: [
                {
                  label: "T-Shirts",
                  count: (products == null ? void 0 : products.filter((p) => p.category === "tshirt").length) ?? 0
                },
                {
                  label: "Caps",
                  count: (products == null ? void 0 : products.filter((p) => p.category === "cap").length) ?? 0
                },
                {
                  label: "Bags",
                  count: (products == null ? void 0 : products.filter((p) => p.category === "bag").length) ?? 0
                }
              ].map(({ label, count }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3 border border-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-base text-foreground", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-sm font-bold", children: productsLoading ? "…" : count })
                  ]
                },
                label
              )) })
            ]
          }
        )
      ]
    }
  ) });
}
export {
  AdminDashboard as default
};

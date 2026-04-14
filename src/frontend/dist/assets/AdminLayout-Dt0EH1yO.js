import { r as reactExports, d as useRouterState, u as useNavigate, j as jsxRuntimeExports, L as Link, b as ue } from "./index-BoS_c9l9.js";
import { c as createLucideIcon, S as ShoppingBag, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { u as useAdmin } from "./use-admin-BkUQat1e.js";
import { P as Package } from "./package-BvE6Q_mh.js";
import { M as Menu } from "./menu-DTtBBOqd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
const adminNavLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare }
];
function AdminLayout({ children }) {
  var _a;
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { logout } = useAdmin();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    ue.success("Logged out successfully");
    navigate({ to: "/admin/login" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-background", children: [
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-20 bg-foreground/40 md:hidden",
        role: "button",
        tabIndex: 0,
        "aria-label": "Close sidebar",
        onClick: () => setSidebarOpen(false),
        onKeyDown: (e) => e.key === "Escape" && setSidebarOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed md:static inset-y-0 left-0 z-30 w-64 bg-secondary text-secondary-foreground flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`,
        "data-ocid": "admin.sidebar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-16 flex items-center gap-2 px-5 border-b border-sidebar-border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base text-secondary-foreground", children: "CorpMerch Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 px-3 py-4", "aria-label": "Admin navigation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 px-2 mb-2", children: "Menu" }),
            adminNavLinks.map(({ to, label, icon: Icon }) => {
              const isActive = currentPath.startsWith(to);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to,
                  onClick: () => setSidebarOpen(false),
                  "data-ocid": `admin.nav_${label.toLowerCase()}_link`,
                  className: `flex items-center gap-3 px-3 py-3 rounded-lg font-body font-semibold text-base mb-1 transition-smooth ${isActive ? "bg-primary text-primary-foreground" : "text-secondary-foreground/80 hover:bg-secondary-foreground/10 hover:text-secondary-foreground"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 shrink-0" }),
                    label
                  ]
                },
                to
              );
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleLogout,
              "data-ocid": "admin.logout_button",
              className: "w-full flex items-center gap-3 px-3 py-3 rounded-lg font-body font-semibold text-base text-secondary-foreground/70 hover:bg-destructive/20 hover:text-destructive transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5 shrink-0" }),
                "Log Out"
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-10 h-16 bg-card border-b border-border shadow-subtle flex items-center px-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth",
            "aria-label": "Open sidebar",
            onClick: () => setSidebarOpen(true),
            "data-ocid": "admin.mobile_menu_toggle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold text-lg text-foreground truncate", children: ((_a = adminNavLinks.find((l) => currentPath.startsWith(l.to))) == null ? void 0 : _a.label) ?? "Admin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleLogout,
            className: "hidden md:flex items-center gap-2 text-sm",
            "data-ocid": "admin.topbar_logout_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
              "Logout"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 md:p-6 bg-background", children })
    ] })
  ] });
}
export {
  AdminLayout as A,
  MessageSquare as M
};

import { c as createLucideIcon, S as ShoppingBag, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { j as jsxRuntimeExports, r as reactExports, d as useRouterState, L as Link, c as cn } from "./index-BoS_c9l9.js";
import { M as Menu } from "./menu-DTtBBOqd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-card border-b border-border shadow-subtle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-2 transition-smooth hover:opacity-80",
          "data-ocid": "nav.logo_link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-foreground leading-tight", children: "BrandWear" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "hidden md:flex items-center gap-1",
          "aria-label": "Main navigation",
          children: [
            navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  "data-ocid": `nav.${link.label.toLowerCase()}_link`,
                  className: `px-4 py-2 rounded-lg font-body font-semibold text-base transition-smooth ${isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted hover:text-primary"}`,
                  children: link.label
                },
                link.to
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "nav.cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "ml-3 text-base px-5 py-2.5 font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              "Get a Quote"
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth",
          type: "button",
          "aria-label": menuOpen ? "Close menu" : "Open menu",
          onClick: () => setMenuOpen(!menuOpen),
          "data-ocid": "nav.mobile_menu_toggle",
          children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }),
    menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-card px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: "flex flex-col gap-1 pt-2",
        "aria-label": "Mobile navigation",
        children: [
          navLinks.map((link) => {
            const isActive = currentPath === link.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.to,
                onClick: () => setMenuOpen(false),
                "data-ocid": `nav.mobile_${link.label.toLowerCase()}_link`,
                className: `px-4 py-3 rounded-lg font-body font-semibold text-base transition-smooth ${isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`,
                children: link.label
              },
              link.to
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setMenuOpen(false),
              "data-ocid": "nav.mobile_cta_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full mt-2 text-base py-3 font-semibold", children: "Get a Quote" })
            }
          )
        ]
      }
    ) })
  ] });
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : ""
  )}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-secondary text-secondary-foreground mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-secondary-foreground", children: "BrandWear" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-secondary-foreground/70 leading-relaxed", children: "Premium corporate merchandise — T-shirts, caps, and bags custom-branded for your team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mb-3 text-secondary-foreground", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            className: "text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-smooth",
            children: link.label
          }
        ) }, link.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mb-3 text-secondary-foreground", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-2 text-sm text-secondary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:+911234567890",
              className: "hover:text-secondary-foreground transition-smooth flex items-center gap-2",
              children: "📞 +91 12345 67890"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/911234567890",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-secondary-foreground transition-smooth flex items-center gap-2",
              children: "💬 WhatsApp Chat"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:hello@brandwear.in",
              className: "hover:text-secondary-foreground transition-smooth flex items-center gap-2",
              children: "✉️ hello@brandwear.in"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-secondary-foreground/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        year,
        " BrandWear. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?${utm}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-secondary-foreground transition-smooth underline",
            children: "caffeine.ai"
          }
        )
      ] })
    ] })
  ] }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}
export {
  Card as C,
  Layout as L,
  MessageCircle as M,
  Phone as P,
  X,
  CardContent as a,
  CardFooter as b
};

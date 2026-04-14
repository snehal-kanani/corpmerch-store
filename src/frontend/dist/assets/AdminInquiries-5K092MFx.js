import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, S as Skeleton } from "./index-BoS_c9l9.js";
import { B as Badge } from "./badge-DP2PmGMe.js";
import { A as AdminLayout, M as MessageSquare } from "./AdminLayout-Dt0EH1yO.js";
import { a as useAdminStore } from "./use-admin-BkUQat1e.js";
import { b as useContacts } from "./use-products-CRlBsW0k.js";
import { c as createLucideIcon } from "./shopping-bag-B1LxUXfM.js";
import { M as Mail } from "./mail-DOxfjPQ_.js";
import "./package-BvE6Q_mh.js";
import "./menu-DTtBBOqd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode);
function formatDate(nanos) {
  const ms = Number(nanos / 1000000n);
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function AdminInquiries() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);
  const { data: contacts, isLoading } = useContacts();
  if (!token) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-4xl mx-auto space-y-6",
      "data-ocid": "admin_inquiries.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Customer Inquiries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "All contact form submissions from your customers" })
          ] }),
          !isLoading && contacts && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "ml-auto text-base px-3 py-1", children: [
            contacts.length,
            " total"
          ] })
        ] }),
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin_inquiries.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border p-5 space-y-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-48" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" })
            ]
          },
          i
        )) }),
        !isLoading && (!contacts || contacts.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-2xl border border-border p-16 flex flex-col items-center text-center gap-4",
            "data-ocid": "admin_inquiries.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-8 h-8 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: "No Inquiries Yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-sm", children: "When customers fill in the contact form, their messages will appear here." })
            ]
          }
        ),
        !isLoading && contacts && contacts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "admin_inquiries.list", children: contacts.map((contact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-smooth",
            "data-ocid": `admin_inquiries.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary font-display", children: contact.name.charAt(0).toUpperCase() }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-base truncate", children: contact.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `mailto:${contact.email}`,
                        className: "flex items-center gap-1 text-sm text-primary hover:underline truncate",
                        "data-ocid": `admin_inquiries.email_link.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 shrink-0" }),
                          contact.email
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: formatDate(contact.createdAt) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed whitespace-pre-line pl-12", children: contact.message })
            ]
          },
          contact.id.toString()
        )) })
      ]
    }
  ) });
}
export {
  AdminInquiries as default
};

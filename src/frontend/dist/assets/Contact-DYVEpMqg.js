import { j as jsxRuntimeExports, b as ue } from "./index-BoS_c9l9.js";
import { c as createLucideIcon, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { L as Layout, P as Phone, M as MessageCircle, C as Card } from "./card-WJECMchA.js";
import { I as Input } from "./input-Bzq8Oyhq.js";
import { L as Label } from "./label-BmS7YbRW.js";
import { T as Textarea } from "./textarea-CRIOTvvj.js";
import { u as useForm } from "./index.esm-DYS4JS3h.js";
import { a as useSubmitContact } from "./use-products-CRlBsW0k.js";
import { m as motion } from "./proxy-DfzsGJYi.js";
import { M as Mail } from "./mail-DOxfjPQ_.js";
import "./menu-DTtBBOqd.js";
import "./use-admin-BkUQat1e.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const PHONE = "+91-9876543210";
const WA_NUMBER = "919876543210";
const EMAIL_ADDR = "info@corpmerch.com";
const WA_MESSAGE = encodeURIComponent("I am interested in your products");
const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Talk to our team directly",
    detail: PHONE,
    btnLabel: "Tap to Call",
    href: "tel:+919876543210",
    colorBg: "bg-primary/10",
    colorText: "text-primary",
    btnBorder: "border-primary",
    btnColor: "text-primary",
    btnHover: "hover:bg-primary/10",
    ocid: "contact.call_button"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    detail: PHONE,
    btnLabel: "Chat on WhatsApp",
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
    colorBg: "bg-secondary/20",
    colorText: "text-secondary-foreground",
    btnBorder: "border-secondary",
    btnColor: "text-secondary-foreground",
    btnHover: "hover:bg-secondary/20",
    ocid: "contact.whatsapp_button"
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We reply within 24 hours",
    detail: EMAIL_ADDR,
    btnLabel: "Send Email",
    href: `mailto:${EMAIL_ADDR}`,
    colorBg: "bg-accent/20",
    colorText: "text-accent-foreground",
    btnBorder: "border-accent",
    btnColor: "text-accent-foreground",
    btnHover: "hover:bg-accent/20",
    ocid: "contact.email_button"
  }
];
const businessInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "12, Industrial Estate, Sector 7\nMumbai, Maharashtra – 400001"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: Closed"
  },
  {
    icon: Building2,
    label: "Company",
    value: "CorpMerch India Pvt. Ltd.\nGST: 27AAACI0000A1Z5"
  }
];
function Contact() {
  const submitContact = useSubmitContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();
  const onSubmit = async (values) => {
    const input = {
      name: values.name,
      email: values.email,
      message: values.phone ? `${values.message}

Phone: ${values.phone}` : values.message
    };
    try {
      await submitContact.mutateAsync(input);
      ue.success("Message sent! We will get back to you soon.", {
        description: "Thank you for reaching out to us."
      });
      reset();
    } catch {
      ue.error("Could not send your message. Please try again.", {
        description: "If the problem continues, call or WhatsApp us directly."
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "text-label text-primary mb-3",
          children: "Get In Touch"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "text-section-heading mb-4",
          children: "Contact Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2 },
          className: "text-xl text-muted-foreground",
          children: "We are here to help you — reach out any way you prefer."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-16 px-4",
        "data-ocid": "contact.quick_cards",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-center mb-10", children: "Choose How to Reach Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: contactCards.map((card, i) => {
            const Icon = card.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col items-center text-center p-8 gap-5 h-full shadow-sm hover:shadow-md transition-smooth", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `rounded-2xl p-5 ${card.colorBg} ${card.colorText}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 36, strokeWidth: 1.8 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold mb-1", children: card.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-3", children: card.subtitle }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground break-all", children: card.detail })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: card.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "w-full",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "lg",
                          className: `w-full text-lg h-14 font-semibold border-2 transition-smooth ${card.btnBorder} ${card.btnColor} ${card.btnHover}`,
                          "data-ocid": card.ocid,
                          children: card.btnLabel
                        }
                      )
                    }
                  )
                ] })
              },
              card.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 px-4",
        "data-ocid": "contact.form_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold mb-2", children: "Send Us a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-8", children: "Fill in the form below and we will reply within one business day." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    className: "space-y-6",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", className: "text-base font-semibold", children: [
                          "Full Name ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "name",
                            placeholder: "e.g. Ramesh Sharma",
                            className: "h-14 text-lg px-4",
                            "data-ocid": "contact.name_input",
                            ...register("name", {
                              required: "Please enter your name",
                              minLength: { value: 2, message: "Name is too short" }
                            })
                          }
                        ),
                        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-base",
                            "data-ocid": "contact.name_input.field_error",
                            children: errors.name.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", className: "text-base font-semibold", children: [
                          "Email Address ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "email",
                            type: "email",
                            placeholder: "e.g. ramesh@company.com",
                            className: "h-14 text-lg px-4",
                            "data-ocid": "contact.email_input",
                            ...register("email", {
                              required: "Please enter your email address",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                              }
                            })
                          }
                        ),
                        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-base",
                            "data-ocid": "contact.email_input.field_error",
                            children: errors.email.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "phone", className: "text-base font-semibold", children: [
                          "Phone Number",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "phone",
                            type: "tel",
                            placeholder: "e.g. +91-9876543210",
                            className: "h-14 text-lg px-4",
                            "data-ocid": "contact.phone_input",
                            ...register("phone")
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "message", className: "text-base font-semibold", children: [
                          "Your Message ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Textarea,
                          {
                            id: "message",
                            placeholder: "Tell us what you need — type of products, quantity, deadline, or any questions...",
                            className: "text-lg px-4 py-3 min-h-[140px] resize-none",
                            "data-ocid": "contact.message_textarea",
                            ...register("message", {
                              required: "Please write your message",
                              minLength: {
                                value: 20,
                                message: "Please write at least 20 characters so we can help you better"
                              }
                            })
                          }
                        ),
                        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-base",
                            "data-ocid": "contact.message_textarea.field_error",
                            children: errors.message.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          size: "lg",
                          className: "w-full h-14 text-lg font-semibold transition-smooth",
                          disabled: isSubmitting || submitContact.isPending,
                          "data-ocid": "contact.submit_button",
                          children: submitContact.isPending ? "Sending…" : "Send Message"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold mb-6", children: "Our Information" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: businessInfo.map((info) => {
                    const Icon = info.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-primary/10 p-3 mt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, className: "text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-muted-foreground mb-1", children: info.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground whitespace-pre-line leading-relaxed", children: info.value })
                      ] })
                    ] }, info.label);
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl overflow-hidden border border-border shadow-sm",
                    "data-ocid": "contact.map_section",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "relative w-full",
                          style: { paddingBottom: "56.25%" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "iframe",
                            {
                              title: "CorpMerch Location",
                              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823053!2d72.74109995709657!3d19.08250598495758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713100000000!5m2!1sen!2sin",
                              className: "absolute inset-0 w-full h-full",
                              allowFullScreen: true,
                              loading: "lazy",
                              referrerPolicy: "no-referrer-when-downgrade"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 px-4 py-3 text-sm text-muted-foreground text-center", children: "📍 Industrial Estate, Sector 7, Mumbai, Maharashtra" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary/5 border-primary/20 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Quick Tip:" }),
                  " ",
                  "For the fastest response, WhatsApp or call us directly. Our team is available Monday–Saturday, 9 AM to 7 PM."
                ] }) })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Contact as default
};

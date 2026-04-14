import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, b as ue } from "./index-BoS_c9l9.js";
import { c as createLucideIcon, S as ShoppingBag, B as Button } from "./shopping-bag-B1LxUXfM.js";
import { I as Input } from "./input-Bzq8Oyhq.js";
import { L as Label } from "./label-BmS7YbRW.js";
import { u as useForm } from "./index.esm-DYS4JS3h.js";
import { u as useAdmin } from "./use-admin-BkUQat1e.js";
import { L as LoaderCircle } from "./loader-circle-B2x6L26b.js";
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
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
function AdminLogin() {
  const { login } = useAdmin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        ue.success("Welcome back! Logged in successfully.");
        navigate({ to: "/admin/dashboard" });
      } else {
        ue.error("Incorrect email or password. Please try again.");
      }
    } catch {
      ue.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-muted/30 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10",
      "data-ocid": "admin_login.card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-7 h-7 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground text-center", children: "Admin Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mt-2 text-center", children: "Sign in to manage your products & inquiries" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit(onSubmit),
            noValidate: true,
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "email",
                    className: "text-lg font-semibold text-foreground",
                    children: "Email Address"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    autoComplete: "email",
                    placeholder: "admin@example.com",
                    className: "h-12 text-base border-input",
                    "data-ocid": "admin_login.email_input",
                    ...register("email", {
                      required: "Please enter your email address.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address."
                      }
                    })
                  }
                ),
                errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-sm font-medium",
                    "data-ocid": "admin_login.email_field_error",
                    children: errors.email.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Label,
                  {
                    htmlFor: "password",
                    className: "text-lg font-semibold text-foreground",
                    children: "Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "password",
                      type: showPassword ? "text" : "password",
                      autoComplete: "current-password",
                      placeholder: "Enter your password",
                      className: "h-12 text-base pr-12 border-input",
                      "data-ocid": "admin_login.password_input",
                      ...register("password", {
                        required: "Please enter your password.",
                        minLength: {
                          value: 4,
                          message: "Password must be at least 4 characters."
                        }
                      })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                      "aria-label": showPassword ? "Hide password" : "Show password",
                      "data-ocid": "admin_login.toggle_password_button",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-5 h-5" })
                    }
                  )
                ] }),
                errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-sm font-medium",
                    "data-ocid": "admin_login.password_field_error",
                    children: errors.password.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: isLoading,
                  className: "w-full h-12 text-base font-semibold",
                  "data-ocid": "admin_login.submit_button",
                  children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }),
                    "Signing In…"
                  ] }) : "Sign In"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: "text-muted-foreground hover:text-primary text-base font-medium transition-colors underline-offset-4 hover:underline",
            "data-ocid": "admin_login.back_to_website_link",
            children: "← Back to website"
          }
        ) })
      ]
    }
  ) }) });
}
export {
  AdminLogin as default
};

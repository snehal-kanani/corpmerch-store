import { u as useNavigate, e as useParams, r as reactExports, j as jsxRuntimeExports, S as Skeleton, b as ue } from "./index-BoS_c9l9.js";
import { B as Button } from "./shopping-bag-B1LxUXfM.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as Checkbox } from "./select-CN3I2qcM.js";
import { I as Input } from "./input-Bzq8Oyhq.js";
import { L as Label } from "./label-BmS7YbRW.js";
import { T as Textarea } from "./textarea-CRIOTvvj.js";
import { u as useForm, C as Controller } from "./index.esm-DYS4JS3h.js";
import { A as AdminLayout } from "./AdminLayout-Dt0EH1yO.js";
import { a as useAdminStore } from "./use-admin-BkUQat1e.js";
import { e as useProduct, f as useUpdateProduct } from "./use-products-CRlBsW0k.js";
import { L as LoaderCircle } from "./loader-circle-B2x6L26b.js";
import "./index-8assIisn.js";
import "./package-BvE6Q_mh.js";
import "./menu-DTtBBOqd.js";
function AdminProductEdit() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  const params = useParams({ from: "/admin/products/$id/edit" });
  const productId = BigInt(params.id);
  reactExports.useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);
  const { data: product, isLoading } = useProduct(productId);
  const updateProduct = useUpdateProduct();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: { featured: false, category: "tshirt" }
  });
  reactExports.useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        category: product.category,
        price: product.price.toString(),
        description: product.description,
        imageUrl: product.imageUrl,
        stockQty: product.stockQty.toString(),
        featured: product.featured
      });
    }
  }, [product, reset]);
  const onSubmit = async (data) => {
    try {
      await updateProduct.mutateAsync({
        id: productId,
        name: data.name.trim(),
        category: data.category,
        price: Number.parseFloat(data.price),
        description: data.description.trim(),
        imageUrl: data.imageUrl.trim(),
        stockQty: BigInt(Math.floor(Number.parseFloat(data.stockQty))),
        featured: data.featured
      });
      ue.success("Product updated successfully!");
      navigate({ to: "/admin/products" });
    } catch {
      ue.error("Could not update product. Please try again.");
    }
  };
  if (!token) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", "data-ocid": "admin_product_edit.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-foreground", children: "Edit Product" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mt-1", children: "Update the product details below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "space-y-5",
        "data-ocid": "admin_product_edit.loading_state",
        children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" }, i))
      }
    ) : !product ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "py-16 text-center",
        "data-ocid": "admin_product_edit.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-foreground", children: "Product not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 mb-5", children: "This product may have been deleted." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => navigate({ to: "/admin/products" }),
              "data-ocid": "admin_product_edit.back_button",
              children: "Back to Products"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                htmlFor: "name",
                className: "text-lg font-semibold text-foreground",
                children: "Product Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                placeholder: "e.g. Classic Logo T-Shirt",
                className: "h-12 text-base",
                "data-ocid": "admin_product_edit.name_input",
                ...register("name", {
                  required: "Please enter a product name."
                })
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-destructive text-sm font-medium",
                "data-ocid": "admin_product_edit.name_field_error",
                children: errors.name.message
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "category",
                className: "text-lg font-semibold text-foreground",
                children: "Category"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "category",
                control,
                rules: { required: "Please select a category." },
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "category",
                      className: "h-12 text-base",
                      "data-ocid": "admin_product_edit.category_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a category" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tshirt", className: "text-base py-2", children: "T-Shirt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cap", className: "text-base py-2", children: "Cap" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bag", className: "text-base py-2", children: "Bag" })
                  ] })
                ] })
              }
            ),
            errors.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-destructive text-sm font-medium",
                "data-ocid": "admin_product_edit.category_field_error",
                children: errors.category.message
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "price",
                  className: "text-lg font-semibold text-foreground",
                  children: "Price (₹)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "price",
                  type: "number",
                  min: "0",
                  step: "0.01",
                  placeholder: "0.00",
                  className: "h-12 text-base",
                  "data-ocid": "admin_product_edit.price_input",
                  ...register("price", {
                    required: "Please enter a price.",
                    min: { value: 0, message: "Price cannot be negative." },
                    validate: (v) => !Number.isNaN(Number.parseFloat(v)) || "Please enter a valid price."
                  })
                }
              ),
              errors.price && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-sm font-medium",
                  "data-ocid": "admin_product_edit.price_field_error",
                  children: errors.price.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "stockQty",
                  className: "text-lg font-semibold text-foreground",
                  children: "Stock Quantity"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "stockQty",
                  type: "number",
                  min: "0",
                  step: "1",
                  placeholder: "0",
                  className: "h-12 text-base",
                  "data-ocid": "admin_product_edit.stock_input",
                  ...register("stockQty", {
                    required: "Please enter stock quantity.",
                    min: { value: 0, message: "Stock cannot be negative." },
                    validate: (v) => Number.isInteger(Number.parseFloat(v)) || "Please enter a whole number."
                  })
                }
              ),
              errors.stockQty && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-sm font-medium",
                  "data-ocid": "admin_product_edit.stock_field_error",
                  children: errors.stockQty.message
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "description",
                className: "text-lg font-semibold text-foreground",
                children: "Description"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "description",
                rows: 4,
                placeholder: "Describe the product…",
                className: "text-base resize-none",
                "data-ocid": "admin_product_edit.description_textarea",
                ...register("description", {
                  required: "Please add a description."
                })
              }
            ),
            errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-destructive text-sm font-medium",
                "data-ocid": "admin_product_edit.description_field_error",
                children: errors.description.message
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "imageUrl",
                className: "text-lg font-semibold text-foreground",
                children: "Image URL"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "imageUrl",
                type: "url",
                placeholder: "https://example.com/product-image.jpg",
                className: "h-12 text-base",
                "data-ocid": "admin_product_edit.image_url_input",
                ...register("imageUrl", {
                  required: "Please enter an image URL.",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Please enter a valid URL starting with https://"
                  }
                })
              }
            ),
            errors.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-destructive text-sm font-medium",
                "data-ocid": "admin_product_edit.image_url_field_error",
                children: errors.imageUrl.message
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "featured",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "featured",
                    checked: field.value,
                    onCheckedChange: field.onChange,
                    className: "w-6 h-6",
                    "data-ocid": "admin_product_edit.featured_checkbox"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "featured",
                className: "text-lg font-semibold text-foreground cursor-pointer",
                children: "Mark as Featured Product"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse sm:flex-row gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "h-12 text-base font-semibold flex-1",
                onClick: () => navigate({ to: "/admin/products" }),
                "data-ocid": "admin_product_edit.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: updateProduct.isPending,
                className: "h-12 text-base font-semibold flex-1",
                "data-ocid": "admin_product_edit.submit_button",
                children: updateProduct.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }),
                  "Updating…"
                ] }) : "Update Product"
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}
export {
  AdminProductEdit as default
};

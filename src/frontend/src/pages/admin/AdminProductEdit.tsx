import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { AdminLayout } from "../../components/AdminLayout";
import { useAdminStore } from "../../hooks/use-admin";
import { useProduct, useUpdateProduct } from "../../hooks/use-products";
import type { Category } from "../../types";

interface ProductFormValues {
  name: string;
  category: Category;
  price: string;
  description: string;
  imageUrl: string;
  stockQty: string;
  featured: boolean;
}

export default function AdminProductEdit() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  const params = useParams({ from: "/admin/products/$id/edit" });
  const productId = BigInt(params.id);

  useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);

  const { data: product, isLoading } = useProduct(productId);
  const updateProduct = useUpdateProduct();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: { featured: false, category: "tshirt" as Category },
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        category: product.category as Category,
        price: product.price.toString(),
        description: product.description,
        imageUrl: product.imageUrl,
        stockQty: product.stockQty.toString(),
        featured: product.featured,
      });
    }
  }, [product, reset]);

  const onSubmit = async (data: ProductFormValues) => {
    try {
      await updateProduct.mutateAsync({
        id: productId,
        name: data.name.trim(),
        category: data.category,
        price: Number.parseFloat(data.price),
        description: data.description.trim(),
        imageUrl: data.imageUrl.trim(),
        stockQty: BigInt(Math.floor(Number.parseFloat(data.stockQty))),
        featured: data.featured,
      });
      toast.success("Product updated successfully!");
      navigate({ to: "/admin/products" });
    } catch {
      toast.error("Could not update product. Please try again.");
    }
  };

  if (!token) return null;

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto" data-ocid="admin_product_edit.page">
        <div className="mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Edit Product
          </h2>
          <p className="text-muted-foreground text-base mt-1">
            Update the product details below.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
          {isLoading ? (
            <div
              className="space-y-5"
              data-ocid="admin_product_edit.loading_state"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))}
            </div>
          ) : !product ? (
            <div
              className="py-16 text-center"
              data-ocid="admin_product_edit.error_state"
            >
              <p className="text-xl font-semibold text-foreground">
                Product not found
              </p>
              <p className="text-muted-foreground mt-2 mb-5">
                This product may have been deleted.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate({ to: "/admin/products" })}
                data-ocid="admin_product_edit.back_button"
              >
                Back to Products
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-lg font-semibold text-foreground"
                >
                  Product Name
                </Label>
                <Input
                  id="name"
                  placeholder="e.g. Classic Logo T-Shirt"
                  className="h-12 text-base"
                  data-ocid="admin_product_edit.name_input"
                  {...register("name", {
                    required: "Please enter a product name.",
                  })}
                />
                {errors.name && (
                  <p
                    className="text-destructive text-sm font-medium"
                    data-ocid="admin_product_edit.name_field_error"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label
                  htmlFor="category"
                  className="text-lg font-semibold text-foreground"
                >
                  Category
                </Label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Please select a category." }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="category"
                        className="h-12 text-base"
                        data-ocid="admin_product_edit.category_select"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tshirt" className="text-base py-2">
                          T-Shirt
                        </SelectItem>
                        <SelectItem value="cap" className="text-base py-2">
                          Cap
                        </SelectItem>
                        <SelectItem value="bag" className="text-base py-2">
                          Bag
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category && (
                  <p
                    className="text-destructive text-sm font-medium"
                    data-ocid="admin_product_edit.category_field_error"
                  >
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Price + Stock */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="price"
                    className="text-lg font-semibold text-foreground"
                  >
                    Price (₹)
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="h-12 text-base"
                    data-ocid="admin_product_edit.price_input"
                    {...register("price", {
                      required: "Please enter a price.",
                      min: { value: 0, message: "Price cannot be negative." },
                      validate: (v) =>
                        !Number.isNaN(Number.parseFloat(v)) ||
                        "Please enter a valid price.",
                    })}
                  />
                  {errors.price && (
                    <p
                      className="text-destructive text-sm font-medium"
                      data-ocid="admin_product_edit.price_field_error"
                    >
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="stockQty"
                    className="text-lg font-semibold text-foreground"
                  >
                    Stock Quantity
                  </Label>
                  <Input
                    id="stockQty"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="0"
                    className="h-12 text-base"
                    data-ocid="admin_product_edit.stock_input"
                    {...register("stockQty", {
                      required: "Please enter stock quantity.",
                      min: { value: 0, message: "Stock cannot be negative." },
                      validate: (v) =>
                        Number.isInteger(Number.parseFloat(v)) ||
                        "Please enter a whole number.",
                    })}
                  />
                  {errors.stockQty && (
                    <p
                      className="text-destructive text-sm font-medium"
                      data-ocid="admin_product_edit.stock_field_error"
                    >
                      {errors.stockQty.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-lg font-semibold text-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Describe the product…"
                  className="text-base resize-none"
                  data-ocid="admin_product_edit.description_textarea"
                  {...register("description", {
                    required: "Please add a description.",
                  })}
                />
                {errors.description && (
                  <p
                    className="text-destructive text-sm font-medium"
                    data-ocid="admin_product_edit.description_field_error"
                  >
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label
                  htmlFor="imageUrl"
                  className="text-lg font-semibold text-foreground"
                >
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/product-image.jpg"
                  className="h-12 text-base"
                  data-ocid="admin_product_edit.image_url_input"
                  {...register("imageUrl", {
                    required: "Please enter an image URL.",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message:
                        "Please enter a valid URL starting with https://",
                    },
                  })}
                />
                {errors.imageUrl && (
                  <p
                    className="text-destructive text-sm font-medium"
                    data-ocid="admin_product_edit.image_url_field_error"
                  >
                    {errors.imageUrl.message}
                  </p>
                )}
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3 py-2">
                <Controller
                  name="featured"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="featured"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="w-6 h-6"
                      data-ocid="admin_product_edit.featured_checkbox"
                    />
                  )}
                />
                <Label
                  htmlFor="featured"
                  className="text-lg font-semibold text-foreground cursor-pointer"
                >
                  Mark as Featured Product
                </Label>
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 text-base font-semibold flex-1"
                  onClick={() => navigate({ to: "/admin/products" })}
                  data-ocid="admin_product_edit.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={updateProduct.isPending}
                  className="h-12 text-base font-semibold flex-1"
                  data-ocid="admin_product_edit.submit_button"
                >
                  {updateProduct.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Updating…
                    </>
                  ) : (
                    "Update Product"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

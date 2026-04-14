import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import { Edit2, PackageOpen, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminLayout } from "../../components/AdminLayout";
import { useAdminStore } from "../../hooks/use-admin";
import { useDeleteProduct, useProducts } from "../../hooks/use-products";
import type { Product } from "../../types";

const CATEGORY_LABELS: Record<string, string> = {
  tshirt: "T-Shirt",
  cap: "Cap",
  bag: "Bag",
};

const CATEGORY_BADGE: Record<string, string> = {
  tshirt: "bg-primary/15 text-primary border-primary/25",
  cap: "bg-secondary/25 text-secondary-foreground border-secondary/30",
  bag: "bg-accent/15 text-primary border-accent/25",
};

export default function AdminProducts() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);

  const { data: products, isLoading } = useProducts();
  const deleteProduct = useDeleteProduct();

  const filtered = useMemo(() => {
    if (!products) return [];
    const q = search.toLowerCase().trim();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (CATEGORY_LABELS[p.category] ?? "").toLowerCase().includes(q),
    );
  }, [products, search]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteProduct.mutateAsync(deleteTarget.id);
      toast.success(`"${deleteTarget.name}" deleted successfully.`);
    } catch {
      toast.error("Could not delete product. Please try again.");
    } finally {
      setDeleteTarget(null);
    }
  };

  if (!token) return null;

  return (
    <AdminLayout>
      <div
        className="max-w-6xl mx-auto space-y-6"
        data-ocid="admin_products.page"
      >
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 pl-10 text-base"
              data-ocid="admin_products.search_input"
            />
          </div>
          <Button
            onClick={() => navigate({ to: "/admin/products/new" })}
            className="h-11 text-base font-semibold shrink-0 flex items-center gap-2"
            data-ocid="admin_products.add_product_button"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </Button>
        </div>

        {/* Table card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {isLoading ? (
            <div
              className="p-6 space-y-3"
              data-ocid="admin_products.loading_state"
            >
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-16 w-full rounded-xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-20 px-4 text-center"
              data-ocid="admin_products.empty_state"
            >
              <PackageOpen className="w-16 h-16 text-muted-foreground/40 mb-4" />
              <p className="text-xl font-semibold text-foreground">
                No products found
              </p>
              <p className="text-muted-foreground mt-1 mb-5">
                {search
                  ? "Try a different search term."
                  : "Add your first product to get started."}
              </p>
              {!search && (
                <Button
                  onClick={() => navigate({ to: "/admin/products/new" })}
                  data-ocid="admin_products.empty_add_button"
                >
                  Add Product
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table
                className="w-full text-left"
                data-ocid="admin_products.table"
              >
                <thead className="bg-muted/40 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Image
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Name
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Category
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-right">
                      Price
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-right">
                      Stock
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center">
                      Featured
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((product, idx) => (
                    <tr
                      key={product.id.toString()}
                      className="hover:bg-muted/20 transition-colors"
                      data-ocid={`admin_products.item.${idx + 1}`}
                    >
                      {/* Thumbnail */}
                      <td className="px-4 py-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted border border-border shrink-0">
                          {product.imageUrl ? (
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <PackageOpen className="w-5 h-5 text-muted-foreground/40" />
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Name */}
                      <td className="px-4 py-3">
                        <p className="font-semibold text-base text-foreground truncate max-w-[200px]">
                          {product.name}
                        </p>
                      </td>

                      {/* Category */}
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold border ${
                            CATEGORY_BADGE[product.category] ??
                            "bg-muted text-muted-foreground border-border"
                          }`}
                        >
                          {CATEGORY_LABELS[product.category] ??
                            product.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-4 py-3 text-right font-mono font-semibold text-foreground">
                        ₹{product.price.toFixed(2)}
                      </td>

                      {/* Stock */}
                      <td className="px-4 py-3 text-right">
                        <Badge
                          variant={
                            Number(product.stockQty) > 0
                              ? "secondary"
                              : "destructive"
                          }
                          className="font-mono text-sm"
                        >
                          {product.stockQty.toString()}
                        </Badge>
                      </td>

                      {/* Featured */}
                      <td className="px-4 py-3 text-center">
                        {product.featured ? (
                          <Badge className="bg-primary/15 text-primary border-primary/25 text-sm">
                            Yes
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm font-medium">
                            No
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              navigate({
                                to: `/admin/products/${product.id.toString()}/edit`,
                              })
                            }
                            className="h-9 px-3 text-sm font-medium hover:bg-primary/10 hover:text-primary"
                            data-ocid={`admin_products.edit_button.${idx + 1}`}
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Edit
                          </Button>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setDeleteTarget(product)}
                                className="h-9 px-3 text-sm font-medium hover:bg-destructive/10 hover:text-destructive"
                                data-ocid={`admin_products.delete_button.${idx + 1}`}
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent data-ocid="admin_products.dialog">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-xl font-display">
                                  Delete Product?
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-base">
                                  Are you sure you want to delete{" "}
                                  <strong>"{deleteTarget?.name}"</strong>? This
                                  action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel
                                  onClick={() => setDeleteTarget(null)}
                                  className="h-11 text-base"
                                  data-ocid="admin_products.cancel_button"
                                >
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={handleDelete}
                                  className="h-11 text-base bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                                  data-ocid="admin_products.confirm_button"
                                >
                                  {deleteProduct.isPending
                                    ? "Deleting…"
                                    : "Yes, Delete"}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

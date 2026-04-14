import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import { MessageSquare, Package, Star, Tag } from "lucide-react";
import { useEffect } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useAdminStore } from "../../hooks/use-admin";
import { useContacts, useProducts } from "../../hooks/use-products";

interface StatCardProps {
  label: string;
  value: number | string;
  icon: React.ElementType;
  iconClass: string;
  loading?: boolean;
}

function StatCard({
  label,
  value,
  icon: Icon,
  iconClass,
  loading,
}: StatCardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 flex items-center gap-5 shadow-sm">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${iconClass}`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <div className="min-w-0">
        <p className="text-muted-foreground text-sm font-medium truncate">
          {label}
        </p>
        {loading ? (
          <Skeleton className="h-8 w-16 mt-1" />
        ) : (
          <p className="text-3xl font-display font-bold text-foreground mt-0.5">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);

  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: contacts, isLoading: contactsLoading } = useContacts();

  const totalProducts = products?.length ?? 0;
  const featuredCount = products?.filter((p) => p.featured).length ?? 0;
  const totalInquiries = contacts?.length ?? 0;

  if (!token) return null;

  return (
    <AdminLayout>
      <div
        className="max-w-5xl mx-auto space-y-8"
        data-ocid="admin_dashboard.page"
      >
        {/* Heading */}
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Welcome back 👋
          </h2>
          <p className="text-muted-foreground text-base mt-1">
            Here's a quick overview of your store.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
          data-ocid="admin_dashboard.stats_section"
        >
          <StatCard
            label="Total Products"
            value={totalProducts}
            icon={Package}
            iconClass="bg-primary/10 text-primary"
            loading={productsLoading}
          />
          <StatCard
            label="Total Categories"
            value={3}
            icon={Tag}
            iconClass="bg-secondary/20 text-secondary-foreground"
          />
          <StatCard
            label="Featured Products"
            value={featuredCount}
            icon={Star}
            iconClass="bg-accent/10 text-primary"
            loading={productsLoading}
          />
          <StatCard
            label="Total Inquiries"
            value={totalInquiries}
            icon={MessageSquare}
            iconClass="bg-muted text-muted-foreground"
            loading={contactsLoading}
          />
        </div>

        {/* Quick Actions */}
        <div
          className="bg-card rounded-2xl border border-border p-6 shadow-sm"
          data-ocid="admin_dashboard.quick_actions_section"
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => navigate({ to: "/admin/products/new" })}
              className="h-11 text-base font-semibold"
              data-ocid="admin_dashboard.add_product_button"
            >
              + Add New Product
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/admin/products" })}
              className="h-11 text-base font-semibold"
              data-ocid="admin_dashboard.view_products_button"
            >
              View Products
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate({ to: "/admin/inquiries" })}
              className="h-11 text-base font-semibold"
              data-ocid="admin_dashboard.view_inquiries_button"
            >
              View Inquiries
            </Button>
          </div>
        </div>

        {/* Category Overview */}
        <div
          className="bg-card rounded-2xl border border-border p-6 shadow-sm"
          data-ocid="admin_dashboard.categories_section"
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-4">
            Product Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              {
                label: "T-Shirts",
                count:
                  products?.filter((p) => p.category === "tshirt").length ?? 0,
              },
              {
                label: "Caps",
                count:
                  products?.filter((p) => p.category === "cap").length ?? 0,
              },
              {
                label: "Bags",
                count:
                  products?.filter((p) => p.category === "bag").length ?? 0,
              },
            ].map(({ label, count }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3 border border-border"
              >
                <span className="font-semibold text-base text-foreground">
                  {label}
                </span>
                <Badge variant="secondary" className="text-sm font-bold">
                  {productsLoading ? "…" : count}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

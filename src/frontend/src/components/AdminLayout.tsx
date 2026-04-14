import { Button } from "@/components/ui/button";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAdmin } from "../hooks/use-admin";

const adminNavLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate({ to: "/admin/login" });
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-foreground/40 md:hidden"
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-secondary text-secondary-foreground flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        data-ocid="admin.sidebar"
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2 px-5 border-b border-sidebar-border shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-base text-secondary-foreground">
            CorpMerch Admin
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4" aria-label="Admin navigation">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 px-2 mb-2">
            Menu
          </p>
          {adminNavLinks.map(({ to, label, icon: Icon }) => {
            const isActive = currentPath.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                data-ocid={`admin.nav_${label.toLowerCase()}_link`}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-body font-semibold text-base mb-1 transition-smooth ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground/80 hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-5">
          <button
            type="button"
            onClick={handleLogout}
            data-ocid="admin.logout_button"
            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg font-body font-semibold text-base text-secondary-foreground/70 hover:bg-destructive/20 hover:text-destructive transition-smooth"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-10 h-16 bg-card border-b border-border shadow-subtle flex items-center px-4 gap-3">
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
            data-ocid="admin.mobile_menu_toggle"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-display font-semibold text-lg text-foreground truncate">
              {adminNavLinks.find((l) => currentPath.startsWith(l.to))?.label ??
                "Admin"}
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 text-sm"
            data-ocid="admin.topbar_logout_button"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </header>

        <main className="flex-1 p-4 md:p-6 bg-background">{children}</main>
      </div>
    </div>
  );
}

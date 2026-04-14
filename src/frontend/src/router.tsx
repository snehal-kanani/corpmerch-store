import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminProducts = lazy(() => import("./pages/admin/AdminProducts"));
const AdminProductNew = lazy(() => import("./pages/admin/AdminProductNew"));
const AdminProductEdit = lazy(() => import("./pages/admin/AdminProductEdit"));
const AdminInquiries = lazy(() => import("./pages/admin/AdminInquiries"));

function PageLoader() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-3/4" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/login",
  component: AdminLogin,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard",
  component: AdminDashboard,
});

const adminProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/products",
  component: AdminProducts,
});

const adminProductNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/products/new",
  component: AdminProductNew,
});

const adminProductEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/products/$id/edit",
  component: AdminProductEdit,
});

const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/inquiries",
  component: AdminInquiries,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  contactRoute,
  adminLoginRoute,
  adminDashboardRoute,
  adminProductsRoute,
  adminProductNewRoute,
  adminProductEditRoute,
  adminInquiriesRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

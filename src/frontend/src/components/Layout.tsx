import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
          data-ocid="nav.logo_link"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground leading-tight">
            BrandWear
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-base transition-smooth ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/contact" data-ocid="nav.cta_button">
            <Button className="ml-3 text-base px-5 py-2.5 font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.mobile_menu_toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          <nav
            className="flex flex-col gap-1 pt-2"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                  className={`px-4 py-3 rounded-lg font-body font-semibold text-base transition-smooth ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.mobile_cta_button"
            >
              <Button className="w-full mt-2 text-base py-3 font-semibold">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-secondary-foreground">
                BrandWear
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Premium corporate merchandise — T-shirts, caps, and bags
              custom-branded for your team.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-3 text-secondary-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-base mb-3 text-secondary-foreground">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
              <li>
                <a
                  href="tel:+911234567890"
                  className="hover:text-secondary-foreground transition-smooth flex items-center gap-2"
                >
                  📞 +91 12345 67890
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-foreground transition-smooth flex items-center gap-2"
                >
                  💬 WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@brandwear.in"
                  className="hover:text-secondary-foreground transition-smooth flex items-center gap-2"
                >
                  ✉️ hello@brandwear.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-secondary-foreground/50">
          <span>© {year} BrandWear. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-foreground transition-smooth underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

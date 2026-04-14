import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAdmin } from "../../hooks/use-admin";

interface LoginForm {
  email: string;
  password: string;
}

export default function AdminLogin() {
  const { login } = useAdmin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        toast.success("Welcome back! Logged in successfully.");
        navigate({ to: "/admin/dashboard" });
      } else {
        toast.error("Incorrect email or password. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div
          className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10"
          data-ocid="admin_login.card"
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <ShoppingBag className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-3xl text-foreground text-center">
              Admin Login
            </h1>
            <p className="text-muted-foreground text-base mt-2 text-center">
              Sign in to manage your products &amp; inquiries
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-lg font-semibold text-foreground"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="admin@example.com"
                className="h-12 text-base border-input"
                data-ocid="admin_login.email_input"
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p
                  className="text-destructive text-sm font-medium"
                  data-ocid="admin_login.email_field_error"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-lg font-semibold text-foreground"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 text-base pr-12 border-input"
                  data-ocid="admin_login.password_input"
                  {...register("password", {
                    required: "Please enter your password.",
                    minLength: {
                      value: 4,
                      message: "Password must be at least 4 characters.",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  data-ocid="admin_login.toggle_password_button"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p
                  className="text-destructive text-sm font-medium"
                  data-ocid="admin_login.password_field_error"
                >
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base font-semibold"
              data-ocid="admin_login.submit_button"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Signing In…
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary text-base font-medium transition-colors underline-offset-4 hover:underline"
              data-ocid="admin_login.back_to_website_link"
            >
              ← Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

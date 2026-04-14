import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
import { Inbox, Mail, MessageSquare } from "lucide-react";
import { useEffect } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useAdminStore } from "../../hooks/use-admin";
import { useContacts } from "../../hooks/use-products";

function formatDate(nanos: bigint): string {
  const ms = Number(nanos / 1_000_000n);
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminInquiries() {
  const token = useAdminStore((s) => s.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate({ to: "/admin/login" });
  }, [token, navigate]);

  const { data: contacts, isLoading } = useContacts();

  if (!token) return null;

  return (
    <AdminLayout>
      <div
        className="max-w-4xl mx-auto space-y-6"
        data-ocid="admin_inquiries.page"
      >
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-foreground">
              Customer Inquiries
            </h2>
            <p className="text-muted-foreground text-sm mt-0.5">
              All contact form submissions from your customers
            </p>
          </div>
          {!isLoading && contacts && (
            <Badge variant="secondary" className="ml-auto text-base px-3 py-1">
              {contacts.length} total
            </Badge>
          )}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="space-y-3" data-ocid="admin_inquiries.loading_state">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-5 space-y-3"
              >
                <div className="flex gap-3">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-48" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && (!contacts || contacts.length === 0) && (
          <div
            className="bg-card rounded-2xl border border-border p-16 flex flex-col items-center text-center gap-4"
            data-ocid="admin_inquiries.empty_state"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <Inbox className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              No Inquiries Yet
            </h3>
            <p className="text-muted-foreground text-base max-w-sm">
              When customers fill in the contact form, their messages will
              appear here.
            </p>
          </div>
        )}

        {/* Inquiry list */}
        {!isLoading && contacts && contacts.length > 0 && (
          <div className="space-y-3" data-ocid="admin_inquiries.list">
            {contacts.map((contact, i) => (
              <div
                key={contact.id.toString()}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-smooth"
                data-ocid={`admin_inquiries.item.${i + 1}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary font-display">
                        {contact.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-base truncate">
                        {contact.name}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-1 text-sm text-primary hover:underline truncate"
                        data-ocid={`admin_inquiries.email_link.${i + 1}`}
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {formatDate(contact.createdAt)}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line pl-12">
                  {contact.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

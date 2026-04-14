import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { useSubmitContact } from "../hooks/use-products";
import type { ContactInput } from "../types";

interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const PHONE = "+91-9876543210";
const WA_NUMBER = "919876543210";
const EMAIL_ADDR = "info@corpmerch.com";
const WA_MESSAGE = encodeURIComponent("I am interested in your products");

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Talk to our team directly",
    detail: PHONE,
    btnLabel: "Tap to Call",
    href: "tel:+919876543210",
    colorBg: "bg-primary/10",
    colorText: "text-primary",
    btnBorder: "border-primary",
    btnColor: "text-primary",
    btnHover: "hover:bg-primary/10",
    ocid: "contact.call_button",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    detail: PHONE,
    btnLabel: "Chat on WhatsApp",
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
    colorBg: "bg-secondary/20",
    colorText: "text-secondary-foreground",
    btnBorder: "border-secondary",
    btnColor: "text-secondary-foreground",
    btnHover: "hover:bg-secondary/20",
    ocid: "contact.whatsapp_button",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We reply within 24 hours",
    detail: EMAIL_ADDR,
    btnLabel: "Send Email",
    href: `mailto:${EMAIL_ADDR}`,
    colorBg: "bg-accent/20",
    colorText: "text-accent-foreground",
    btnBorder: "border-accent",
    btnColor: "text-accent-foreground",
    btnHover: "hover:bg-accent/20",
    ocid: "contact.email_button",
  },
];

const businessInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "12, Industrial Estate, Sector 7\nMumbai, Maharashtra – 400001",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: Closed",
  },
  {
    icon: Building2,
    label: "Company",
    value: "CorpMerch India Pvt. Ltd.\nGST: 27AAACI0000A1Z5",
  },
];

export default function Contact() {
  const submitContact = useSubmitContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const input: ContactInput = {
      name: values.name,
      email: values.email,
      message: values.phone
        ? `${values.message}\n\nPhone: ${values.phone}`
        : values.message,
    };
    try {
      await submitContact.mutateAsync(input);
      toast.success("Message sent! We will get back to you soon.", {
        description: "Thank you for reaching out to us.",
      });
      reset();
    } catch {
      toast.error("Could not send your message. Please try again.", {
        description: "If the problem continues, call or WhatsApp us directly.",
      });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-label text-primary mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-section-heading mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            We are here to help you — reach out any way you prefer.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section
        className="bg-muted/30 py-16 px-4"
        data-ocid="contact.quick_cards"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-center mb-10">
            Choose How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <Card className="flex flex-col items-center text-center p-8 gap-5 h-full shadow-sm hover:shadow-md transition-smooth">
                    <div
                      className={`rounded-2xl p-5 ${card.colorBg} ${card.colorText}`}
                    >
                      <Icon size={36} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-base mb-3">
                        {card.subtitle}
                      </p>
                      <p className="text-lg font-semibold text-foreground break-all">
                        {card.detail}
                      </p>
                    </div>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className={`w-full text-lg h-14 font-semibold border-2 transition-smooth ${card.btnBorder} ${card.btnColor} ${card.btnHover}`}
                        data-ocid={card.ocid}
                      >
                        {card.btnLabel}
                      </Button>
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Business Info */}
      <section
        className="bg-background py-16 px-4"
        data-ocid="contact.form_section"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-2">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              Fill in the form below and we will reply within one business day.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="e.g. Ramesh Sharma"
                  className="h-14 text-lg px-4"
                  data-ocid="contact.name_input"
                  {...register("name", {
                    required: "Please enter your name",
                    minLength: { value: 2, message: "Name is too short" },
                  })}
                />
                {errors.name && (
                  <p
                    className="text-destructive text-base"
                    data-ocid="contact.name_input.field_error"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. ramesh@company.com"
                  className="h-14 text-lg px-4"
                  data-ocid="contact.email_input"
                  {...register("email", {
                    required: "Please enter your email address",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p
                    className="text-destructive text-base"
                    data-ocid="contact.email_input.field_error"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone (optional) */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  Phone Number{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +91-9876543210"
                  className="h-14 text-lg px-4"
                  data-ocid="contact.phone_input"
                  {...register("phone")}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  Your Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you need — type of products, quantity, deadline, or any questions..."
                  className="text-lg px-4 py-3 min-h-[140px] resize-none"
                  data-ocid="contact.message_textarea"
                  {...register("message", {
                    required: "Please write your message",
                    minLength: {
                      value: 20,
                      message:
                        "Please write at least 20 characters so we can help you better",
                    },
                  })}
                />
                {errors.message && (
                  <p
                    className="text-destructive text-base"
                    data-ocid="contact.message_textarea.field_error"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg font-semibold transition-smooth"
                disabled={isSubmitting || submitContact.isPending}
                data-ocid="contact.submit_button"
              >
                {submitContact.isPending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Business Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                Our Information
              </h2>
              <div className="space-y-6">
                {businessInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex gap-4 items-start">
                      <div className="rounded-xl bg-primary/10 p-3 mt-0.5 shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-label text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="text-base text-foreground whitespace-pre-line leading-relaxed">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Embed */}
            <div
              className="rounded-2xl overflow-hidden border border-border shadow-sm"
              data-ocid="contact.map_section"
            >
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  title="CorpMerch Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823053!2d72.74109995709657!3d19.08250598495758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713100000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-muted/50 px-4 py-3 text-sm text-muted-foreground text-center">
                📍 Industrial Estate, Sector 7, Mumbai, Maharashtra
              </div>
            </div>

            {/* Quick tip */}
            <Card className="bg-primary/5 border-primary/20 p-5">
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Quick Tip:</span>{" "}
                For the fastest response, WhatsApp or call us directly. Our team
                is available Monday–Saturday, 9 AM to 7 PM.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

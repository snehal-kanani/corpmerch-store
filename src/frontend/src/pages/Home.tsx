import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "tshirts",
    icon: "👕",
    title: "T-Shirts",
    description:
      "Premium cotton tees with your logo. Soft, durable, and perfect for team uniforms or giveaways.",
    color: "bg-primary/10",
  },
  {
    id: "caps",
    icon: "🧢",
    title: "Caps",
    description:
      "Structured and unstructured caps in multiple styles. Great for outdoor events and brand visibility.",
    color: "bg-secondary/10",
  },
  {
    id: "bags",
    icon: "👜",
    title: "Bags",
    description:
      "Tote bags, backpacks, and laptop bags — all custom-branded and built to last through daily use.",
    color: "bg-primary/5",
  },
] as const;

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description:
      "Every product passes our strict quality check before it reaches you. We stand behind our work.",
  },
  {
    icon: Award,
    title: "Custom Branding",
    description:
      "Full-color printing, embroidery, and heat transfer options. Your logo, your way.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Most bulk orders delivered within 7–10 business days. Express options available on request.",
  },
  {
    icon: Package,
    title: "Bulk Orders Welcome",
    description:
      "From 50 to 50,000 pieces — we scale with your needs and offer volume discounts.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    company: "TechNova Solutions",
    role: "HR Manager",
    text: "We ordered 500 branded t-shirts for our annual conference. The quality was outstanding and delivery was on time. Our team loved them!",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    company: "GreenLeaf Consulting",
    role: "Operations Director",
    text: "Best corporate gifting partner we have worked with. The caps and bags were perfect for our client welcome kits. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    company: "Sunrise Events",
    role: "Event Coordinator",
    text: "Placed a last-minute bulk order and they delivered with 2 days to spare! Pricing was competitive and the quality spoke for itself.",
    rating: 5,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose Your Product",
    desc: "Pick from our range of T-Shirts, Caps, and Bags",
  },
  {
    number: "02",
    title: "Share Your Design",
    desc: "Upload your logo or let our team help you create one",
  },
  {
    number: "03",
    title: "Confirm & Pay",
    desc: "Review the proof, approve it, and place your order",
  },
  {
    number: "04",
    title: "Receive Your Order",
    desc: "We deliver to your doorstep anywhere in India",
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      data-ocid="home.hero_section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-corporate-merch.dim_1400x700.jpg"
          alt="Corporate merchandise showcase"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <Badge className="mb-6 text-sm font-semibold px-4 py-2 bg-primary/90 text-primary-foreground border-0">
            🎯 Trusted by 500+ Companies Across India
          </Badge>

          <h1 className="text-hero text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            CorpMerch
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 font-body font-medium mb-4 leading-relaxed drop-shadow">
            Quality Corporate Products for Your Brand
          </p>

          <p className="text-lg text-primary-foreground/75 font-body mb-10 leading-relaxed max-w-lg">
            T-Shirts, Caps, and Bags — custom-printed with your logo. Perfect
            for teams, events, and gifting. Minimum 50 pieces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" data-ocid="home.hero_cta_button">
              <Button
                size="lg"
                className="text-lg py-6 px-10 font-bold shadow-lg hover:shadow-xl transition-smooth w-full sm:w-auto"
              >
                See Our Products
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.hero_whatsapp_button"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg py-6 px-10 font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Pieces Minimum" },
              { value: "7–10", label: "Days Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="text-3xl font-bold font-display drop-shadow">
                  {stat.value}
                </div>
                <div className="text-sm font-body text-primary-foreground/70 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────

function CategorySection() {
  return (
    <section className="py-20 bg-muted/30" data-ocid="home.categories_section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-label text-primary mb-3">What We Make</p>
          <h2 className="text-section-heading text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choose from our core product lines — all fully customisable with
            your brand colours and logo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card
                className="group hover:shadow-lg transition-smooth border border-border h-full"
                data-ocid={`home.category_card.${i + 1}`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div
                    className={`w-20 h-20 rounded-2xl ${cat.color} flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-smooth`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1">
                    {cat.description}
                  </p>
                  <Link
                    to="/products"
                    data-ocid={`home.category_browse.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      className="w-full text-base py-5 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      Browse {cat.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Indicators ─────────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section className="py-20 bg-background" data-ocid="home.trust_section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-label text-primary mb-3">Why Choose Us</p>
          <h2 className="text-section-heading text-foreground mb-4">
            Built for Businesses Like Yours
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From small startups to large enterprises — we deliver quality,
            reliability, and great value every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className="text-center border border-border hover:shadow-md transition-smooth h-full"
                  data-ocid={`home.trust_card.${i + 1}`}
                >
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
  return (
    <section
      className="py-20 bg-secondary text-secondary-foreground"
      data-ocid="home.process_section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-label text-primary mb-3">Simple Process</p>
          <h2 className="text-section-heading text-secondary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-xl mx-auto">
            Getting your branded products is easy — just 4 simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
              data-ocid={`home.process_step.${i + 1}`}
            >
              {/* Connector line on desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-primary/30" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-display font-bold text-xl shadow-lg flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-secondary-foreground/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section
      className="py-20 bg-muted/30"
      data-ocid="home.testimonials_section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-label text-primary mb-3">Customer Love</p>
          <h2 className="text-section-heading text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real feedback from real companies who trust us with their brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card
                className="h-full border border-border hover:shadow-md transition-smooth"
                data-ocid={`home.testimonial_card.${i + 1}`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }, (_, s) => s + 1).map(
                      (s) => (
                        <Star
                          key={s}
                          className="w-5 h-5 text-primary fill-primary"
                        />
                      ),
                    )}
                  </div>

                  <blockquote className="text-base text-foreground leading-relaxed mb-6 flex-1 italic">
                    "{t.text}"
                  </blockquote>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary font-display flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground font-body truncate">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CtaBannerSection() {
  return (
    <section className="py-20 bg-primary" data-ocid="home.cta_banner_section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              {["PS", "RM", "AD"].map((init) => (
                <div
                  key={init}
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold text-primary-foreground"
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="ml-4 text-primary-foreground/80 font-body text-base self-center">
              Trusted by 500+ companies
            </span>
          </div>

          <h2 className="text-section-heading text-primary-foreground mb-5">
            Ready to Brand Your Team?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 font-body leading-relaxed">
            Get in touch today for a free quote. We'll help you choose the right
            products and customise them just the way you want.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-ocid="home.cta_banner_quote_button">
              <Button
                size="lg"
                className="text-lg py-6 px-10 font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.cta_banner_whatsapp_button"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg py-6 px-10 font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { icon: CheckCircle2, text: "No hidden charges" },
              { icon: Zap, text: "Fast turnaround" },
              { icon: Users, text: "Dedicated account manager" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-primary-foreground/80 text-base"
              >
                <Icon className="w-5 h-5 text-primary-foreground" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <TrustSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </Layout>
  );
}

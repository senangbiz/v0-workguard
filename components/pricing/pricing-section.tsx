"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    price: "RM299",
    period: "/month",
    description: "Perfect for small teams",
    workers: "50 workers",
    features: [
      "50 workers included",
      "1,000 AI credits/month",
      "200 WhatsApp messages/month",
      "Basic dashboard",
      "Email notifications",
      "Document uploads",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "RM999",
    period: "/month",
    description: "For growing organizations",
    workers: "300 workers",
    features: [
      "300 workers included",
      "10,000 AI credits/month",
      "2,000 WhatsApp messages/month",
      "Advanced dashboard",
      "Email & WhatsApp alerts",
      "AI Document OCR",
      "Compliance scoring",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "RM3,000",
    period: "/month",
    description: "For large enterprises",
    workers: "1,500 workers",
    features: [
      "1,500 workers included",
      "50,000 AI credits/month",
      "10,000 WhatsApp messages/month",
      "Full-featured dashboard",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl transition-all duration-300 ${
        plan.highlighted
          ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 lg:scale-105"
          : "bg-card border border-border hover:border-border/80"
      }`}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary rounded-full border border-primary-foreground/20">
          <span className="text-xs font-semibold">MOST POPULAR</span>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <span className="text-5xl font-bold">{plan.price}</span>
          <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {plan.period}
          </span>
        </div>

        {/* Workers badge */}
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-8 ${
          plan.highlighted
            ? "bg-primary-foreground/20 text-primary-foreground"
            : "bg-muted text-muted-foreground"
        }`}>
          {plan.workers}
        </div>

        {/* CTA Button */}
        <Button
          className={`w-full mb-8 font-semibold ${
            plan.highlighted
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
          size="lg"
        >
          {plan.cta}
        </Button>

        {/* Features list */}
        <div className="space-y-4">
          <p className={`text-xs font-semibold mb-4 uppercase tracking-wide ${
            plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}>
            What's included
          </p>
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                plan.highlighted ? "text-primary-foreground" : "text-primary"
              }`} />
              <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that works for your organization. Scale as you grow with flexible pricing and additional credits.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need more workers or custom features?
          </p>
          <Button variant="outline" size="lg" className="bg-background">
            Contact Our Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

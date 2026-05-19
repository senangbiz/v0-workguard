'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for small teams managing a growing workforce',
      maxWorkers: 50,
      features: [
        { name: 'Up to 50 workers', included: true },
        { name: '1,000 AI document credits/month', included: true },
        { name: '200 WhatsApp messages/month', included: true },
        { name: 'Basic compliance dashboard', included: true },
        { name: 'Email support', included: true },
        { name: 'API access', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Advanced analytics', included: false },
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Growth',
      price: 999,
      description: 'Recommended for growing businesses with multiple departments',
      badge: 'Most Popular',
      maxWorkers: 300,
      features: [
        { name: 'Up to 300 workers', included: true },
        { name: '10,000 AI document credits/month', included: true },
        { name: '2,000 WhatsApp messages/month', included: true },
        { name: 'Advanced compliance dashboard', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced analytics & reports', included: true },
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      price: 3000,
      description: 'Complete solution for large enterprises with advanced needs',
      maxWorkers: 1500,
      features: [
        { name: 'Up to 1,500 workers', included: true },
        { name: '50,000 AI document credits/month', included: true },
        { name: '10,000 WhatsApp messages/month', included: true },
        { name: 'Custom compliance workflows', included: true },
        { name: '24/7 phone & email support', included: true },
        { name: 'Custom API development', included: true },
        { name: 'Multi-department setup', included: true },
        { name: 'Custom analytics & reporting', included: true },
      ],
      cta: 'Talk to Sales',
    },
  ]

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and bank transfers for Enterprise plans.',
    },
    {
      question: 'Is there a setup fee or contract requirement?',
      answer: 'No, there are no setup fees or long-term contracts. You can cancel anytime, and billing is on a monthly basis.',
    },
    {
      question: 'What if I need more than 1,500 workers?',
      answer: 'Contact our sales team for custom Enterprise Plus plans with unlimited workers and tailored pricing.',
    },
    {
      question: 'Do you offer annual billing discounts?',
      answer: 'Yes! Annual billing comes with a 20% discount on monthly plan rates. Contact us for custom annual pricing.',
    },
    {
      question: 'What is included in each AI document credit?',
      answer: 'One credit = processing one document with OCR (passport, insurance, permit, etc.). Credits reset monthly and do not carry over.',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Transparent Pricing
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              No hidden fees. Choose the plan that works for your business and scale as you grow.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <span>All prices in MYR (Malaysian Ringgit)</span>
              <span className="text-2xl">•</span>
              <span>Billed monthly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.badge
                    ? 'bg-primary text-primary-foreground border-primary shadow-2xl scale-105'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground border border-primary-foreground/20">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.badge ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.badge ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                    {plan.description}
                  </p>

                  <div className="my-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">RM{plan.price.toLocaleString()}</span>
                      <span className={plan.badge ? 'text-primary-foreground/80' : 'text-muted-foreground'}>/month</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mb-8"
                    variant={plan.badge ? 'secondary' : 'default'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className={`border-t ${plan.badge ? 'border-primary-foreground/20' : 'border-border'} pt-8`}>
                    <p className={`text-sm font-semibold mb-4 ${plan.badge ? 'text-primary-foreground' : 'text-foreground'}`}>
                      Includes:
                    </p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            feature.included 
                              ? plan.badge ? 'text-primary-foreground' : 'text-primary'
                              : 'text-muted-foreground opacity-30'
                          }`} />
                          <span className={feature.included ? (plan.badge ? 'text-primary-foreground' : 'text-foreground') : 'text-muted-foreground opacity-50'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Plan Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly what you get with each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-foreground">Starter</th>
                  <th className="text-center py-4 px-6 font-bold text-primary">Growth</th>
                  <th className="text-center py-4 px-6 font-bold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-semibold text-foreground">Max Workers</td>
                  <td className="text-center py-4 px-6 text-foreground">50</td>
                  <td className="text-center py-4 px-6 text-foreground font-bold">300</td>
                  <td className="text-center py-4 px-6 text-foreground">1,500+</td>
                </tr>
                <tr className="border-b border-border bg-muted/50">
                  <td className="py-4 px-6 font-semibold text-foreground">AI Credits/month</td>
                  <td className="text-center py-4 px-6 text-foreground">1,000</td>
                  <td className="text-center py-4 px-6 text-foreground font-bold">10,000</td>
                  <td className="text-center py-4 px-6 text-foreground">50,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-semibold text-foreground">WhatsApp Msgs/month</td>
                  <td className="text-center py-4 px-6 text-foreground">200</td>
                  <td className="text-center py-4 px-6 text-foreground font-bold">2,000</td>
                  <td className="text-center py-4 px-6 text-foreground">10,000</td>
                </tr>
                <tr className="border-b border-border bg-muted/50">
                  <td className="py-4 px-6 font-semibold text-foreground">Support</td>
                  <td className="text-center py-4 px-6 text-foreground">Email</td>
                  <td className="text-center py-4 px-6 text-foreground font-bold">Priority</td>
                  <td className="text-center py-4 px-6 text-foreground">24/7 Phone</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-foreground">API Access</td>
                  <td className="text-center py-4 px-6"><span className="text-muted-foreground">—</span></td>
                  <td className="text-center py-4 px-6 font-bold"><Check className="w-5 h-5 text-primary inline" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-primary inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-muted/30 rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center"
          >
            <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Have more questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch anytime.
            </p>
            <Button variant="outline">Contact Sales</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

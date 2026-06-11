'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Zap, Shield, BarChart3, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

export default function ProductPage() {
  const features = [
    {
      icon: Shield,
      title: 'Document Management',
      description: 'Centralized repository for all worker documents including passports, permits, insurance certificates, and employment contracts with version control.',
    },
    {
      icon: Zap,
      title: 'Automated Alerts',
      description: 'Real-time notifications via email and WhatsApp for permit expiries, document updates, and compliance issues before they become critical.',
    },
    {
      icon: BarChart3,
      title: 'Compliance Dashboard',
      description: 'Visual overview of your workforce compliance status with risk indicators, expiry timelines, and actionable insights at a glance.',
    },
    {
      icon: Users,
      title: 'Worker Profiles',
      description: 'Complete worker information management with biodata, passport details, PLKS records, emergency contacts, and employment history.',
    },
  ]

  const coreCapabilities = [
    {
      title: 'AI-Powered OCR',
      items: [
        'MRZ (Machine Readable Zone) recognition for passports',
        'Automatic data extraction from travel documents',
        '3-second processing per document',
        'Support for multiple document types',
      ],
    },
    {
      title: 'WhatsApp Integration',
      items: [
        'Send expiry reminders directly to WhatsApp',
        'Two-way messaging for compliance updates',
        'Bulk messaging capabilities',
        'Message scheduling and templates',
      ],
    },
    {
      title: 'Access Control',
      items: [
        'Role-based permission system',
        'Admin, Manager, and HR roles',
        'Activity logging and audit trails',
        'Secure session management',
      ],
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
              Our Product
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete Workforce Compliance Platform
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Everything you need to manage foreign worker permits, documents, and compliance requirements in one integrated platform. From OCR processing to WhatsApp notifications, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for Malaysian employers managing foreign workforce compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 border border-border"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Core Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/50 rounded-xl p-8 border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-primary-foreground rounded-3xl mx-6 lg:mx-12 mb-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Simplify Compliance?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join 500+ employers who are already managing their workforce compliance with WorkGuard.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

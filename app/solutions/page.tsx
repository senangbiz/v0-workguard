'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Factory, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: 'For Manufacturing',
      description: 'Manage large foreign worker populations in manufacturing facilities with automated compliance tracking and permit monitoring.',
      benefits: [
        'Handle 500+ workers per facility',
        'Batch document processing',
        'Department-level access controls',
        'Real-time compliance dashboards for supervisors',
      ],
    },
    {
      icon: Factory,
      title: 'For Construction',
      description: 'Track mobile workforces across multiple project sites with centralized compliance management and site-based reporting.',
      benefits: [
        'Project-based worker assignments',
        'Site-level compliance reports',
        'Equipment and location tracking',
        'Multi-site permit management',
      ],
    },
    {
      icon: Users,
      title: 'For Hospitality',
      description: 'Streamline worker management for hotels, restaurants, and service establishments with quick onboarding and compliance automation.',
      benefits: [
        'Rapid staff onboarding',
        'Seasonal worker management',
        'Department-specific workflows',
        'Guest-facing compliance verification',
      ],
    },
    {
      icon: TrendingUp,
      title: 'For Enterprises',
      description: 'Multi-department, multi-location enterprise solutions with advanced reporting, custom integrations, and dedicated support.',
      benefits: [
        'Custom API integrations',
        'Advanced reporting and analytics',
        'Dedicated account management',
        'SSO and advanced security',
      ],
    },
  ]

  const useCases = [
    {
      title: 'Permit Expiry Management',
      description: 'Automatic monitoring of work permits (PLKS) with 30-day, 7-day, and expiry-date alerts via email and WhatsApp.',
    },
    {
      title: 'Document Verification',
      description: 'AI-powered OCR processing of passports, ePass, insurance certificates, and employment documents with automatic data extraction.',
    },
    {
      title: 'Compliance Reporting',
      description: 'Generate regulatory reports for government agencies, labor departments, and internal audits with complete audit trails.',
    },
    {
      title: 'HR Integration',
      description: 'Seamlessly integrate with your existing HR systems via API for automated data synchronization and workflow automation.',
    },
    {
      title: 'WhatsApp Notifications',
      description: 'Proactive worker notifications about document requirements and renewals through WhatsApp for better compliance rates.',
    },
    {
      title: 'Multi-Language Support',
      description: 'Support for Malay, English, Chinese, and other languages to communicate with your diverse foreign workforce.',
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
              Solutions
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Solutions for Every Industry
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              WorkGuard adapts to your business needs. Whether you're in manufacturing, construction, hospitality, or enterprise services, we have a solution tailored for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 border border-border"
              >
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full justify-center">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Common Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How WorkGuard solves real compliance challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-muted/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
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
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's discuss which solution best fits your organization's needs and compliance requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

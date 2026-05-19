'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Book, Code2, Users, Shield, Zap, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

export default function DocsPage() {
  const docCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics and get your workspace set up in minutes',
      topics: [
        'Create an account',
        'Add your first worker',
        'Upload documents',
        'Configure WhatsApp notifications',
      ],
      color: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Worker Management',
      description: 'Manage worker profiles, documents, and compliance status',
      topics: [
        'Create worker profiles',
        'Upload and verify documents',
        'Track permit status',
        'Manage worker assignments',
      ],
      color: 'text-green-500',
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Understand compliance requirements and security features',
      topics: [
        'Permit requirements in Malaysia',
        'Document verification process',
        'Data security and encryption',
        'Role-based access control',
      ],
      color: 'text-purple-500',
    },
    {
      icon: Zap,
      title: 'Advanced Features',
      description: 'Leverage advanced capabilities for power users',
      topics: [
        'Batch document uploads',
        'Automated alerts and reminders',
        'Custom compliance workflows',
        'Advanced reporting',
      ],
      color: 'text-orange-500',
    },
    {
      icon: Code2,
      title: 'API Reference',
      description: 'Integrate WorkGuard with your existing systems',
      topics: [
        'API authentication',
        'Worker management endpoints',
        'Document processing API',
        'Webhook integration',
      ],
      color: 'text-red-500',
    },
    {
      icon: HelpCircle,
      title: 'Troubleshooting',
      description: 'Find solutions to common issues',
      topics: [
        'Document upload issues',
        'WhatsApp integration',
        'Permission errors',
        'Contact support',
      ],
      color: 'text-indigo-500',
    },
  ]

  const quickLinks = [
    { title: 'API Documentation', description: 'Complete API reference for developers', href: '#' },
    { title: 'Video Tutorials', description: 'Step-by-step video guides for all features', href: '#' },
    { title: 'Best Practices', description: 'Tips and tricks for optimal compliance management', href: '#' },
    { title: 'FAQ', description: 'Answers to frequently asked questions', href: '#' },
    { title: 'Status Page', description: 'Check platform status and uptime', href: '#' },
    { title: 'Release Notes', description: 'Latest features and improvements', href: '#' },
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
              Documentation
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Complete Documentation & Guides
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Everything you need to know about WorkGuard. From getting started to advanced integrations, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Browse Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Search Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Documentation Hub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive guides organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <category.icon className={`w-12 h-12 ${category.color} mb-4 group-hover:scale-110 transition-transform`} />
                
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-1">→</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                  Explore
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quick Links
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Frequently accessed resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-muted/30 border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with our API in minutes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl border border-border p-8 mb-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Create a Worker</h3>
            <div className="bg-muted rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-muted-foreground font-mono">
                {`curl -X POST https://api.workguard.my/v1/workers \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Ahmad Bin Hassan",
    "passport": "A12345678",
    "department": "Manufacturing",
    "position": "Operator",
    "email": "ahmad@example.com"
  }'`}
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl border border-border p-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Process Document with OCR</h3>
            <div className="bg-muted rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-muted-foreground font-mono">
                {`curl -X POST https://api.workguard.my/v1/documents/ocr \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@passport.jpg" \\
  -F "document_type=passport"

# Response:
{
  "success": true,
  "data": {
    "name": "Ahmad Bin Hassan",
    "passport_number": "A12345678",
    "date_of_birth": "1990-05-15",
    "expiry_date": "2028-03-22"
  }
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl bg-primary text-primary-foreground rounded-3xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Need Additional Help?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Our support team is available to help with any questions or issues you encounter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Chat with Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

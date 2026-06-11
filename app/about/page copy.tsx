'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                About WorkGuard
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming workforce compliance management for employers and migrant workers across Malaysia and Southeast Asia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 lg:px-12 border-b">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At WorkGuard, we believe workforce compliance should be simple, transparent, and fair for everyone. Our mission is to revolutionize how employers manage foreign worker compliance by providing AI-powered solutions that ensure permits are tracked, documents are verified, and regulations are met—without the complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to protecting the rights and dignity of migrant workers while helping employers operate with confidence and integrity across construction, agriculture, manufacturing, hospitality, and domestic care sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 lg:px-12 border-b">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We operate with transparency and honesty, ensuring all parties—employers and workers—understand and trust our platform.'
                },
                {
                  title: 'Innovation',
                  description: 'We leverage cutting-edge AI and technology to solve real compliance challenges and make process simpler every day.'
                },
                {
                  title: 'Fairness',
                  description: 'We believe in equal treatment and respect for all workers, ensuring compliance protects both employer and employee interests.'
                },
                {
                  title: 'Reliability',
                  description: 'Our platform is built on enterprise-grade security and uptime guarantees to keep your workforce data safe and accessible.'
                },
                {
                  title: 'Impact',
                  description: 'We measure success by the positive changes we create in how migrant workers are managed and treated across sectors.'
                },
                {
                  title: 'Collaboration',
                  description: 'We partner with employers, government bodies, and worker advocacy groups to create meaningful compliance solutions.'
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-muted/50 border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 lg:px-12 border-b">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                WorkGuard was born from a simple observation: Malaysia's employers face complex, time-consuming compliance requirements for managing foreign workers, yet the tools available are outdated and fragmented. Meanwhile, migrant workers struggle with unclear documentation and uncertain compliance status.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our founding team spent years in workforce management and saw firsthand the pain points—expired permits going unnoticed, documents scattered across systems, manual processes consuming hours of admin work, and workers left uncertain about their status.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We decided to build WorkGuard: a platform that combines AI-powered document recognition, real-time permit tracking, and WhatsApp-based notifications to make compliance automatic, transparent, and human-centered. Today, we're proud to serve over 500 employers managing thousands of workers across Malaysia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Join Us?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Start automating your workforce compliance today. Experience how WorkGuard makes compliance simple, fair, and transparent.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

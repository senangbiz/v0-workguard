'use client'

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { FeatureSection } from "@/components/features/feature-section"
import { PricingSection } from "@/components/pricing/pricing-section"
import { TestimonialsSection } from "@/components/testimonials/testimonials-section"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { LandingVideoExperience } from "@/components/landing-video-experience"

export default function Home() {
  const [isVideoExperienceActive, setIsVideoExperienceActive] = useState(false)

  return (
    <main className="relative">
      <LandingVideoExperience onActiveChange={setIsVideoExperienceActive} />
      <Navbar isDisabled={isVideoExperienceActive} />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

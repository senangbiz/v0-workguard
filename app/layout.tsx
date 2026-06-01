import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans'
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'WorkGuard | AI-Powered Workforce Compliance Platform',
  description: 'Automate compliance management for foreign workers. WorkGuard streamlines permit tracking, document verification, and regulatory compliance for employers in Malaysia. Trusted by 500+ employers.',
  generator: 'v0.app',
  keywords: ['workforce compliance', 'foreign workers', 'permit tracking', 'compliance management', 'domestic helpers', 'migrant workers'],
  openGraph: {
    title: 'WorkGuard | AI-Powered Workforce Compliance Platform',
    description: 'Automate compliance management for foreign workers in Malaysia. Track permits, documents, and compliance effortlessly.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkGuard | AI-Powered Workforce Compliance Platform',
    description: 'Automate compliance management for foreign workers in Malaysia.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

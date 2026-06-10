'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoModal } from '@/components/video-modal'

interface LandingVideoExperienceProps {
  onActiveChange?: (isActive: boolean) => void
}

export function LandingVideoExperience({ onActiveChange }: LandingVideoExperienceProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    // Show video after a brief delay to let page load
    const videoTimer = setTimeout(() => {
      setIsVideoOpen(true)
      onActiveChange?.(true)
    }, 500)
    
    return () => clearTimeout(videoTimer)
  }, [onActiveChange])

  const handleVideoClose = () => {
    setIsVideoOpen(false)
    // Show coming soon screen immediately
    setShowComingSoon(true)
  }



  return (
    <>
      {/* Auto-play video modal */}
      {isVideoOpen && (
        <VideoModal
          videoUrl="https://youtu.be/oeGP533hc0w"
          isOpen={isVideoOpen}
          onClose={handleVideoClose}
        />
      )}

      {/* Coming Soon screen */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative text-center"
            >
              {/* Text content */}
              <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
                Something Interesting<br />is Coming Soon
              </h2>
              
              <p className="mt-6 text-lg text-gray-300">
                Stay tuned for exciting updates
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

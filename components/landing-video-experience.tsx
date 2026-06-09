'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { VideoModal } from '@/components/video-modal'

export function LandingVideoExperience() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen the video on this session
    const hasSeenVideo = sessionStorage.getItem('hasSeenLandingVideo')
    
    if (!hasSeenVideo) {
      // Show video after a brief delay to let page load
      const videoTimer = setTimeout(() => {
        setIsVideoOpen(true)
        setHasShown(true)
      }, 500)

      // Auto-close video and show coming soon after 10 seconds
      const comingSoonTimer = setTimeout(() => {
        setIsVideoOpen(false)
        sessionStorage.setItem('hasSeenLandingVideo', 'true')
        setShowComingSoon(true)
      }, 10500)
      
      return () => {
        clearTimeout(videoTimer)
        clearTimeout(comingSoonTimer)
      }
    }
  }, [])

  const handleVideoClose = () => {
    setIsVideoOpen(false)
    // Mark that user has seen the video
    sessionStorage.setItem('hasSeenLandingVideo', 'true')
    // Show coming soon screen immediately
    setShowComingSoon(true)
  }

  const handleComingSoonClose = () => {
    setShowComingSoon(false)
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleComingSoonClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleComingSoonClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

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

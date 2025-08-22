import React, { useRef } from 'react'
import * as motion from 'motion/react-client'
import { useInView } from 'motion/react'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Split text into words for animation
  const heading = "co creating intentionally for long term change.".split(' ')
  const subheading = "From insight to action, we help you shift what's stuck, strengthen what matters, and design systems that last.".split(' ')

  return (
     <div ref={ref} className='relative overflow-hidden min-h-[610px]'>
      <div className="px-8 lg:container lg:px-2 mx-auto mt-[140px] py-10 md:py-18">
        <motion.h1 
          className="font-poppins font-bold text-3xl sm:text-4xl lg:text-7xl uppercase text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {heading.map((word, i) => {
            // Apply different colors to specific words
            let className = 'inline-block mr-2'
            if (word === 'intentionally') className += ' text-[#008080]'
            if (word === 'long' || word === 'term') className += ' text-[#BC2637]'
            
            return (
              <motion.span 
                key={i} 
                className={className}
                variants={item}
              >
                {word}
              </motion.span>
            )
          })}
        </motion.h1>
        
        <motion.p 
          className="lg:text-xl font-poppins font-normal text-center text-[#BC2637] mt-2 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        >
          {subheading.map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-1"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 1.2 + (i * 0.03),
                type: 'spring',
                stiffness: 300,
                damping: 12
              }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Animated marquee strip */}
      <motion.div 
        className="relative mt-8 -rotate-[3.5deg] overflow-hidden bg-[#68A7F4] py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <div className="marquee-container">
          <motion.div 
            className="marquee-content"
            initial={{ x: '0%' }}
            animate={{ 
              x: ['0%', '-100%'],
              transition: {
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }
            }}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-block whitespace-nowrap mx-4">
                ~ because life's too short for boring designs
              </span>
            ))}
          </motion.div>
        </div>
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
          }
          .marquee-content {
            display: inline-flex;
            white-space: nowrap;
          }
        `}</style>
      </motion.div>
    </div>
  )
}

export default HeroSection

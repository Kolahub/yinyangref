import { useState } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';

const AboutUsSection = () => {
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:max-w-[500px] space-y-4 md:space-y-6">
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl text-teal-600 mb-4 md:mb-8">
              About us:
            </h1>
            <div className="space-y-3 text-gray-700 leading-relaxed text-base">
              <p>
                Our founder, Tanisha, spent over a decade partnering with
                leaders, teams, and organisations driven by big ambitions, rapid
                growth, and impressive results. However, an invisible thread ran
                through every success story and every setback: Culture is an
                intangible asset but its impact is anything but invisible.
              </p>
              <p>
                This became the seed of YinYang Leadership. Inspired by the
                ancient philosophy that seemingly opposite forces can exist in
                harmony, we help organisations hold space for both vulnerability
                and strength, stability and evolution, introspection and bold
                action.
              </p>
              <p>
                Today, we stand alongside leaders and teams who believe that
                culture should be their greatest advantage and not their biggest
                blind spot. Through a thoughtfully designed culture compass,
                YinYang weaves together evidence based tools and facilitation
                that brings real conversations to life.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative w-full max-w-[600px] h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0 mx-auto lg:mx-0">
            <AnimatePresence mode="popLayout" initial={false}>
              {images.map((image, index) => {
                const positionInStack = (index - currentImageIndex + images.length) % images.length;
                const totalVisible = 3;
                
                if (positionInStack >= totalVisible) return null;

                const stackOffsets = [
                  { x: 0, y: 0, rotate: -5, scale: 1, zIndex: 30, opacity: 1 },
                  { x: 8, y: 8, rotate: 6, scale: 0.97, zIndex: 20, opacity: 0.9 },
                  { x: 16, y: 16, rotate: -4, scale: 0.94, zIndex: 10, opacity: 0.8 },
                ];

                const { x, y, rotate, scale, zIndex, opacity } = stackOffsets[positionInStack] || stackOffsets[stackOffsets.length - 1];
                const isActive = positionInStack === 0;
                const isExiting = positionInStack === totalVisible - 1;

                return (
                  <motion.div
                    key={`${image}-${currentImageIndex}`}
                    className="absolute inset-0 cursor-pointer w-full h-full"
                    initial={{ 
                      x: `${x}px`,
                      y: `${y}px`,
                      rotate: isActive ? 5 : rotate,
                      scale: isActive ? 0.95 : scale,
                      opacity: 0,
                      zIndex: zIndex
                    }}
                    animate={{
                      x: `${x}px`,
                      y: `${y}px`,
                      rotate: rotate,
                      scale: scale,
                      zIndex: zIndex,
                      opacity: isExiting ? 0 : opacity,
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8,
                        delay: isExiting ? 0 : positionInStack * 0.05,
                        opacity: {
                          duration: 0.4,
                          ease: 'easeInOut'
                        }
                      },
                    }}
                    exit={{
                      x: `${x}px`,
                      y: `${y}px`,
                      rotate: isActive ? -5 : rotate,
                      scale: isActive ? 1.05 : scale * 0.95,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut'
                      }
                    }}
                    whileHover={isActive ? {
                      scale: 1.02,
                      transition: { 
                        duration: 0.2,
                        type: 'tween',
                        ease: 'easeOut'
                      }
                    } : {}}
                    onClick={() => {
                      if (isActive) {
                        setCurrentImageIndex((prev) => 
                          prev === images.length - 1 ? 0 : prev + 1
                        );
                      }
                    }}
                  >
                    <motion.div 
                      className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
                      style={{
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        width: '100%',
                        height: '100%'
                      }}
                      initial={false}
                      animate={{
                        boxShadow: isActive 
                          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={image}
                        alt={`YinYang Leadership moment ${index + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.9 }}
                        transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

import * as motion from 'motion/react-client';
import { useAnimation, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const ProgressCircle = ({ percentage, label, delay = 0 }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation configuration for the progress circle
  useEffect(() => {
    if (isInView) {
      controls.start({
        strokeDashoffset: 2 * Math.PI * 60 * (1 - percentage / 100),
        transition: {
          type: 'spring',
          damping: 20,
          stiffness: 100,
          mass: 0.5,
        }
      });
    }
  }, [isInView, percentage, controls]);

  // Animate when in view
  useEffect(() => {
    if (!isInView) return;

    const animationDuration = 2000; // 2 seconds
    const startTime = performance.now();
    let animationFrame;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime - delay;
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Calculate eased progress using the same easing function as Framer Motion
      const easedProgress = easeOut(progress);
      
      // Update both animations using the same progress value
      const currentCount = Math.floor(easedProgress * percentage);
      const currentOffset = 2 * Math.PI * 60 * (1 - easedProgress * (percentage / 100));
      
      setCount(currentCount);
      controls.start({
        strokeDashoffset: currentOffset,
      }, { duration: 0 }); // Set duration to 0 to update immediately
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    // Start the animation
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, percentage, delay, controls]);
  
  // Easing function matching Framer Motion's easeOut
  const easeOut = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Circle properties
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="flex flex-col items-center space-y-2 sm:space-y-3 w-full">
      <motion.div 
        className="relative w-24 h-24 sm:w-32 sm:h-32"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          transition: { 
            delay: delay / 1000,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }
        } : {}}
      >
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 140 140"
        >
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="none"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#000000"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: 2 * Math.PI * radius }}
            animate={controls}
            transition={{ duration: 0 }}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-gray-800">{count}%</span>
        </div>
      </motion.div>
      
      {/* Label outside the circle */}
      <span className="font-inter uppercase text-xs md:text-sm text-gray-900 text-center px-2 font-medium">
        {label}
      </span>
    </div>
  );
};

const ProgressCirclesSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const data = [
    { percentage: 95, label: 'Client Satisfaction' },
    { percentage: 85, label: 'Project Success' },
    { percentage: 90, label: 'Team Growth' },
    { percentage: 88, label: 'ROI' }
  ];

  return (
    <div className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-teal-600 mb-4">
            Our Impact
          </h2>
        </div>

        {/* Progress Circles Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
        >
          {data.map((item, index) => (
            <ProgressCircle
              key={index}
              percentage={item.percentage}
              label={item.label}
              delay={index * 0.1}
              size={isMobile ? 100 : 120}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProgressCircle };
export default ProgressCirclesSection;
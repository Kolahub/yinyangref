import React, { useState, useRef } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence, useInView } from 'motion/react';

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState('in-necessitate');

  const accordionItems = [
    {
      id: 'in-necessitate',
      title: 'in necessitate',
      content: 'Cum privata assecuratione medica, es haesus per annum. Non potes addere autremovere tegmen. Punica est variabilis subscriptio et potes addere aut removere servitia quandocumque vis.'
    },
    {
      id: 'sapiens-praedictiva',
      title: 'Sapiens praedictiva sanitas',
      content: 'Content for Sapiens praedictiva sanitas would go here.'
    },
    {
      id: 'compara-tecum',
      title: 'Compara tecum cum hominibus tibi similibus',
      content: 'Content for Compara tecum cum hominibus tibi similibus would go here.'
    },
    {
      id: 'praeventio-prima',
      title: 'Praeventio prima',
      content: 'Content for Praeventio prima would go here.'
    }
  ];

  const toggleAccordion = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animationItem = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, delay: 0.1 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <div ref={containerRef} className="bg-white lg:py-16 py-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-medium text-teal-600 mb-3">
            Lorem-lorem sapiens sanitas
          </h1>
          <motion.p 
            className="text-gray-700 mx-auto leading-relaxed w-full max-w-[500px]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Five strata of leniter integrata sapiens sanitas that curat de te omni tempore, non solum cum iam scis te aegrotum esse.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 items-start"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Left Column - Accordion */}
          <motion.div className="space-y-4">
            {accordionItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-amber-50 border-2 border-amber-900 rounded-2xl overflow-hidden"
                variants={animationItem}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                custom={index}
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-100 transition-colors duration-200"
                >
                  <motion.span 
                    className="text-amber-900 text-lg font-medium"
                    layout
                  >
                    {item.title}
                  </motion.span>
                  <motion.span 
                    className="text-amber-900 text-2xl font-light ml-4 flex-shrink-0"
                    animate={{ rotate: expandedItem === item.id ? 0 : 45 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {expandedItem === item.id ? '−' : '+'}
                  </motion.span>
                </motion.button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 bg-white">
                        <div className="border-t border-amber-200 pt-4">
                          <p className="text-amber-900 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div 
            className="flex justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <motion.div 
              className="h-[360px] w-full max-w-[500px] border-2 border-b-10 border-e-yellow-700 rounded-2xl overflow-hidden"
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <motion.img 
                src="/faq-img.png" 
                alt="FAQ illustration" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
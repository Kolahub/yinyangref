import React from 'react'
import { services } from '../utils/servicesDD'

function Services() {
  return (
    <div className='py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className="flex justify-end mb-12 sm:mb-16 lg:mb-28">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-teal-600 uppercase">
          my services
        </h1>
      </div>

      <div className="space-y-8 sm:space-y-12 lg:space-y-20">
        {services.map((service, i) => (
          <div 
            key={i} 
            className={`${service.bgColor} p-6 sm:p-8 md:p-12 lg:p-16 font-inter text-white 
              flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8 md:gap-12
              transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
              sm:-rotate-5 rotate-0`}
          >
            <div className="flex-shrink-0 flex items-start sm:items-center">
              <p className="text-4xl sm:text-5xl font-bold">0{i + 1}</p>
            </div>
            
            <div className="flex-grow text-center sm:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto sm:mx-0">
                {service.description}
              </p>
            </div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
              <img 
                src={service.iconURL} 
                alt={service.title} 
                className='w-full h-full object-contain' 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
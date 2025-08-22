import React from 'react';

const ClientTestimonials = () => {
  const testimonialCards = [
    {
      name: "Las Sabir",
      title: "Founder, Bookt",
      image: "/clients/img1.jpg", 
    },
    {
      name: "Sébastien Béal", 
      title: "Founder, BoutiqueDX",
      image: "/clients/img2.jpg",
    },
    {
      name: "Sébastien Béal",
      title: "Founder, BoutiqueDX", 
      image: "/clients/img2.jpg",
    }
  ];

  return (
    <div className="bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-tight max-w-3xl">
            We empower our clients to scale today while building for the future.
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-12">
            {/* Small Testimonial Cards */}
            <div className="relative w-full">
              <div className="relative
                before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-4 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10
                after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-4 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10
              ">
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
                  {testimonialCards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-64 sm:w-72 md:w-80 first:pl-4 sm:first:pl-0 last:pr-4 sm:last:pr-0">
                      <div className="relative group cursor-pointer">
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
                          <img 
                            src={card.image} 
                            alt={`${card.name}, ${card.title}`} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          />
                        </div>
                        
                        {/* Card Info */}
                        <div className="mt-3 sm:mt-4">
                          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{card.name}</h3>
                          <p className="text-sm sm:text-base text-gray-600">{card.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Happy Clients Metric */}
            <div className="space-y-2 sm:space-y-3 lg:mt-50">
              <div className="inline-block font-poppins bg-teal-500 text-gray-800 px-4 py-2 rounded-2xl text-2xl sm:text-3xl">
                90+
              </div>
              <div className="font-poppins text-gray-600 text-lg sm:text-xl">Happy clients</div>
            </div>
          </div>

          {/* Right Column - CEO Testimonial */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              {/* Video Section */}
              <div className="p-2 sm:p-3">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img 
                    src="/clients/img3.jpg" 
                    alt="Client testimonial video" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    They understood our business, responded quickly, and their customized SaaS designs have been invaluable.
                  </blockquote>
                  
                  <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Working with them has been great, and I commend their dedication and expertise.
                  </blockquote>
                </div>

                {/* Client Info */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Marco Logo */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
                      <img 
                        src="/clients/logo-ceo.png" 
                        alt="Marco Payroll logo" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className='font-poppins'>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Tao Lei</h4>
                      <p className="text-gray-600 text-sm sm:text-base">CEO, Marco Payroll</p>
                    </div>
                  </div>

                  {/* Discover Link */}
                  <div className="sm:text-right">
                    <a 
                      href="#" 
                      className="inline-block text-sm sm:text-base text-gray-600 font-medium hover:text-gray-700 underline underline-offset-4 transition-colors"
                    >
                      Discover Marco
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
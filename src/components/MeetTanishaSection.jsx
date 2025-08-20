import React, { useState, useEffect, useRef } from 'react';

const MeetTanishaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="relative bg-cover bg-center bg-fixed min-h-screen flex items-center py-16"
        style={{
          backgroundImage: "url('/woman2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Section */}
            <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[3/4] w-full bg-black overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/woman1.jpg"
                    alt="Tanisha M Jain"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face";
                    }}
                  />
                </div>
              </div>
            </div>

          {/* Content Section */}
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                Meet Tanisha M Jain
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm font-medium text-gray-600 tracking-wider sm:tracking-widest uppercase">
                <span>FOUNDER</span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">LEADERSHIP COACH</span>
                <span className="sm:hidden">COACH</span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">CULTURE FACILITATOR</span>
                <span className="sm:hidden">FACILITATOR</span>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-3 sm:space-4 leading-relaxed text-sm sm:text-base">
              <p>
                Tanisha M Jain has always been drawn to what sits beneath the surface—what 
                drives us, connects us, and helps us thrive not just as individuals, but as teams and 
                systems. That curiosity has taken her across strikingly different rooms: from 
                coaching military leaders in the U.S. Army to guiding the culture strategy of the 
                world's first LGBTQ credit union. From the boardrooms of Fortune 50 companies like 
                Nike and Amazon to grassroots spaces redefining what leadership can look like.
              </p>
              
              <p>
                Through it all, one insight kept returning: when we focus only on performance, results 
                may follow—but they rarely sustain. The real transformation happens when 
                organizations stop trimming the branches and start tending to the roots. This 
                became the seed of YinYang Leadership—a practice rooted in the belief that culture 
                is not soft, nor secondary. It is the invisible force that determines whether people 
                grow or burn out, whether strategy lands or floats.
              </p>
              
              <p>
                Tanisha is an ICF-certified coach and Columbia University graduate who blends 
                over a decade of experience in leadership development with a lifelong exploration 
                of Eastern wisdom and Western science. She integrates systems thinking, somatic 
                practices, and deep dialogue to create spaces where both people and 
                performance can evolve—together.
              </p>
              
              <p>
                She founded YinYang Leadership not as a consultancy, but as a collaborative 
                movement. One that brings together best-in-class subject matter experts in 
                coaching, talent management, systems change, and organizational design—so that 
                clients have a single, trusted space for all their people and culture needs, without 
                one-size-fits-all solutions.
              </p>
              
              <p>
                At the core of her work is a bold yet simple belief: when organizations lead from who 
                they truly are—not just what they do—they unlock a kind of edge that no strategy 
                slide can replicate. Culture becomes their differentiator. Their compass. And their 
                most human advantage.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 sm:pt-8">
              <button className="w-full sm:w-auto group relative bg-transparent border-2 border-gray-800 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 overflow-hidden">
                <span className="relative z-10">LET'S CONNECT WITH TANISHA</span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MeetTanishaSection;
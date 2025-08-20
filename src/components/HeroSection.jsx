import React from 'react'
// import './marquee.css' // we’ll define keyframes here

function HeroSection() {
  return (
    <div className=''>
      <div className="px-8 lg:container lg:px-2 mx-auto mt-[140px] py-10 md:py-18">
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-7xl uppercase text-center">
          co creating <span className="text-[#008080]">intentionally</span> for <span className="text-[#BC2637]">long term </span> change.
        </h1>
        <p className="lg:text-xl font-poppins font-normal text-center text-[#BC2637] mt-2 md:mt-8">
          From insight to action, we help you shift what’s stuck, strengthen what matters, and design systems that last.
        </p>
      </div>

      {/* Slanted marquee strip */}
      <div className="relative mt-8 -rotate-[3.5deg] overflow-hidden bg-[#68A7F4] py-2">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp; </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>
          <span className="uppercase"> ~ because life&apos;s too short for boring designs &nbsp;  </span>

        </div>
      </div>
    </div>
  )
}

export default HeroSection

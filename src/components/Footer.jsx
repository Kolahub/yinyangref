import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white font-inter">
      {/* Hero Section with Clip Path */}
      <div 
        className="relative bg-teal-600 px-8 md:px-16 lg:px-20 pt-16 pb-32"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold tracking-wide">
            READY TO ADD SOME BEMOTION TO YOUR PROJECT?
          </h2>
          
          <p className="text-lg mb-12">
            Let's make something amazing together!
          </p>
          
          <h1 className="text-3xl lg:text-5xl font-black mb-2 underline underline-offset-8">
            CONTACT ME TODAY!
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative -mt-20 px-8 md:px-16 lg:px-20 pt-28 pb-16">
        {/* <div className="max-w-6xl mx-auto"> */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            
            {/* Menu Section */}
            <div className="flex-shrink-0">
              <h3 className="text-gray-800 font-bold text-lg mb-4 tracking-wide">
                MENU
              </h3>
              <nav className="space-y-2">
                <div className="text-gray-700 text-lg">About</div>
                <div className="text-gray-700 text-lg">Work</div>
                <div className="text-gray-700 text-lg">Contact</div>
              </nav>
            </div>

            {/* Get Inspired Section */}
            <div className="flex-shrink-0">
              <h3 className="text-gray-800 font-bold text-lg mb-4 tracking-wide">
                GET INSPIRED
              </h3>
              <div className="space-y-2">
                <div className="text-gray-700 text-lg">Facebook</div>
                <div className="text-gray-700 text-lg">Instagram</div>
              </div>
            </div>

            {/* Logo Section */}
            <div className="-right-5">
              <img src="/contraztmedialogo.svg" alt="" className="w-full h-full" />
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* Footer */}
      <footer className="bg-teal-600 text-white text-end py-6 px-8">
          <div className="text-sm font-semibold">
            © 2024 CONTRAZT MEDIA • DESIGNED & DEVELOPED BY BEMOTION • PRIVACY POLICY
          </div>
      </footer>
    </div>
  );
};

export default Footer;
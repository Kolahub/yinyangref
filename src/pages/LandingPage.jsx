import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUs'
import ProgressCirclesSection from '../components/ProgressCircle'
import MeetTanishaSection from '../components/MeetTanishaSection'
import Services from '../components/Services'
import OurApproach from '../components/OurApproach'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import SuccessMetricsOutcomes from '../components/SuccessMetricsOutcomes'
import ClientTestimonials from '../components/ClientTestimonials'

function LandingPage() {
  return (
    <div>
        <Header />
        <HeroSection />
        <AboutUsSection />
        <ProgressCirclesSection />
        <MeetTanishaSection />
        <Services />
        <OurApproach />
        <Faq />
        <SuccessMetricsOutcomes />
        <ClientTestimonials />
        <Footer />
    </div>
  )
}

export default LandingPage
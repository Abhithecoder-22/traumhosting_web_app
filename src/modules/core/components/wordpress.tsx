// import React from 'react'
import ScrollUp from './wordpress-hosting/Common/ScrollUp'
import Hero from './wordpress-hosting/Hero'
import Features from './wordpress-hosting/Features'
import Brands from './wordpress-hosting/Brands'
import AboutSectionOne from './wordpress-hosting/About/AboutSectionOne'
import AboutSectionTwo from './wordpress-hosting/About/AboutSectionTwo'
import Testimonials from './wordpress-hosting/Testimonials'
import Pricing from './wordpress-hosting/Pricing'
// import Blog from './wordpress-hosting/Blog'
import Contact from './wordpress-hosting/Contact'
import { NavigationMenuDemo } from './header'
import Footer from './footer'
import FirstHeader from './first-header'
// import Header from './wordpress-hosting/Header'

const Wordpress = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne/>
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
      <Footer/>
    </>
    </div>
  )
}

export default Wordpress

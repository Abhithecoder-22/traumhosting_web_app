// import React from 'react'
import ScrollUp from '../../components/wordpress-hosting/Common/ScrollUp'
import Hero from '../../components/wordpress-hosting/Hero'
import Features from '../../components/wordpress-hosting/Features'
// import Brands from '../../components/wordpress-hosting/Brands'
// import AboutSectionOne from '../../components/wordpress-hosting/About/AboutSectionOne'
import AboutSectionTwo from '../../components/wordpress-hosting/About/AboutSectionTwo'
import Testimonials from '../../components/wordpress-hosting/Testimonials'
import Pricing from '../../components/wordpress-hosting/Pricing'
// import Blog from './wordpress-hosting/Blog'
import Contact from '../../components/wordpress-hosting/Contact'
import { NavigationMenuDemo } from '../../components/header'
import Footer from '../../components/footer'
import FirstHeader from '../../components/first-header'
// import Header from './wordpress-hosting/Header'

const Wordpress = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero 
       title="Managed WordPress Hosting: Powerful, yet Simple to Use"
       description="The most affordable way to get all the basics for your WordPress website, business website, built with Next 13.x and Tailwind CSS."
       linkText="See All Pricing Plans"
       linkUrl="https://nextjstemplates.com/templates/saas-starter-startup"/>
      <Features />
      <Pricing />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne/> */}
      <AboutSectionTwo />
      <Testimonials />
      
      {/* <Blog /> */}
      <Contact />
      <Footer/>
    </>
    </div>
  )
}

export default Wordpress

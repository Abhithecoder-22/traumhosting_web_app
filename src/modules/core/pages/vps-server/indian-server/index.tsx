// import React from 'react'
import ScrollUp from '../../../components/wordpress-hosting/Common/ScrollUp'
import Hero from '../../../components/wordpress-hosting/Hero'
import Features from '../../../components/wordpress-hosting/Features'
// import Brands from '../../../components/wordpress-hosting/Brands'
// import AboutSectionOne from '../../../components/wordpress-hosting/About/AboutSectionOne'
import AboutSectionTwo from '../../../components/wordpress-hosting/About/AboutSectionTwo'
// import Testimonials from '../../../components/wordpress-hosting/Testimonials'
// import Pricing from '../../../components/wordpress-hosting/Pricing'
// import Blog from './wordpress-hosting/Blog'
// import Contact from '../../../components/wordpress-hosting/Contact'
import { NavigationMenuDemo } from '../../../components/header'
import Footer from '../../../components/footer'
import FirstHeader from '../../../components/first-header'
import HostingPricingCard from '../../../components/hosting-pricing-card'
import SectionTitle from '../../../components/wordpress-hosting/Common/SectionTitle'
// import Header from './wordpress-hosting/Header'

 const plans = [
  {
    id: 'indian-basic',
    title: 'Indian Basic',
    price: '₹1,200.00 INR',
    features: [
      'V4 Processor',
      '2 Core',
      '16 GB RAM',
      '200 GB SSD',
      '200 MBPS'
    ],
    highlight: false,
  },
  {
    id: 'indian-essentials',
    title: 'Indian Essentials',
    price: '₹1,700.00 INR',
    features: [
      'V4 Processor',
      '4 Core',
      '32 GB RAM',
      '500 GB SSD',
      '200 MBPS'
    ],
    highlight: false,
  },
  {
    id: 'professional',
    title: 'Professional',
    price: '₹2,100.00 INR',
    features: [
      'V4 Processor',
      '8 Core',
      '64 GB RAM',
      '500 GB SSD',
      '200 MBPS'
    ],
    highlight: false,
  },
  {
    id: 'indian-professional',
    title: 'Indian Professional',
    price: '₹3,100.00 INR',
    features: [
      'V4 Processor',
      '12 Core',
      '64 GB RAM',
      '1 TB SSD',
      '200 MBPS'
    ],
    highlight: true, // Example highlight
  },
  {
    id: 'vps-1-gib',
    title: 'VPS-1-GIB',
    price: '₹700.00 INR',
    features: [
      'Scalable processor',
      '4 Core',
      '8 GB RAM',
      '50 GB SSD',
      'HA',
      '1 Gbps port'
    ],
    highlight: false,
  },
  {
    id: 'vps2-1-gib',
    title: 'VPS2-1-GIB',
    price: '₹1,100.00 INR',
    features: [
      'Scalable processor',
      '6 Core',
      '16 GB RAM',
      '300 GB SSD',
      'HA',
      '1 Gbps port'
    ],
    highlight: false,
  },
  {
    id: 'vps3-1-gib',
    title: 'VPS3-1-GIB',
    price: '₹2,000.00 INR',
    features: [
      'Scalable processor',
      '8 Core',
      '32 GB RAM',
      '300 GB SSD',
      'HA',
      '1 Gbps port'
    ],
    highlight: false,
  }
];


const VpsIS = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero 
       title="Indian VPS Servers offer powerful and reliable hosting solutions ."
       description="By choosing a VPS located in India, you can achieve faster website load times, lower latency, and enhanced connectivity for your users within the region. "
       linkText="See All Pricing Plans"
       linkUrl="#pricing"/>
      <Features />
      <div className="price-sections p-4" id='pricing'>
      <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
        {plans.map((plan, index) => (
          <HostingPricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            highlight={plan.highlight}
          />
        ))}
      </div>
      </div>
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne/> */}
      <AboutSectionTwo />
      {/* <Testimonials /> */}
    
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Footer/>
    </>
    </div>
  )
}

export default VpsIS

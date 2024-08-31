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
import SectionTitle from '../../../components/wordpress-hosting/Common/SectionTitle'
import HostingPricingCard from '../../../components/hosting-pricing-card'
// import Header from './wordpress-hosting/Header'

 const plans = [
  {
    id: 'amd-tmh-9124',
    title: 'AMD TMH 9124',
    price: '₹2,300.00 INR',
    features: [
      '4th Gen Scalable Processor (3.0)',
      '4 vCPUs',
      '8 GB RAM (DDR 5)',
      '100 GB (U.3 NVME)',
      '2 TB Data Transfer',
      '99.99% Uptime Guaranteed',
      '24/7 Support',
      'Windows / LINUX'
    ],
    highlight: false,
  },
  {
    id: 'amd-tmh-1-9124',
    title: 'AMD TMH-1 9124',
    price: '₹3,500.00 INR',
    features: [
      '4th Gen Scalable Processor (3.0)',
      '8 vCPUs',
      '16 GB RAM (DDR 5)',
      '256 GB (U.3 NVME)',
      '4 TB Data Transfer',
      '99.99% Uptime Guaranteed',
      '24/7 Support',
      'Windows / LINUX'
    ],
    highlight: false,
  },
  {
    id: 'amd-tmh-2-9124',
    title: 'AMD TMH-2 9124',
    price: '₹6,800.00 INR',
    features: [
      '4th Gen Scalable Processor (3.0)',
      '16 vCPUs',
      '32 GB RAM (DDR 5)',
      '500 GB (U.3 NVME)',
      '10 TB Data Transfer',
      '99.99% Uptime Guaranteed',
      '24/7 Support',
      'Windows / LINUX'
    ],
    highlight: true, // Example highlight
  }
];


const CloudIS = () => {
  return (
    <div>
         <>
        <FirstHeader/>
        <div className='bg-black text-white'>
         <NavigationMenuDemo/>
         </div>
      <ScrollUp />
      <Hero 
       title="Indian Cloud Servers are designed to provide high-performance cloud hosting solutions"
       description="By leveraging data centers located within India, these servers offer enhanced speed, reduced latency, and better connectivity for users within the country."
       linkText="See All Pricing Plans"
       linkUrl="#pricing" />
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

export default CloudIS

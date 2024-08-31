// import React from 'react'
import ScrollUp from '../../components/wordpress-hosting/Common/ScrollUp'
import Hero from '../../components/wordpress-hosting/Hero'
import Features from '../../components/wordpress-hosting/Features'
// import Brands from '../../components/wordpress-hosting/Brands'
// import AboutSectionOne from '../../components/wordpress-hosting/About/AboutSectionOne'
import AboutSectionTwo from '../../components/wordpress-hosting/About/AboutSectionTwo'
// import Testimonials from '../../components/wordpress-hosting/Testimonials'
// import Pricing from '../../components/wordpress-hosting/Pricing'
// import Blog from './wordpress-hosting/Blog'
// import Contact from '../../components/wordpress-hosting/Contact'
import { NavigationMenuDemo } from '../../components/header'
import Footer from '../../components/footer'
import FirstHeader from '../../components/first-header'
import HostingPricingCard from '../../components/hosting-pricing-card'
import SectionTitle from '../../components/wordpress-hosting/Common/SectionTitle'
// import Header from './wordpress-hosting/Header'
 const plans = [
    {
      id: 'rsh-1',
      title: 'RSH - 1',
      price: '250.00 INR',
      features: [
        '5 cPanel Accounts',
        '10 GB NVMe SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'cPanel + WHM',
        'Free Website Backup',
        'Unlimited Email Accounts',
        'Unlimited MySQL DB\'s'
      ],
      highlight: false, // Set to true if you want to highlight this plan
    },
    {
      id: 'rsh-2',
      title: 'RSH - 2',
      price: '400.00 INR',
      features: [
        '10 cPanel Accounts',
        '25 GB NVMe SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'cPanel + WHM',
        'Free Website Backup',
        'Unlimited Email Accounts',
        'Unlimited MySQL DB\'s'
      ],
      highlight: true, // Example highlight
    },
    {
      id: 'rsh-3',
      title: 'RSH - 3',
      price: '550.00 INR',
      features: [
        '20 cPanel Accounts',
        '50 GB NVMe SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'cPanel + WHM',
        'Free Website Backup',
        'Unlimited Email Accounts',
        'Unlimited MySQL DB\'s'
      ],
      highlight: false,
    },
    {
      id: 'rsh-4',
      title: 'RSH - 4',
      price: '1,100.00 INR',
      features: [
        '50 cPanel Accounts',
        '100 GB NVMe SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'cPanel + WHM',
        'Free Website Backup',
        'Unlimited Email Accounts',
        'Unlimited MySQL DB\'s'
      ],
      highlight: false,
    }
  ];
  
const Reseller = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero 
       title="Managed WordPress Hosting: Powerful, yet Simple to Use"
       description="We specialize in offering top quality reseller hosting services to small or large businesses. As a trusted reseller hosting provider, we offer a range of hosting solutions to meet the diverse needs of our clients.

"
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

export default Reseller

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
    title: 'WP - 1',
    price: '₹210.00 INR',
    features: [
      '2 GB RAM',
      'Host 1 Website',
      '10 GB NVMe SSD Storage',
      '100 GB Bandwidth',
      '2 Email Accounts',
      '2 MySQL Database',
      'LiteSpeed Web Server',
      'Free SSL Certificate'
    ],
    Highlight: false
  },
  {
    title: 'WP - 2',
    price: '₹350.00 INR',
    features: [
      '4 GB RAM',
      'Host 1 Website',
      '25 GB SSD Storage',
      'Unlimited Bandwidth',
      '5 Email Accounts',
      '5 MySQL Database',
      'LiteSpeed Web Server',
      'Free SSL Certificate'
    ],
    Highlight: false
  },
  {
    title: 'WP-Cheap',
    price: '₹150.00 INR',
    description: 'For Small & Startup Companies',
    features: [
      '1 GB RAM',
      'Host 1 Website',
      '2 GB NVMe SSD Storage',
      '10 GB Bandwidth',
      '1 Email Account',
      '1 MySQL Database',
      'LiteSpeed Web Server',
      'Free Let\'s Encrypt SSL'
    ],
    Highlight: true
  },
  {
    title: 'WP-Cheap 1',
    price: '₹200.00 INR',
    description: 'For Small & Startup Companies',
    features: [
      '1 GB RAM',
      'Host 1 Website',
      '5 GB NVMe SSD Storage',
      '50 GB Bandwidth',
      '1 Email Account',
      '1 MySQL Database',
      'LiteSpeed Web Server',
      'Free Let\'s Encrypt SSL'
    ],
    Highlight: false
  },
  {
    title: 'WP - Big Company',
    price: '₹560.00 INR',
    description: 'Designed For Big Company',
    features: [
      '6 GB RAM',
      'Host 1 Website',
      '50 GB SSD Storage',
      'Unlimited Bandwidth',
      '10 Email Accounts',
      '10 MySQL Database',
      'LiteSpeed Web Server',
      'Free SSL Certificate'
    ],
    Highlight: false
  },
  {
    title: 'WP - Big Company 1',
    price: '₹1,100.00 INR',
    description: 'Designed For Big Company',
    features: [
      '8 GB RAM',
      'Host 1 Website',
      '100 GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Email Accounts',
      'Unlimited MySQL Database',
      'LiteSpeed Web Server',
      'Free SSL Certificate'
    ],
    Highlight: false
  }
];

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
       linkUrl="#pricing" />
      <Features />
      {/* <Pricing /> */}
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
            highlight={plan.Highlight}
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

export default Wordpress

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
    id: 'th-cloud22',
    title: 'TH-Cloud22 VPS',
    price: '₹700.00 INR',
    features: [
      '2 vCPU Intel',
      '4 GB RAM',
      '40 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud32',
    title: 'TH-Cloud32 VPS',
    price: '₹900.00 INR',
    features: [
      '4 vCPU Intel',
      '8 GB RAM',
      '80 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud31',
    title: 'TH-Cloud31 VPS',
    price: '₹750.00 INR',
    features: [
      '2 vCPU AMD',
      '2 GB RAM',
      '40 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud21',
    title: 'TH-Cloud21 VPS',
    price: '₹1,000.00 INR',
    features: [
      '3 vCPU AMD',
      '4 GB RAM',
      '80 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud131',
    title: 'TH-Cloud131 VPS',
    price: '₹1,900.00 INR',
    features: [
      '4 vCPU AMD',
      '8 GB RAM',
      '160 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud41',
    title: 'TH-Cloud41 VPS',
    price: '₹2,500.00 INR',
    features: [
      '8 vCPU AMD',
      '16 GB RAM',
      '240 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false, // Change this to true if you want to highlight this plan
  },
  {
    id: 'th-cloud51',
    title: 'TH-Cloud51 VPS',
    price: '₹5,250.00 INR',
    features: [
      '16 vCPU AMD',
      '32 GB RAM',
      '360 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: true, // Example highlight
  }
];


const CloudNIS = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero 
       title="Non-Indian Cloud Servers offer powerful cloud hosting solutions hosted in data centers located outside of India. "
       description="These servers are ideal for businesses with a global presence or those that need high-performance infrastructure across multiple regions. With data centers strategically positioned around the world"
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

export default CloudNIS

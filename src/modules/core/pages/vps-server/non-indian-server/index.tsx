// import React from 'react'
import ScrollUp from '../../../components/wordpress-hosting/Common/ScrollUp'
import Hero from '../../../components/wordpress-hosting/Hero'
import Features from '../../../components/wordpress-hosting/Features'
// import Brands from '../../../components/wordpress-hosting/Brands'
// import AboutSectionOne from '../../../components/wordpress-hosting/About/AboutSectionOne'
// import AboutSectionTwo from '../../../components/wordpress-hosting/About/AboutSectionTwo'
// import Testimonials from '../../../components/wordpress-hosting/Testimonials'
// import Pricing from '../../../components/wordpress-hosting/Pricing'
// import Blog from './wordpress-hosting/Blog'
// import Contact from '../../../components/wordpress-hosting/Contact'
import { NavigationMenuDemo } from '../../../components/header'
import Footer from '../../../components/footer'
import FirstHeader from '../../../components/first-header'
import HostingPricingCard from '../../../components/hosting-pricing-card'
import SectionTitle from '../../../components/wordpress-hosting/Common/SectionTitle'
import AboutSectionTwo from '../../../components/wordpress-hosting/About/AboutSectionTwo'
// import Header from './wordpress-hosting/Header'

 const plans = [
  {
    id: 'th22-vps',
    title: 'TH22 VPS',
    price: '₹550.00 INR',
    features: [
      '2 vCPU Intel',
      '4 GB RAM',
      '40 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  },
  {
    id: 'th32-vps',
    title: 'TH32 VPS',
    price: '₹826.00 INR',
    features: [
      '4 vCPU Intel',
      '8 GB RAM',
      '80 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  },
  {
    id: 'thx31-vps',
    title: 'THX31 VPS',
    price: '₹643.00 INR',
    features: [
      '2 vCPU AMD',
      '2 GB RAM',
      '40 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  },
  {
    id: 'thx21-vps',
    title: 'THX21 VPS',
    price: '₹900.00 INR',
    features: [
      '3 vCPU AMD',
      '4 GB RAM',
      '80 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  },
  {
    id: 'thx131-vps',
    title: 'THX131 VPS',
    price: '₹1,500.00 INR',
    features: [
      '4 vCPU AMD',
      '8 GB RAM',
      '160 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: true, // Example highlight
  },
  {
    id: 'thx41-vps',
    title: 'THX41 VPS',
    price: '₹2,500.00 INR',
    features: [
      '8 vCPU AMD',
      '16 GB RAM',
      '240 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  },
  {
    id: 'thx51-vps',
    title: 'THX51 VPS',
    price: '₹5,250.00 INR',
    features: [
      '16 vCPU AMD',
      '32 GB RAM',
      '360 GB NVMe Storage',
      '20 TB Bandwidth*',
      'Full Root SSH Access'
    ],
    highlight: false,
  }
];


const VpsNIS = () => {
  return (
    <div>
         <>
        <FirstHeader/>
         <NavigationMenuDemo/>
      <ScrollUp />
      <Hero 
       title="Non-Indian VPS Servers are hosted in international data centers."
       description="With various configurations and global data center locations, you can select a VPS that best fits your needs, whether you’re managing a high-traffic website, a complex application"
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

export default VpsNIS

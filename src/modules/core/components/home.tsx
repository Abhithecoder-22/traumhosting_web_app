import  {  useState } from 'react';
import './home.css';
// import { NavigationMenuDemo } from './header';
import Hero from './hero';
import Footer from './footer';
import PriceSection from './pricing-section';
import ServiceSection from './service-section';
import AboutSection from './about';
// import Map from './map';
import WorldMap from './map';
import { ScrollAreaHorizontalDemo } from './scroll-img';
// import FirstHeader from './first-header';



// interface CardProps {
//   logo: string;
//   title: string;
//   subTitle: string;
//   description: string;
// }

// interface Option {
//   name: string;
//   description: string;
//   features: string[];
// }

// const data: CardProps[] = [
//   {
//     logo: "https://imgpile.com/images/uBmLxP.png",
//     title: "Maximum Security",
//     subTitle: "",
//     description: "We use top security measures like auto-updates on web apps, FREE SSL, hack protection, custom firewall, and DDoS protection to keep your websites safe in our Managed Cloud Hosting/ Support Packages.",
//   },
//   {
//     logo: "https://imgpile.com/images/uBmq0N.png",
//     title: "Maximum Performance",
//     subTitle: "",
//     description: "With our high-performance, high-end servers including shared hosting, Reseller Hosting, WordPress Hosting, Windows Hosting, We ensure the better performance and response from our servers.",
//   },
//   {
//     logo: "https://imgpile.com/images/uBmAnW.png",
//     title: "Advanced Functionality of Cloud vps Hosting",
//     subTitle: "",
//     description: "We make it extremely easy to manage a cloud VPS, All Cloud VPS hosting plans come with a graphical user interface and a selection of control panels, all accessible through a web browser.",
//   },
//   {
//     logo: "https://imgpile.com/images/uBmzdE.png",
//     title: "Ultimate Speed",
//     subTitle: "",
//     description: "Google values user experience and users like the fast speed. So we use the best technologies and methodologies to boost up your site speed without affecting the stability. Our testing department and periodical updates ensures the fastest loading speed across all devices with the help of our quality virtual server hosting plans.",
//   },
//   {
//     logo: "https://imgpile.com/images/uBmOq1.png",
//     title: "High Availability",
//     subTitle: "",
//     description: "Downtime can be dangerous for your business. There are any instances where you need more resources instantly. Our best vps hosting plans come with high resource availability speeds up your site and promise steady performance even during fluctuations. With us your site will go on and on and on.....No matter what!",
//   },
//   {
//     logo: "https://imgpile.com/images/uBm8rr.png",
//     title: "24/7 Live Support",
//     subTitle: "",
//     description: "Our support staff is available 24/7/365 to assist you via Telephone, LiveChat, or Email with any hosting-related issues in our Managed Cloud Hosting/ Support Packages.",
//   },
 

// ];


// const Card: React.FC<CardProps> = ({ logo, title, subTitle, description }) => (
//   <div className="eachCard">
//     <div className="cardContent">
//       <div className="cardImage">
//         <img src={logo} alt={`${title}-logo`} />
//       </div>
//       <div className="cardInfo">
//         <h2 className="cardTitle">{title}</h2>
//         <span className="cardSubTitle">{subTitle}</span>
//         <p className="cardText">{description}</p>
//       </div>
//     </div>
//   </div>
// );

const faqData = [
  {
    question: 'What is the difference between Linux Hosting in India and US?',
    answer: 'The only difference between the two is the geographical location, which determines the website latency (a.k.a. the time taken for your website to load for your clients). If your customers are in the Indian subcontinent or Asia-Pacific region, then the ideal choice is India Server Location TRAUMHOSTING. Alternatively, if your customers are based out of the US or nearby countries, then you should go for US Server Location instead.'
  },
  {
    question: 'Will I have shell/root access?',
    answer: 'Yes, with all our Linux VPS Server plans. login name (root) and password for the shell is supplied in your server configuration information contained within your Welcome E-mail notification after your order is processed.'
  },
  {
    question: 'How Does Web Hosting Work?',
    answer: 'After selecting the proper shared web hosting provider, user need to connect the domain with server by changing name server or A record. After connections with the server done, when ever user open your domain url on browser server will sends them the info and files hold on your web site server. Lot of Web hosting provider don’t provide you with the most effective server. Hence, the performance of your web site will be affected poorly. The right web hosting plans matter matter a lot. Selecting onohosting’s monthly web hosting plans will be the best step towards your business because its pocket friendly and performance friendly.'
  },
  {
    question: 'Do you provide custom VPS configuration ?',
    answer: 'Yes, We do provide custom VPS server configuration, you can ask for availability or requirement regarding custom configuration via sales team.'
  },
  {
    question: 'What is WordPress ?',
    answer: 'WordPress is an open source content management system (CMS) that powers over 30% of the internet. WordPress makes it easy to create, edit and manage websites for beginners and advanced users alike. Built by a community of global developers, WordPress is continuously being improved and refined to provide the best functionality and performance for its users. This open source approach has made WordPress the website creation and management platform of choice for new and skilled users all over the world. Whether you are looking to build your e-commerce website or start a blog, WordPress has all of the tools and resources to take your website from an idea to an achievable dream online.'
  },
  {
    question: 'What are the types of web hosting?',
    answer: `
      Shared Hosting: If you’re just starting out your website or blog, Shared Hosting is the best option. It is affordable as the server space is shared amongst websites.
  
      
      WordPress Hosting: If you have a WordPress blog/website then WordPress Hosting is the recommended option.
      
      VPS Hosting: VPS Hosting is the upgraded version of Shared Hosting. Although you do share website space with other websites, the resources are not shared.
      
      Dedicated Hosting: Dedicated Hosting gives you complete control over your website. You neither share your website space nor the resources with any other website.
      
      Reseller Hosting: If you want to start your own web hosting business, Reseller Hosting enables you to resell hosting space and services offered to you by your parent hosting provider.
    `
  },
  {
    question: 'How do I make a WordPress Website make?',
    answer: 'Our WordPress plans are perfect for fast, easy and secure WordPress hosting that is secured by experts. After you have completed your new account setup and picked a WordPress theme, you are automatically connected to the latest version of WordPress. You will log into your Bluehost cPanel and automatically be connected to your new WordPress site that you can begin customising. Whether you are wanting assistance designing your website or looking for guidance on the best plugin to install, our team of experts is available 24/7 to help you get started and conquer the web'
  },
  {
    question: 'I bought a domain name now what?',
    answer: 'After you’ve purchased a domain name, the next step is to get yourself a web hosting. There are several web hosting plans available. As you’re just getting started online, we recommend Shared Hosting or WordPress Hosting as they are affordable and easy to manage.'
  },

];





const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleOpen = (index: any ) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selectedOption, setSelectedOption] = useState('WordPress');

  const options = [
    {
      name: 'WordPress',
      description: 'Traumhosting is the main company for managed WordPress hosting. With top-notch performance, dependable help, and advanced security, it\'s the suitable preference in your WordPress internet site.',
      features: ['Unlimited Bandwidth', 'Network Speed', 'Turbo Power', 'Xtreme Freedom'],
    },
    {
      name: 'Drupal',
      description: 'Traumhosting is the main company for managed Drupal hosting. With top-notch performance, dependable help, and advanced security, it\'s the suitable preference in your Drupal internet site.',
      features: ['Unlimited Bandwidth', 'Network Speed', 'Turbo Power', 'Xtreme Freedom'],
    },
    {
      name: 'Joomla',
      description: 'Traumhosting is the main company for managed Joomla hosting. With top-notch performance, dependable help, and advanced security, it\'s the suitable preference in your Joomla internet site.',
      features: ['Unlimited Bandwidth', 'Network Speed', 'Turbo Power', 'Xtreme Freedom'],
    },
    {
      name: 'PrestaShop',
      description: 'Traumhosting is the main company for managed PrestaShop hosting. With top-notch performance, dependable help, and advanced security, it\'s the suitable preference in your PrestaShop internet site.',
      features: ['Unlimited Bandwidth', 'Network Speed', 'Turbo Power', 'Xtreme Freedom'],
    },
  ];

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName);
  };

  const currentOption = options.find(option => option.name === selectedOption);

 
  return (
    <div>
<main>
<header>
        {/* <FirstHeader/> */}
      </header> 
    <Hero/>
  </main>

<AboutSection/>


{/* ====================== pricing Section ===================== */}
<PriceSection/>


{/* =========================secuirty feature section============================== */}
<ServiceSection/>

<ScrollAreaHorizontalDemo/>

{/* =========================hosting section ===================== */}

<div className="hosting-options">
      <div className="options-list">
        {options.map(option => (
          <div
            key={option.name}
            className={`option-item ${selectedOption === option.name ? 'active' : ''}`}
            onClick={() => handleOptionClick(option.name)}
          >
            <img src={`https://via.placeholder.com/50?text=${option.name[0]}`} alt={option.name} />
            <span>{option.name}</span>
            <span className="arrow">{'>'}</span>
          </div>
        ))}
      </div>
      <div className="option-details">
        <h2>The Best Managed Hosting For {currentOption?.name}</h2>
        <p>{currentOption?.description}</p>
        <ul>
          {currentOption?.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="learn-more-btn">LEARN MORE</button>
      </div>
    </div>

    {/* =========================data center======================== */}

    {/* <section className="section-with-image">
      <h2>Our Global DataCentres</h2>
      <p>
        Global DataCentres: Empowering Businesses with Secure and Scalable Infrastructure. Experience the electricity of our cutting-edge records centers, handing over unrivaled reliability, superior security measures, and lightning-speedy connectivity. Our global network of facilities affords the inspiration for seamless statistics management, permitting agencies to thrive inside the virtual age. Explore our complete answers today.
      </p>
      <div className="image-container">
        <img 
          src="/assets/images/world-map.png" 
          alt="Global Data Centres" 
          className="full-width-image"
        />
        <div className="flags-overlay">
          <div className="flag-item">
            <img 
              src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/in-circle-01.png"
              alt="USA Flag" 
              className="flag-circle"
            />
            <p>United States</p>
          </div>
          <div className="flag-item">
            <img 
              src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/in-circle-01.png"
              alt="Mexico Flag" 
              className="flag-circle"
            />
            <p>Mexico</p>
          </div>
          <div className="flag-item">
            <img 
              src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/in-circle-01.png" 
              alt="Brazil Flag" 
              className="flag-circle"
            />
            <p>Brazil</p>
          </div>
          <div className="flag-item">
            <img 
              src="https://vectorflags.s3-us-west-2.amazonaws.com/flags/in-circle-01.png"
              alt="India Flag" 
              className="flag-circle"
            />
            <p>India</p>
          </div>
        </div>
      </div>
    </section> */}
    <div className='data-center m-2 p-2'><WorldMap/></div>

    {/* =========================faq section=================== */}

    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '40px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{marginBottom:'20px',textAlign:'center',fontSize:'2rem'}}>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
          <div
            onClick={() => toggleOpen(index)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 'bold',
              padding: '10px',
              backgroundColor: '#f5f5f5'
            }}
          >
            <span>{faq.question}</span>
            <span className='text-2xl font-bold'>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div style={{ padding: '10px', backgroundColor: '#fff' }}>
              {faq.answer.trim().split('\n\n').map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: '10px', whiteSpace: 'pre-line' }}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    <div>
      <Footer/>
    </div>


    </div>
  );
};

export default Home;

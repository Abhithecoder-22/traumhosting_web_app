import React from 'react';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css'; 
import '../../../assets/css/responsive.css'; 
import { NavigationMenuDemo } from './header';
// import img from '../../../../public/assets/images/slider-img.png'

interface SlideProps {
    title: string;
    description: string;
    imgSrc: string;
    className: string;
  }

  const Slide: React.FC<SlideProps> = ({ title, description, imgSrc }) => (
    <div className="hero_area">
         <header className="header_section">
         <NavigationMenuDemo/>
         </header>
  <div className="carousel-item active ">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <h1>{title}</h1>
            <p>{description}</p>
            <ul className="hero_list mt-2">
                                <li><i className="fas fa-check"></i> 8GB RAM</li>
                                <li><i className="fas fa-check"></i> 100GB SSD Cloud Storage</li>
                                <li><i className="fas fa-check"></i> Weekly Backups</li>
                                <li><i className="fas fa-check"></i> DDoS Protection</li>
                                <li><i className="fas fa-check"></i> Full Root Access</li>
                                <li><i className="fas fa-check"></i> 24/7/365 Tech Support</li>
                                
                            </ul>
            <div className="btn-box">
              <a href="#" className="btn-1">Get Started</a>
              <a href="#" className="btn-2">Learn More</a>
            </div>

          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* <div className="img-box mt-10">
                <img src={imgSrc} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

const Hero = () => {
  const slides = [
    {
      title: 'Secure and Reliable Hosting Services',
      description: 'Reliable hosting offerings for seamless on line studies. Choose our excessive-overall performance answers for unbeatable uptime and fast loading speeds.',
      imgSrc: '/assets/images/hero.png',
    },
    // {
    //   title: 'Fast & Secure Web Hosting',
    //   description: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm',
    //   imgSrc: '/assets/images/slider-img.png',
    // },
    // {
    //   title: 'Fast & Secure Web Hosting',
    //   description: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm',
    //   imgSrc: '/assets/images/slider-img.png',
    // },
  ];

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <Slide
              key={index}
              title={slide.title}
              description={slide.description}
              imgSrc={slide.imgSrc}
              className={index === 0 ? 'carousel-item active' : 'carousel-item'}
            />
          ))}
        </div>
        {/* <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

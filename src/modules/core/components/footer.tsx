// import React from 'react';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css'; 
import '../../../assets/css/responsive.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <section className="info_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a href="">
                <i className="fas fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>
                  Call +91 7048944596
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  traumhosting@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social">
            <a href="">
            <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="">
            <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="">
            <i className="fa-brands fa-square-twitter"></i>
            </a>
           
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a className="active" href="index.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Home
              </a>
              <a className="" href="about.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                About
              </a>
              <a className="" href="service.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Services
              </a>
              <a className="" href="price.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Pricing
              </a>
              <a className="" href="contact.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a className="active" href="index.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Home
              </a>
              <a className="" href="about.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                About
              </a>
              <a className="" href="service.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Services
              </a>
              <a className="" href="price.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Pricing
              </a>
              <a className="" href="contact.html">
                <img src="https://traumhosting.in/images/nav-bullet.png" alt="img"/>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
            At TraumHosting, we’re obsessed on presenting top-notch web hosting offerings to companies and people alike. Our adventure started with a imaginative and prescient to create a web hosting platform that not best meets the technical necessities of our customers however also exceeds their expectations in phrases of reliability, safety, and customer service.
            </p>
          </div>
        </div>
        <div className="col-md-3 mb-0 mx-auto text-center">
  <h4>Subscribe</h4>
  <form action="#">
    <input type="text" placeholder="Enter email" className="block mx-auto mb-2 p-2 border rounded" />
    <button type="submit" className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded">
      Subscribe
    </button>
  </form>
</div>

      </div>
    </div>
  </section>
  );
};

export default Footer;

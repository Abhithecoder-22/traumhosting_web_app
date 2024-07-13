
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css'; 
import '../../../assets/css/responsive.css';
import './home.css'

const AboutSection = () => {
  return (
    <section className="about_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-text-width">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Unmatched Speed: Turbocharge Your Website's Performance</h2>
              </div>
              <p>
              When it comes to hosting services, pace is paramount. In contemporary rapid-paced virtual landscape, traffic expect lightning-fast loading instances, and search engines like google and yahoo prioritize high-performance web sites. At Traum Hosting, we understand the significance of velocity, that’s why we have invested heavily in contemporary infrastructure and contemporary technologies for hosting services.
              Our strong servers, powered by means of the ultra-modern hardware and software innovations, make certain highest quality overall performance on your internet site. With superior caching mechanisms, content material transport networks (CDNs), and smart load balancing, we reduce latency and maximize throughput, delivering an high-quality user revel in. Your traffic may be thrilled with the blazing-speedy loading times, ensuing in decreased leap fees and accelerated conversions.
              </p>
              {/* <a href="">
                Read More
              </a> */}
            </div>
          </div>
          <div className="col-md-3 col-img-width">
            <div className="img-box">
              <img src="https://traumhosting.in/images/about-img.png" alt="About Us"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

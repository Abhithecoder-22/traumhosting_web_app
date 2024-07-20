// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/style.css';
import '../../../assets/css/responsive.css';
import { Button } from '../../../shadcn/components/ui/button';
import { CountryTrackContext } from '../contexts/countryTrack';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'

const PriceSection = () => {

    const country = useContext(CountryTrackContext);
    const [currentCountryTrack, setCurrentCountryTrack] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                const countryName = response.data.country_name;

                if (countryName === "India") {
                    console.log("India detected");
                    country.setCountryTrack(true);
                    setCurrentCountryTrack(true); // Update local state immediately
                } else {
                    console.log("Non-India country detected");
                    country.setCountryTrack(false);
                    setCurrentCountryTrack(false); // Update local state immediately
                }
            } catch (error) {
                console.error('Error fetching country:', error);
                // Handle error fetching country data
            }
        };

        fetchCountry();
    }, [country, country.setCountryTrack]);

    // Ensure the component re-renders when countryTrack changes
    useEffect(() => {
        console.log("Current countryTrack state (context):", country.countryTrack);
        console.log("Current local state:", currentCountryTrack);
    }, [country.countryTrack, currentCountryTrack]);

    return (
        <section className="price_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h4 className='text-2xl font-bold'>Our Pricing</h4>
                </div>
                <div className="price_container">
                    <div className="box">
                        <div className="detail-box">
                            <div className="top-box">
                                <h2>
                                    {currentCountryTrack ? `₹` : `$`}
                                    <span>49</span>
                                </h2>
                                <h6>Startup</h6>
                                <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                  c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                  c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                  H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                </svg>
                            </div>
                            <ul className="price_features">
                                <li><i className="fas fa-check"></i> 2GB RAM</li>
                                <li><i className="fas fa-check"></i> 20GB SSD Cloud Storage</li>
                                <li><i className="fas fa-check"></i> Weekly Backups</li>
                                <li><i className="fas fa-check"></i> DDoS Protection</li>
                                <li><i className="fas fa-check"></i> Full Root Access</li>
                                <li><i className="fas fa-check"></i> 24/7/365 Tech Support</li>
                                <Button variant='default' className='w-full' >See Detail</Button>
                            </ul>
                            
                        </div>
                        <div className="btn-box">
                            

                            {/* <a href="">See Detail</a> */}
                        </div>
                    </div>
                    <div className="box">
                        <div className="detail-box">
                            <div className="top-box">
                                <h2>
                                    {currentCountryTrack ? `₹` : `$`}
                                    <span>69</span>
                                </h2>
                                <h6>Standard</h6>
                                <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                  c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                  c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                  H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                </svg>
                            </div>
                            <ul className="price_features">
                                <li><i className="fas fa-check"></i> 4GB RAM</li>
                                <li><i className="fas fa-check"></i> 50GB SSD Cloud Storage</li>
                                <li><i className="fas fa-check"></i> Weekly Backups</li>
                                <li><i className="fas fa-check"></i> DDoS Protection</li>
                                <li><i className="fas fa-check"></i> Full Root Access</li>
                                <li><i className="fas fa-check"></i> 24/7/365 Tech Support</li>
                                <Button variant='default' className='w-full' >See Detail</Button>
                            </ul>
                        </div>
                   
                    </div>
                    <div className="box">
                        <div className="detail-box">
                            <div className="top-box">
                                <h2>
                                    {currentCountryTrack ? `₹` : `$`}
                                    <span>119</span>
                                </h2>
                                <h6>Business</h6>
                                <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
                  c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
                  c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
                  H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
                  c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                </svg>
                            </div>
                            <ul className="price_features">
                                <li><i className="fas fa-check"></i> 8GB RAM</li>
                                <li><i className="fas fa-check"></i> 100GB SSD Cloud Storage</li>
                                <li><i className="fas fa-check"></i> Weekly Backups</li>
                                <li><i className="fas fa-check"></i> DDoS Protection</li>
                                <li><i className="fas fa-check"></i> Full Root Access</li>
                                <li><i className="fas fa-check"></i> 24/7/365 Tech Support</li>
                                <Button variant='default' className='w-full' >See Detail</Button>
                            </ul>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;

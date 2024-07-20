import React from "react";

const WorldMap = () => {
  const countries = [
    { name: "Canada", left: "20%", top: "30%" },
    { name: "United States", left: "25%", top: "35%" },
    { name: "Brazil", left: "40%", top: "60%" },
    { name: "Finland", left: "55%", top: "15%" },
    { name: "Nigeria", left: "50%", top: "50%" },
    { name: "China", left: "75%", top: "30%" },
    { name: "India", left: "70%", top: "40%" },
    { name: "Australia", left: "80%", top: "80%" }
  ];

  return (
    <div>
    <div className="row justify-content-center">
    <div className="col-md-9 col-lg-8">
        <div className="section-heading text-center mb-5">
            <h2 className="text-3xl font-bold">Our Data centers Location</h2>
            <p className="lead ">Cloudhub offers a low latency worldwide network, enabling you to deploy your
                service infrastructure in close proximity to your customer base.</p>
        </div>
    </div>
</div>
    <div className="map-container">
      <img src="/assets/images/map-dark.svg" alt="World Map" className="world-map"/>
      {countries.map((country, index) => (
        <div
          key={index}
          className="country-marker"
          style={{ left: country.left, top: country.top }}
        >
          <div className="marker"></div>
          <div className="label">{country.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WorldMap;

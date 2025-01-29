import React from "react";

const Branches = () => {
  return (
    <div className="world-map">
      <img src="/assets/largeImages/mapp.png" className="w-full" alt="map" />
      <div className="pin usa">
        <span>United States</span>
      </div>
      <div className="pin france">
        <span>France</span>
      </div>
      <div className="pin sweden">
        <span>Sweden</span>
      </div>
      <div className="pin south-africa">
        <span>South Africa</span>
      </div>
      <div className="pin china">
        <span>China</span>
      </div>
      <div className="pin india">
        <span>Yovant Office, India</span>
      </div>
    </div>
  );
};

export default Branches;

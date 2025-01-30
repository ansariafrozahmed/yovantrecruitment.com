import { MapPin } from "lucide-react";
import React from "react";

const Branches = () => {
  const locations = [
    { name: "India", className: "india" },
    { name: "UK", className: "uk" },
    { name: "Bangladesh", className: "bangladesh" },
    { name: "Pakistan", className: "pakistan" },
    { name: "Philippines", className: "philippines" },
    { name: "Nepal", className: "nepal" },
    { name: "Saudi Arabia", className: "ksa" },
    { name: "UAE", className: "uae" },
    { name: "Uganda", className: "uganda" },
    { name: "Ghana", className: "ghana" },
    { name: "Sierra Leone", className: "sierraleone" },
    { name: "Nigeria", className: "nigeria" },
  ];

  return (
    <div className="py-20 flex justify-center">
      <div className="relative w-full max-w-4xl">
        <img
          src="/assets/largeImages/newmap.png"
          className="w-full"
          alt="map"
        />
        {locations.map((location, index) => (
          <div key={index} className={`pin ${location.className} group`}>
            <MapPin size={18} className="pin-icon" color="white" />
            <span className="tooltip">{location.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;

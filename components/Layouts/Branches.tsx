"use client";
import { MapPin } from "lucide-react";
import React from "react";

const Branches = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const locations = [
    { code: "IN", name: "India", className: "india" },
    { code: "GB", name: "UK", className: "uk" },
    { code: "BD", name: "Bangladesh", className: "bangladesh" },
    { code: "PK", name: "Pakistan", className: "pakistan" },
    { code: "PH", name: "Philippines", className: "philippines" },
    { code: "NP", name: "Nepal", className: "nepal" },
    { code: "SA", name: "Saudi Arabia", className: "ksa" },
    { code: "AE", name: "UAE", className: "uae" },
    { code: "UG", name: "Uganda", className: "uganda" },
    { code: "GH", name: "Ghana", className: "ghana" },
    { code: "SL", name: "Sierra Leone", className: "sierraleone" },
    { code: "NG", name: "Nigeria", className: "nigeria" },
  ];

  return (
    <div className="pt-40 pb-20 lg:py-24 space-y-8">
      <div className="px-4 overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <img
            src="/assets/largeImages/newmap.png"
            className="w-full"
            alt="map"
          />
          {locations.map((location, index) => (
            <div key={index} className={`pin ${location.className} group`}>
              <MapPin
                className="h-3 w-3 lg:h-5 lg:w-5 pin-icon"
                color="white"
              />
              <div className="tooltip">
                <div
                  className="flex items-center gap-1 justify-center"
                  key={index}
                >
                  {/* <img
                    className="h-4"
                    src={`https://flagsapi.com/${location.code}/flat/64.png`}
                  ></img> */}
                  <h2 className="text-xs lg:text-sm tracking-wider font-medium">
                    {location.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" templateContainer grid grid-cols-2 w-full gap-x-4 gap-y-5 py-">
        {locations.map((location, index) => (
          <div className="flex items-center gap-2" key={index}>
            <img
              className="h-6"
              src={`https://flagsapi.com/${location.code}/flat/64.png`}
            ></img>
            <h2 className="text-sm tracking-wider font-medium">
              {location.name}
            </h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Branches;

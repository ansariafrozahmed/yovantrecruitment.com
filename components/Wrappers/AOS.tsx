"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AOS = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
      offset: 100,
    });
  }, []);
  return null;
};

export default AOS;

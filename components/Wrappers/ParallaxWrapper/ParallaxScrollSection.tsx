"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ParallaxScrollSection = () => {
  useEffect(() => {
    // GSAP animation for parallax scrolling
    gsap.fromTo(
      ".parallax-section",
      { y: 0 },
      {
        y: "40%",
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // GSAP animation for darkening effect
    gsap.fromTo(
      ".parallax-overlay",
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return null;
};

export default ParallaxScrollSection;

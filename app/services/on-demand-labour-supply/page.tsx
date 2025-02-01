// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import OnDemandServieMobile from "@/components/Services/OnDemandServiceMobile";

// const textArray = [
//   {
//     id: 1,
//     title: "Deployment time are 4 - 7 day",
//     description:
//       "Looking for the right job without the long wait? Our job consultancy service ensures quick and efficient placements, helping candidates secure opportunities within 4 to 7 days. With a strong network of employers and a streamlined hiring process, we match the right talent with the right job in no time.",
//   },
//   {
//     id: 2,
//     title: "Skilled & Unskilled Reliable Workers",
//     description:
//       "Discover dependable solutions for all your workforce needs with our skilled and unskilled reliable workers. We connect you with candidates who bring dedication, efficiency, and professionalism to every task. Whether you're looking for experienced specialists or hardworking support staff, our service ensures you find the right fit for your business. Empower your team with reliability today!",
//   },
//   {
//     id: 3,
//     title: "State-of-the-Art ERP Software",
//     description:
//       "Our Consultancy provides expert guidance in selecting, implementing, and optimizing ERP solutions tailored to your business needs. We help streamline operations, improve efficiency, and ensure seamless integration, empowering your organization with cutting-edge technology for sustainable growth.",
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// const OnDemandServie = () => {
//   const imagesRef = useRef<any | null>([]);
//   const textRef = useRef<any | null>([]);
//   const templateContainerRef = useRef<any | null>(null);
//   // const bannerOverlayRef = useRef(null);
//   // const bannerRef = useRef(null);

//   // useEffect(() => {
//   //   let ctx = gsap.context(() => {
//   //     gsap.to(bannerOverlayRef.current, {
//   //       top:"-100vh",
//   //       duration:2,
//   //       scrollTrigger: {
//   //         trigger: bannerRef.current,
//   //         start: "top top",
//   //         end: "bottom center",
//   //         // pin: true,
//   //         pinSpacing: false, // Keeps it fixed without pushing content
//   //         scrub: 5, // Smooth transition
//   //       },
//   //     });
//   //   });

//   //   return () => ctx.revert();
//   // }, []);

//   useEffect(() => {
//     imagesRef.current.forEach((img: any, index: number) => {
//       gsap.fromTo(
//         img,
//         { y: "100%", scale: 1 },
//         {
//           y: "0%",
//           scale: 1.5,
//           //   opacity: 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: img,
//             start: `top+=${index * 650} bottom`, // Delay each image based on index
//             end: "top 50%",
//             scrub: 5,
//           },
//         }
//       );
//     });
//     textRef.current.forEach((text: any, index: number) => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: text,
//           start: `top+=${index * 650} bottom`, // Delay each animation based on index
//           end: "top 40%",
//           scrub: 5,
//         },
//       });

//       // First Animation
//       tl.fromTo(
//         text,
//         {
//           y: "100%",
//           // opacity: 0.3,
//         },
//         {
//           y: "20%",
//           opacity: 1,

//           ease: "power1.inOut",
//         }
//       );
//     });

//     let ctx = gsap.context(() => {
//       gsap.to(templateContainerRef.current, {
//         scrollTrigger: {
//           trigger: templateContainerRef.current,
//           start: "top top",
//           end: "bottom+=1500px",
//           pin: true,
//           // pinSpacing: false, // Keeps it fixed without pushing content
//           scrub: true, // Smooth transition
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       ".parallax-section",
//       { y: 0 },
//       {
//         y: "80%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".parallax-section",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div className="overflow-hidden hidden lg:inline-block pb-12">
//         {/* <ParallaxScrollSection /> */}
//         <div
//           className="  w-full h-[100vh] mb-12 flex justify-center items-center parallax-section"
//           style={{
//             backgroundImage: "url(/assets/services/bannerImage.jpg)",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "top",
//           }}
//           // ref={bannerRef}
//         >
//           <div className="absolute w-full h-full left-0 top-0 bg-black/75 inset-0"></div>
//           <div className="">
//             <h1 className="relative text-7xl font-bold text-white text-center uppercase mb-3">
//               On Demand Labour Supply
//             </h1>
//             <p className=" relative text-lg text-center px-48 max-sm:px-5">
//               we specialize in providing on-demand labour supply to businesses
//               across various industries. Whether you need temporary workers for
//               a short-term project or skilled professionals for seasonal
//               demands, our flexible workforce solutions ensure that you get the
//               right talent at the right time. Let us handle your workforce needs
//               while you focus on growing your business. Partner with us today
//               for reliable, efficient, and hassle-free labour supply solutions.
//             </p>
//           </div>
//         </div>
//         <div className="relative bg-black pt-12">
//           <div
//             className="templateContainer flex flex-col lg:flex-row gap-8 lg:gap-10 "
//             ref={templateContainerRef}
//           >
//             {/* IMAGE SECTION WITH PARALLAX */}
//             <div className="w-full flex flex-row items-center lg:flex-col lg:w-[40%] relative overflow-hidden">
//               <div className="relative lg:h-screen w-[50%] lg:w-full">
//                 <div className="">
//                   <img
//                     src="/assets/services/global.jpg"
//                     alt=""
//                     className="h-screen"
//                   />
//                 </div>
//                 {[
//                   "/assets/services/deployment.jpg",
//                   "/assets/services/skilled.jpg",
//                   "/assets/services/erp.jpg",
//                 ].map((src, index) => (
//                   <div
//                     key={`parallax-image-${index}`}
//                     ref={(el) => {
//                       imagesRef.current[index] = el;
//                     }}
//                     className="absolute inset-0 w-full h-full"
//                   >
//                     <Image
//                       src={src}
//                       alt={`Parallax Image ${index + 1}`}
//                       className="w-full h-full object-cover object-top"
//                       height={1000}
//                       width={600}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* TEXT SECTION */}
//             <div className="w-full lg:w-[60%] lg:sticky top-0 py-40 lg:h-screen flex flex-col items-start justify-center space-y-4 lg:space-y-5 text-[#242424]  ">
//               <div className=" w-full h-full bg-black py-11 px-5">
//                 {/* <h2 className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase">
//                   Introduction
//                 </h2> */}
//                 <h2 className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase">
//                   Global Recruitment networks
//                 </h2>
//                 <p className="text-white mb-3">
//                   consultancy dedicated to connecting top talent with the right
//                   opportunities worldwide. We specialize in seamless recruitment
//                   solutions, helping businesses find skilled professionals while
//                   empowering job seekers with career-defining roles. With a
//                   global reach and industry expertise, we bridge the gap between
//                   employers and candidates, ensuring the perfect fit for
//                   success.
//                 </p>
//                 <Link href={"/about"}>
//                   <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
//                     About us
//                   </button>
//                 </Link>
//               </div>
//               {textArray.map((text, index) => {
//                 return (
//                   <>
//                     <div
//                       className="absolute inset-0 w-full top-0 h-full !mb-64 mx-3 "
//                       key={text.id}
//                       ref={(el) => {
//                         textRef.current[index] = el;
//                       }}
//                     >
//                       <div className="w-full h-[50px] bg-gradient-to-t from-black via-black/50"></div>
//                       <div className="bg-black ">
//                         {/* <h2 className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase mb-2 !bg-black">
//                           Introduction
//                         </h2> */}
//                         <h2 className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase">
//                           {text.title}
//                         </h2>
//                         <p className="text-white mb-3 bg-black h-[100px]">
//                           {text.description}
//                         </p>
//                         <Link href={"/about"} className="bg-black">
//                           <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
//                             About us
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <OnDemandServieMobile />
//       </div>
//     </>
//   );
// };

// export default OnDemandServie;
import OnDemand from "@/components/AboutPage/OnDemand";
import React from "react";

const Page = () => {
  return (
    <div>
      <OnDemand />
    </div>
  );
};

export default Page;

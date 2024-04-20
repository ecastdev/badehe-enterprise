import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
import { Business, Email, FacebookRounded, Instagram, WhatsApp, Twitter, YouTube } from "@mui/icons-material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "./footer.css";
import { dataAnalyis } from "../assest/assest";
import Lottie from 'lottie-react';
import animateData from '../intro/R3VYtxKiYZ (1).json';

// gsap.registerPlugin(SplitText);

function Footer() {
  // facebook
  const facebook1 = () => {
    window.open("https://www.facebook.com/share/VtnjR8TKBobAqDpX/?mibextid=qi2Omg");
  };

  // you
  const YouTube1 = () => {
    window.open("https://youtube.com/@chawassaonlinetv3739?si=57SSnvY12y2bSlCf");
  };

  // what's
  const WhatsApp1 = () => {
    window.open("https://x.com/BOSSY34230116?t=zAdfzpprSvp8tdwhIoXX3A&s=09");
  };

  // insta
  const Instagram1 = () => {
    window.open("https://www.instagram.com/badehe_enterprises_ltd?igsh=Z3kzbDc5OXRicjVr", "_blank");
  };

  // data
  const aboutData = [
    {
      title: "Mineral",
      subtitle: "Buying and selling oil",
    },
    {
      title: "Plumbing Services",
      subtitle: "Domestics, Offices, Industries, ",
    },
    {
      title: "food supply",
      subtitle: "Supplying all foods like maize, rice beans ,fish and so on",
    },
    {
      title: "Electrical wire installation",
      subtitle: "Domest, offices, industries",
    },
    {
      title: "finacial business",
      subtitle: "M-pesa, Halopsesa ,Tigopesa,Airtel Money",
    },
  ];

  // useEffect to handle component mount
  const component = useRef(); // a ref for the root-level element; we use selector text for everything else.

  // useLayoutEffect(() => {

  //   let ctx = gsap.context(() => {
  //     let h1Element = component.current.querySelectorAll("ul");
      
      
  //     if (!h1Element) {
  //       // Handle the case where the h1 element is not found
  //       console.error("h1 element not found");
  //       return;
  //     }
  //     let split = SplitText.create(h1Element, {type:"chars"}); 
  //     gsap.from(split.chars, {
  //       yPercent: 130,
  //       ease: "back.out",
  //       stagger: 0.05,
  //       duration:1,
  //       scrollTrigger: {
  //           trigger: split.chars,
  //           start: 'top 86%',
  //           end:'top 60%',
  //           scrub: true,
  //       }
  //     });
  //     return () => split.revert();
  //   }, component.current); 
  //   return () => ctx.revert(); // useLayoutEffect cleanup
  // }, []);

//   const scrollref = useRef();
//   useGSAP(() => {
//     const choose = gsap.utils.toArray(scrollref.current.children);
//     gsap.to("#choose ", {
//       color: "purple",
//       ease: "power1.inOut",
//       textDecorationLine: "underline",
//       marginBottom: "20px",
//       textDecoration: "underline",
//       textEmphasisColor: "blueviolet",
//       scrollTrigger: {
//         trigger: "#choose",
//         start: "top 50%",
//         end: "top 30%",
//         scrub: true,
//       },
//     });
//     // choose2
//     gsap.to("#explore ", {
//       x: 50,
//       opacity: 1,
//       duration: 0.3,
//       stagger: {
//         each: 0.1,
//       },
//     });
//   }, []);

  return (
    <section className="" ref={component}>
      <div className="flex flex-wrap flex-col items-center justify-around w-screen  h-full lg:h-screen">
        <div >
        <ul className=" flex items-center overflow-hidden   pt-32 top-0 text-center">
            <h1 className=" font-title text-6xl lg:text-8xl text-clip text-white text-center">About us</h1>
            </ul>
          
        
        <div className="flex flex-wrap justify-between  lg:flex-row  gap-5 my-10">
      
          <Lottie animationData={animateData} className="w-72 h-52"/>
          
          <div className="grid place-content-center ">
            {aboutData.map((about, index) => (
              <div className="grid gap-6" key={index}>
                
                    <h1 className="text-white ">
                    {" "}
                    <Business color="secondary" /> {about.title}
                    </h1>
                
               
                   <p className="text-slate-400  text-center">{about.subtitle}</p>
             

                

              </div>
            ))}
          </div>
          {/* contact */}
          <div>
            <div id="contact" className="grid gap-5 my-6 items-center relative place-content-center">
                
                   <h1 className="text-2xl text-center text-white place-content-center">Find us on</h1>
                
                
                            <p className="text-sm lg:text-xl md:text-xl text-white">
                            {" "}
                            <Email color="secondary" /> badeheenterprisesltd@gmail.com
                        </p>
                
                
                    <p className="text-sm lg:text-xl md:text-xl text-white">
                    {" "}
                    <AddLocationIcon color="secondary" /> Mwanza Tanzania{" "}
                     </p>
                
              
             
              <div className="flex-row space-x-6">
                <YouTube color="secondary" onClick={YouTube1} />
                <Instagram color="secondary" onClick={Instagram1} />
                <FacebookRounded color="secondary" onClick={facebook1} />
                <WhatsApp color="secondary" onClick={facebook1} />
                <Twitter color="secondary" onClick={WhatsApp1} />
              </div>
              
                
                    <h1 className="text-2sm text-center text-white place-content-center">
                        website design and created by cacious system
                        <span className="text-1xl text-center text-orange-600  mb-40   place-content-center"> mtawaliecast@gmail.com</span>
                    </h1>
                
              
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
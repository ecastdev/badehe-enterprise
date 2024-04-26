'use client';
import { useRef, useState,useEffect} from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './choose.css';
import { dataAnalyis, technology } from "../assest/assest";
// import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger)
function ChooseUs() {
    // const choseref = useRef();
    
    // const [preloader ,setPreloader] = useState(true);

    const chooseUs = [
        {
            iconn: dataAnalyis,
        analysig:'we are team oriented with uplevel skills , we  believe in customer satisification'
        },
        {
            iconn: technology,
        analysig:'we here to satisfy you  with our profesional work, providing different ICT skills '
        }
        
    ]
    const scrollref = useRef();
    useGSAP(() => {
        const choose = gsap.utils.toArray
        (scrollref.current.children);
        gsap.to("#choose ",{
            color: 'purple',
            ease:'power1.inOut',
            textDecorationLine:'underline',
            marginBottom:'20px',
            textDecoration:'underline',
            textEmphasisColor:'blueviolet',
            scrollTrigger: {
                trigger: "#choose",
                start: 'top 50%',
                end: 'top 30%',
                scrub: true,
            }
        })
        // choose2 
        gsap.to("#choose2 ",{
            opacity: 1,
            ease:'back.in',
            translateX: 0.3,
            y: 50,
            stagger: {
                each: 0.3,
            },
            
            
            scrollTrigger: {
                trigger: "#choose2",
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            }
        })
    
    }, []);
    return(
        <div ref={scrollref}  className="flex  my-4  flex-col items-center w-screen lg:h-screen text-center ">
            <h1 className=" sm:text-2xl lg:text-4xl text-white  "> Why</h1>
            <h2 id="choose"  data-scroll data-scroll-speed='0.3' className=" font-title text-4xl lg:text-8xl  text-white my-2 " >Choose Us</h2>
            <div id="choose2"  className=" flex  flex-col lg:flex md:flex  items-center justify-between opacity-0 my-10">
                {chooseUs.map((chose) => (
                    <div  className=" max-w-72 md:max-w-6xl lg:max-w-3/4 lg:max-w-5xl rounded-2xl  border shadow-2xl shadow-slate-800 my-8">
                        <img
                        src={chose.iconn}
                        alt=" choose us"
                        className=" w-3/4 lg:w-2/4 h-52 relative items-center "
                        />
                    <p className=" text-white text-xl lg:text-2xl text-center py-4 mb-9  relative">
                       {chose.analysig}
                    </p>
                </div>
                ))}
            </div>

        </div>
    );

}

export default ChooseUs;
import React from "react";
import { motion } from "framer-motion";

import '../card.css';
import { useRef, useState,useEffect} from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import badehestore from "../../firebase-badehe/firebase-badehe";
import Fab from '@mui/material/Fab';
import { getDocs,collection } from "firebase/firestore";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Oil = ({ title }) => {
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
    gsap.to("#explore ",{
        y: 100,
        opacity: 1,
        duration: 0.3,
        stagger: {
            each: 0.1,
        },
        
        
        
    })
  }, []);
  // fetcg data from firebase
 
  const [datafire, setdatafire] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        // const dataRef = firestore.collection("your_collection");
        const querySnapshot = await getDocs(collection(badehestore, "oil"));
        // const snapshot = await dataRef.get();
        const items = querySnapshot.docs.map((doc) => doc.data());
        setdatafire(items);
      };
  
      fetchData();
  }, []);

// alert button
 
// send purchase
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_e8sdnl3', 'template_pe19lfm', form.current, {
      publicKey: 'aBMvP0hRI_iL9-SNY',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message submitted ",
          showConfirmButton: false,
          timer: 1500
        });
      
      },
      (error) => {
        console.log('FAILED...', error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "check your internet connection !",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      },
    );
};


return (
  <div ref={scrollref}   className=" grid gap-4 grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-5  place-content-center items-center" >
    {datafire.map((badehe) =>(
    <div id="explore" className="  group  hover:opacity-0 relative grid max-w-52 md:max-w-60 lg:max-w-72 max-h-72   rounded-lg bg-purple-200 shadow-xl shadow-slate-900 transition-shadow">
       <img src={badehe.thePicture} alt="img"/>
       <p className="text-lg lg:text-xl text-purple-500 text-center">{badehe.Btitle}</p>
       {/* hover button */}
       
            {/* dialog popup form */}
            <Popup trigger=
                {
                  <div className=" transition  text-center transform mt-16 shadow-lg shadow-purple-900
        translate-y-8 ease invisible    absolute group-hover:visible pr-10 m1-4
        text-white  group-hover:translate-y-0 rounded-full focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 ">
           <Fab variant="extended" color="secondary" >
                {/* <NavigationIcon sx={{ mr: 1 , color:'secondary'}} /> */}
                        Purchase
            </Fab> 
            </div>
                } 
                modal nested>
                {
                    close => (
                        <div className='modal bg-purple-200'>
                            <form className='grid py-4' ref={form} onSubmit={sendEmail}>
                    <label className='font-bold text-orange-500 text-sm lg:text-xl md:text-lg text-center'>Name</label>
                    <input type="text" name="user_name" placeholder='write your name' className=" my-3 text-center border border-orange-600 rounded-lg focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50" />
                    <label className=' font-bold text-orange-500 text-sm lg:text-xl md:text-lg text-center'>Email</label>
                    <input type="email" name="user_email" placeholder='write your email' className="  my-3 text-center border border-orange-600 rounded-lg focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50" />
                    <label className='text-orange-500 font-bold text-sm lg:text-xl md:text-lg text-center'>Submit your purchase</label>
                    <textarea name="message" className=" my-3 text-center border border-orange-600 rounded-lg focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50" />
                    <input className='bg-gradient-to-r from-rose-900 to-rose-400 bg-clip rounded-2xl my-3' type="submit" value="Send" />
                </form>
                            {/* <div>
                                <button className="text-center bg-gradient-to-r from-rose-900 to-rose-400 bg-clip rounded-lg" onClick=
                                    {() => close()}>
                                        Cloe
                                </button>
                            </div> */}
                        </div>
                    )
                }
            </Popup>
            
         
       </div>
  
    ))}
  </div>
  );
};
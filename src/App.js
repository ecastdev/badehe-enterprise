'use client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import './index.css';
// import Oil from "./components/explore/explore_pages/oil";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useEffect, useRef, useState } from "react";
import Nav from "./components/explore/navbar/nav";
import Intro from "./components/intro/intro";
import ChooseUs from "./components/choose-us/choose_us"; 
// import All from "./components/explore/explore_pages/all";
import Adve from "./components/explore/explore_pages/adve";
import Team1 from "./components/team/team";
import Chatroom from "./components/chatroom/chatroom";
import Form from "./components/chatroom/sendemail";
// import CarouselBasicExample from "./components/Ourproject/ourproject";
import Footer from "./components/footer/footer";
// import UseLocoScroll from "./userScreen";
import { Banner } from "./components/explore/explore_pages/banner";
// import Blog from "./components/blog/blog";
// import AutoPlayMethods from "./components/blog/blog";
import { ScrollTrigger } from "gsap/all";
import { Buscard } from "./components/explore/explore_pages/buscard";
import { Buslogo } from "./components/explore/explore_pages/buslogo";
import { Calendar } from "./components/explore/explore_pages/calendar";
import { Cctvinst } from "./components/explore/explore_pages/cctvinst";
import { Cv } from "./components/explore/explore_pages/cv";
import { Finacial } from "./components/explore/explore_pages/finaciall";
import { Foodsupply } from "./components/explore/explore_pages/foodsupply";
import { Netinstallation } from "./components/explore/explore_pages/netinstallation";
import { Other } from "./components/explore/explore_pages/other";
import { Plumbing } from "./components/explore/explore_pages/plumbing";
import { Web } from "./components/explore/explore_pages/web";
// import Ourproject from "./components/Ourproject/ourproject";
import Poster from "./components/explore/explore_pages/poster";
import ExploreService from "./components/explore/explore";
import {  RouterProvider,  createHashRouter } from 'react-router-dom';
import Electrical from './components/explore/explore_pages/elecrical';
import { Oil } from './components/explore/explore_pages/oil';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Oil } from "./components/explore/explore_pages/oil";

gsap.registerPlugin(ScrollTrigger);
function App() {
//   const scrollref = useRef();
//   useGSAP(() => {
//     const choose = gsap.utils.toArray
//     (scrollref.current.children);
//     choose.forEach((container, index) => {
//       const islast = index === choose.length - 1;
//       gsap.
//       timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: ' top top',
//             scrub: 1,
//         },
//     })
//       gsap.to(container,{
//         startAt: { filter: "brightness(100%) blur(0px)"},
//         filter: islast ? 'none' : "brightness(100%) blur(0px)",
//         scale: 0.9,
//         borderRadius: 48,
//         ease: "none",
//     }, '<')
//     })
    
// }, []);

// locomotive scrol
// useEffect(() => {
//   const initializeLocomotiveScroll = async () => {
//     const { default: LocomotiveScroll } = await import('locomotive-scroll');
//     const locomotiveScroll = new LocomotiveScroll();
//   };

//   initializeLocomotiveScroll();

// }, []);


  const router = createHashRouter([
    {
      path: "/",
      element: <ExploreService/>,
      errorElement: <h1 className='text-white text-center text-3xl'>loading......</h1>,
      children: [
        {
          path: "/",
          element: <Banner/>
        },
        {
          path: "expore_pages/buscard",
          element: <Buscard/>
        },
        {
          path: "expore_pages/buslogo",
          element: <Buslogo/>
        },
        { 
          path: "expore_pages/calendar",
          element: <Calendar/>
        },
        {
          path: "expore_pages/cctvinst",
          element: <Cctvinst/>
        },
        {
          path: "expore_pages/cv",
          element: <Cv/>
        },
        {
          path: "explore_pages/finacial",
          element: <Finacial/>
        },
        {
          path: "explore_pages/poster",
          element: <Poster/>
        },
        {
          path: "expore_pages/adve",
          element: <Adve/>
        },
        {
          path: "expore_pages/foodsupply",
          element: <Foodsupply/>
        },
        {
          path: "page/networkInstallation",
          element: <Netinstallation/>
        },
        {
          path: "expore_pages/oil",
          element: <Oil/>
        },
        {
          path: "page/Itissues",
          element: <Other/>
        },

        {
          path: "explore_pages/plumbing",
          element: <Plumbing/>
        },
        {
          path: "expore_pages/webdev",
          element: <Web/>
        },
        {
          path: "expore_pages/electrical",
          element: <Electrical/>
        },
        // {
        //   path: "expore_pages/oil",
        //   element: <Oil/>
        // },
        

      ]
    },
   

  ]);
  console.log(router)
  
  return (
    <div className="app w-full overflow-hidden">
      
      
    <Nav/>
      <div  className=" flex flex-col w-full  ">
     
         <Intro/>
         <ChooseUs/>
          <div className='relative w-full '>
            <div className=''>
            
         
            <RouterProvider router={router}/>
           
            </div>
            <div className=' '>
           
            </div>
            <div className=' '>
            <Team1/>
              
            </div>
        </div>
       
        
       
        
        <div className="grid lg:flex md:flex  w-screen  justify-around items-center gap-3">
          <Chatroom/>
          <Form/>
        </div>
          <Footer/>
      
      </div>
    
    </div>

  );
}

export default App;

import * as React from 'react';
import { useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { Outlet, Link } from 'react-router-dom';
import Test from '../test';
import TestMobile from '../intro/test2';


export default function ExploreService() {
  
  
  // firebase data
  // const [datafire, setdatafire] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //       // const dataRef = firestore.collection("your_collection");
  //       const querySnapshot = await getDocs(collection(fstore, "toplist_cacious"));
  //       // const snapshot = await dataRef.get();
  //       const items = querySnapshot.docs.map((doc) => doc.data());
  //       setdatafire(items);
  //     };
  
  //     fetchData();
  // }, []);
  useGSAP(() => {
    gsap.from('#scrol', {
      xPercent: 200,
      stagger: 0.05,
      ease: 'back.out',
      duration: 1,
      scrollTrigger: {
        trigger: '#scrol',
        start: 'bottom bottom',
        end: 'top 30%',
        scrub: 1,
        marker: true,
      },
    });
  }, []);

  return (
    <div className='lg:overflow-hidden  flex flex-col   bg-purple-300 w-screen h-96 md:h-96  lg:h-96 mb-20 lg:mb-24 my-32 '>
      <h1 id='scrol' className=' font-subt text-center text-white text-clip text-2xl md:text-5xl lg:text-4xl'>
        Explore <br />
        <span className=' font-title text-center text-slate-600 text-clip text-2xl md:text-5xl lg:text-5xl'>
          Our trusted Services
        </span>
      </h1>
      <div className=' mb-10'>
        {/* on mobile */}
          <div className=' lg:hidden left-0  '>
              <div className=' ml-9 '>
                <TestMobile/>
              </div>
              <div className=' my-3  lg:my-14'>
                <Outlet/>
              </div>
          </div>
          {/* on big screen */}
          
        <div className=' hidden lg:block    '>
          <div className=' ml-9 flex '>
              <Test/>
              <div className='  my-14 ml-9'>
                 <Outlet/>
                </div>
          </div>
          
        </div>
        
        
      </div>
    </div>
  );

}
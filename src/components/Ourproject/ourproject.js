// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper} from 'swiper/react';
import { badevits,  } from '../assest/assest'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Ourproject() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-7xl  rounded-lg mt-32 md:my-52 lg:my-96 "
      >
       <video src={badevits} controls className=' max-w-3xl max-h-96'/>
        
      </Swiper>
    </>
  );
}

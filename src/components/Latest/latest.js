import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './latest.css';
import { badevits, dataAnalyis, questions } from '../assest/assest';
function OurNews(){
    const dailyNews = [
        {
            news: ''
        }
    ]
    return(
        <div className="grid  mt-32 md:my-52 lg:my-96 w-screen  place-content-center  max-w-7xl  ">
            <h1 className="  text-4xl lg:text-6xl text-center text-slate-200 text-clip">Latest News</h1>
            <p className='  font-subt font-light text-xl text-slate-400 mt-6 lg:mt-12 text-center '>Look more for what we have for you</p>
           

             
                      <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        speed={600}
                        parallax={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[Parallax, Pagination, Navigation]}
                        className="mySwiper  rounded-2xl h-96 w-3/4 mt-10 lg:mt-20"
                        id='mySwiper'
                          >
                    <div
                      slot="container-start"
                      className="parallax-bg relative"
                      data-swiper-parallax="-23%"
                    ></div>
                  <SwiperSlide className='relative'>
                    <div className="title text-purple-200 font-extrabold text-center text-2xl  lg:text-5xl  mt-6" data-swiper-parallax="-300">
                    <span className='bg-gradient-to-r from-rose-900 to-purple-400 text-transparent bg-clip-text'>Computer <br/>  Application</span> <br/> Courses and Programing 
                    </div>
                    <div className='flex items-center ml-20 justify-center'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <ul className=' mt-2'>
                                <li className='text-slate-200 text-sm lg:text-xl text-center'>-Ms Word</li>
                                <li className='text-slate-200 text-sm lg:text-xl text-center'>-Ms excel</li>
                                <li className='text-slate-200 text-sm lg:text-xl text-center'>-Microsoft power point</li>
                  
                              </ul>
                        
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                          {/* <img src={dataAnalyis} alt='img' className='w-32 h-32 lg:w-72 lg:h-72'/> */}
                        </div>
                    </div>
                    <p className="text-rose-300 text-sm lg:text-xl mb-2 text-center mt-3 lg:mt-2"> course duration 6 weeks</p>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" text-3xl bg-gradient-to-r from-rose-900 to-purple-400 bg-transparent bg-clip-text text-white text-center mt-10 font-bold  underline decoration-rose-500" data-swiper-parallax="-300">
                      Graphic design
                    </div>
                    <div className="flex  mt-7 ml-52 items-center" data-swiper-parallax="-200">
                      <p className='subtitle text-center text-white text-2xl'>Do you wish to be designer</p> 
                      <img src={questions} className='w-52 h-32'/>
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                      <p className='text-center text-xl lg:text-2xl text-white'>
                      graphic design course:
                      <li className='text-center text-sm lg:text-2xl text-white'>ADOBE PHOTOSHOP</li>
                      <li className='text-center text-sm lg:text-2xl text-white'>ADOBE ILLUSTRATOR</li>
                      <li className='text-center text-sm lg:text-2xl text-white'>FIGMA</li>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  </SwiperSlide>
                </Swiper>
          
             
            
        </div>

    );

}

export  default OurNews;
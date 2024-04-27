import {  BusinessSharp, CalendarViewDay, Camera, Computer, Dashboard, DesignServices, ElectricalServices, FoodBank,  NetworkWifi, OilBarrel,  Plumbing  } from '@mui/icons-material';
// import Toolbar from '@mui/material/Toolbar';
// import Divider from '@mui/material/Divider';
// import React, { Component } from "react";
// import "react-alice-carousel/lib/alice-carousel.css";
// import "react-alice-carousel/lib/alice-carousel.css";
// import AliceCarousel from 'react-alice-carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const { Link, NavLink } = require("react-router-dom");

function TestMobile(){
    const sidebarData = [
        {
            sidetitle:'All',
            icon:<Dashboard color='secondary'/> ,
            myto: '/',
        },
        {
            sidetitle:'CCTV installation',
            icon:<Camera color='secondary'/>, 
            myto: 'expore_pages/cctvinst',
        },
        {
            sidetitle:'Web development',
            icon:<Camera color='secondary'/>, 
            myto: 'web',
        },
        {
            sidetitle:'Poster Design',
            icon:<DesignServices color='secondary'/>, 
            myto: 'expore_pages/poster',
        },
        {
            sidetitle:'Cv making',
            icon:<DesignServices color='secondary'/>, 
            myto: 'expore_pages/cv',
        },
        {
            sidetitle:'Bussiness Logo Design',
            icon:<DesignServices color='secondary'/>, 
            myto: 'expore_pages/buslogo',
        },
        {
            sidetitle:'Advertisement Design',
            icon:<DesignServices color='secondary'/>,
            myto: 'expore_pages/adve',
        },
        {
            sidetitle:'Calendar Design',
            icon:<CalendarViewDay color='secondary'/>, 
            myto: 'expore_pages/calendar',
            
        },
        {
            sidetitle:'Network Installation',
            icon:<NetworkWifi color='secondary'/>,
            myto: 'page/networkInstallation', 
        },
        {    
            sidetitle:'Electrical wire installation',
            icon:<ElectricalServices color='secondary'/>, 
            myto: 'expore_pages/electrical',
        },
        {
            sidetitle:'other related IT issues',
            icon:<Computer color='secondary'/>, 
            myto: 'page/Itissues',
        },
        // two
        {
            sidetitle:'Food supply',
            icon:<FoodBank color='secondary'/>, 
            myto: 'expore_pages/foodsupply',
        },
        {
            sidetitle:'Pluming services',
            icon:<Plumbing color='secondary'/>, 
            myto: 'explore_pages/plumbing',
        },
        {
            sidetitle:'Mineral oil',
            icon:<OilBarrel color='secondary'/>,
            myto: 'expore_pages/oil',
            
        },
        {
            sidetitle:'Finacial Business',
            icon:<BusinessSharp color='secondary'/>, 
            myto: 'explore_pages/finacial',
        },
    ]
    // const sidebarData2 = [
    //     {
    //         sidetitle:'Food supply',
    //         icon:<FoodBank color='secondary'/>, 
    //         myto: 'expore_pages/foodsupply',
    //     },
    //     {
    //         sidetitle:'Pluming services',
    //         icon:<Plumbing color='secondary'/>, 
    //         myto: 'page/plumbing',
    //     },
    //     {
    //         sidetitle:'Mineral oil',
    //         icon:<OilBarrel color='secondary'/>,
    //         myto: 'expore_pages/oil',
            
    //     },
    //     {
    //         sidetitle:'Finacial Business',
    //         icon:<BusinessSharp color='secondary'/>, 
    //         myto: 'page/networkInstallation',
    //     },
    // ]
    // scroll

    return(

        
            <nav className=' m-0 ml-0 h-12 bg-purple-900  border-neutral-700/80 justify-center overflow-auto'>
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className=' flex  justify-between items-center'>
                        <ul className=" flex  space-x-12">
                        {sidebarData.map((side1) =>(
        
                        <Link to={side1.myto} className=' text-sm text-white   text-center'>
                                    {side1.sidetitle}
                            </Link>
                        ))}   
                        
                        </ul>
                    </div>
                </div>
               
            </nav>
    )
}

export default TestMobile;
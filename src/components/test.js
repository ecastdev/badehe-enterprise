import { BusinessSharp, CalendarViewDay, Camera, Computer, Dashboard, DesignServices, ElectricalServices, FoodBank,  NetworkWifi, OilBarrel,  Plumbing  } from '@mui/icons-material';
// import Toolbar from '@mui/material/Toolbar';
// import Divider from '@mui/material/Divider';
// import React, { Component } from "react";
// import Slider from "react-slick";


const { Link, NavLink } = require("react-router-dom");

function Test(){
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
            myto: 'explore_pages/poster',
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
        
    ]
    const sidebarData2 = [
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
    // scroll
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     vertical: true,
    //     verticalSwiping: true,
    //     swipeToSlide: true,
    //     beforeChange: function(currentSlide, nextSlide) {
    //       console.log("before change", currentSlide, nextSlide);
    //     },
    //     afterChange: function(currentSlide) {
    //       console.log("after change", currentSlide);
    //     }
    //   };
    return(
        
            <div className="grid  gap-2">
                
                    {sidebarData.map((side1) =>(
                        <Link to={side1.myto} className='text-slate-900 text-xl  w-full h-full'>
                            <div className='flex gap-5'>
                                {side1.icon}
                                {side1.sidetitle}
                            </div>
                        </Link>
                    ))}
                    <h1 className='text-white text-2xl text-center'>explore  more</h1>
                    {sidebarData2.map((side1) =>(
                        <Link to={side1.myto} className='text-slate-900 text-xl w-full h-full'>
                            <div className='flex gap-5'>
                                {side1.icon}
                                {side1.sidetitle}
                            </div>
                        </Link>
                    ))}

               
                
            </div>
        
    )
}

export default Test;
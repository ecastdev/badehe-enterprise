// import React, { useRef } from "react";
import { finacial } from "../assest/assest";
import { Carousel } from 'antd';
import '../blog/blog.css';

function AutoPlayMethods() {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
    
  
  return (
    <div className=" grid"  >
      {/* <img id='blog' src={blog} alt="img" className=""/> */}
      
    
    <h1 className="text-white text-2xl text-center">Daily Updates</h1>
          <Carousel  afterChange={onChange} className="w-3/4 ml-20 my-6" >
              
                <img src={finacial} alt="img" className="h-96 rounded-lg bg-cover"/>
               
                
            
          </Carousel>
    </div>
  );
}
export default AutoPlayMethods;

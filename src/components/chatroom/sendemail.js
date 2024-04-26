import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Form(){
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
    return(
        <div className='flex'>
            <div className='grid py-2 items-center place-content-center '>
                <h1 className='text-sm lg:text-2xl md:text-2xl text-white'>Write a message to us and will be their for you</h1>
                <form className='grid py-4' ref={form} onSubmit={sendEmail}>
                    <label className='text-orange-500 text-sm lg:text-xl md:text-lg text-cnter'>Name</label>
                    <input type="text" name="user_name" placeholder='write your name' />
                    <label className='text-orange-500 text-sm lg:text-xl md:text-lg text-cnter'>Email</label>
                    <input type="email" name="user_email" placeholder='write your email' />
                    <label className='text-orange-500 text-sm lg:text-xl md:text-lg text-cnter'>Message</label>
                    <textarea name="message" />
                    <input className='bg-gradient-to-r from-rose-900 to-rose-400 bg-clip rounded-2xl my-3' type="submit" value="Send" />
                </form>
            </div>
            <div>
                
            </div>
        </div>
    )

}
 export default Form;





 
import { Menu, X } from "@mui/icons-material";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
// import logo from './logo_badede.jpeg'
import { FacebookRounded, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
// import { auth, app } from "./chatfirebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import { getFirestore,onSnapshot, collection, addDoc, orderBy, query, serverTimestamp} from 'firebase/firestore';
import {  useEffect } from 'react';
import { logo } from "../../assest/assest";
import { app, auth } from "../../firebase-badehe/firebase-badehe";


const db = getFirestore(app) ; 

function Nav(){
    const [user, setUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
    // facebook
    const facebook1 = () => {
        
        window.open('hhttps://www.facebook.com/share/VtnjR8TKBobAqDpX/?mibextid=qi2Omg');

 }
 // you 
 const YouTube1 = () => {
   
    window.open('https://youtube.com/@chawassaonlinetv3739?si=57SSnvY12y2bSlCf');
    
}// what's 
const WhatsApp1 = () => {
    
    window.open('https://x.com/BOSSY34230116?t=zAdfzpprSvp8tdwhIoXX3A&s=09');
  };

// insta
const Instagram1 = () => {
    window.open('https://www.instagram.com/badehe_enterprises_ltd?igsh=Z3kzbDc5OXRicjVr', '_blank');
  };

    // const [active, setActive] = useState(nav[0].label);
    const nav = [
        {
            listNma :'Home',
            label:"#"
        },
        {
            listNma :'Services',
            label:"#cctv"
        },
        {
            listNma :'About',
            label : '#foot'
        },
        {
            listNma :'Contact',
            label : '#contact'
        },
    ];
    const [mobileOpen, setMobileOpen] = useState(false);
    const toogleNav = ()=>{
        setMobileOpen(!mobileOpen);

    }
    // sign in
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider()
      
        try {
      
        await signInWithPopup(auth, provider)
      
          
        } catch (error) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "check your internet connection !",
        //     footer: '<a href="#">Why do I have this issue?</a>'})
          console.log(error)
        }
      }
      useEffect(() => {
        onAuthStateChanged(auth, user => {
          if(user) {
            setUser(user)
          } else {
            setUser(null)
          }
        })
    }, [])
      
    
    
    return(
        <nav className=" fixed z-50  top-0  w-full py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm ">
                <div className=" flex  justify-between items-center ">
                    <div className=" flex items-center flex-shrink-0">
                        <img className="h-16 w-16 lg:h-24 lg:w-32 mr-2 " src={logo} alt="logo"/>
                    </div>
                    <ul className=" hidden lg:flex ml-14 space-x-12">
                        {nav.map((items, index) =>(
                            <li className=" hover:bg-gradient-to-r from-rose-900 to-rose-400" key={index}>
                                    <a  key={items.label} className="text-white text-2xl"
                                     href={items.label} >{items.listNma}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-row space-x-6 hidden lg:block "> 
                        <YouTube color="secondary" onClick={YouTube1}/>
                        <Instagram color="secondary" onClick={Instagram1}/>
                        <FacebookRounded color="secondary" onClick={facebook1}/>
                        <WhatsApp color="secondary" onClick={facebook1}/>
                        <Twitter color="secondary" onClick={WhatsApp1}/>
                    </div>
                    {/* sign in */}
                    {user ? (
                        <div>
                        <img src={user.photoURL} className=" w-8 rounded-3xl"  alt={user}/>
                        <button className='mb-8  bg-rose-900 rounded-[10px] p-1 my-0' onClick={() => auth.signOut()}>Logout</button>
                        </div>
                    ): (
                       <Fab variant="extended" color="secondary" onClick={handleGoogleLogin}>
                        <NavigationIcon sx={{ mr: 1 , color:'secondary'}} />
                        Sign in
                    </Fab> 

                    )}
                    
                </div>
                
                <div className=" lg:hidden md:flex justify-end flex-col">
                  <div className="flex-row space-x-6 lg:hidden"> 
                        <YouTube color="secondary" onClick={YouTube1}/>
                        <Instagram color="secondary" onClick={Instagram1}/>
                        <FacebookRounded color="secondary" onClick={facebook1}/>
                        <WhatsApp color="secondary" onClick={facebook1}/>
                        <Twitter color="secondary" onClick={WhatsApp1}/>
                    </div>
                    <button onClick={toogleNav} className=" bg-gradient-to-r from-rose-900 to-rose-400">
                        {mobileOpen ?  <X/> : <Menu/> }
                    </button>

                </div>
                {mobileOpen && (
                    <div className="fixed right-0 z-20 bg-gradient-to-r from-rose-900 to-rose-400 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {nav.map((item, index) => (
                                <li key={index} className="py-4 ">
                                    <a className=" text-black text-2xl" href={item.label} > {item.listNma}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* <div className="flex space-x-0 items-center">
                    <p className="text-white "> <Phone color="secondary"/> +255752969288</p>
                    <p className="text-white "> <Phone color="secondary"/>+255674539916</p>
                </div> */}

            </div>
        </nav>
    )

}
export default  Nav;
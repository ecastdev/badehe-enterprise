import { useState, useEffect } from 'react';
import { GoogleAuthProvider,  onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore,onSnapshot, collection, addDoc, orderBy, query, serverTimestamp} from 'firebase/firestore';
// import { auth, app } from '../explore/navbar/chatfirebase';
import Swal from 'sweetalert2';
import { app, auth } from '../firebase-badehe/firebase-badehe';


const db = getFirestore(app) 


function Chatroom() {

  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    return unsubscribe
  }, [])
  
 
  useEffect(() => {
      onAuthStateChanged(auth, user => {
        if(user) {
          setUser(user)
        } else {
          setUser(null)
        }
      })
  }, [])

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp()
    })

    setNewMessage("")
  }
  

const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider()

  try {

  await signInWithPopup(auth, provider)

    
  } catch (error) {
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "check your internet connection !",
    //   footer: '<a href="#">Why do I have this issue?</a>'})
    console.log(error)
  }
}
  return (
    <div className='grid justify-center  py-10 ' >
      { user ? (
        <div className='flex flex-col justify-between items-center'>
            <h1 className='text-white text-sm lg:text-xl'> Welcome to our Chat {user.displayName}</h1>
                <textarea name="message"
                className='w-full h-auto'
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                />
            <button className=' bg-rose-900  rounded-[10px] hover:bg-slate-800 p-1' onClick={sendMessage}>Comment to our chat</button>
            {/* <button className='mb-8  bg-rose-900 rounded-[10px] p-1 my-0' onClick={() => auth.signOut()}>Logout</button> */}

            <div className="flex flex-col gap-5">

                {messages.map(msg => (
                <div  key={msg.id} className={`message flex ${msg.data.uid === user.uid ? 'justify-end' : 'justify-start  '}`}>
                <div className={`message flex flex-row p-3 gap-3 rounded-[20px] items-center ${msg.data.uid === user.uid ? ' text-white bg-slate-800' : ' bg-white '}`}>
                    <img className='w-10 h-10 rounded-full' src={msg.data.photoURL} />
                {msg.data.text}
                </div>
                </div>

                ))}
            </div>
        </div>
      ):
      <div className='flex flex-col items-center py-2 '>
        <p className=' text-sm md:text-lg lg:text-xl text-white'>Find more on our channel login to this site </p>
        {/* <button className='rounded-2xl  bg-gradient-to-r from-rose-900 to-rose-400 text-white p-2' onClick={handleGoogleLogin} >Login  </button> */}

      </div>
    
}
      </div>
  )
}

export default  Chatroom;
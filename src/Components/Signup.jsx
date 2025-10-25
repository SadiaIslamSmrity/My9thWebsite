import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { auth } from "../firebase/firebase.config";
import { toast, ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Signup = () => {
  const [show, setShow] = useState(false);
   const [user, setUser] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if(!email || !password) {
          toast.error("Please fill all fields");
          return;
        }

    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      return updateProfile(res.user, { displayName: name }).then(() => {
        setUser(res.user);
        toast.success(`Welcome ${name}!`);
      });
    }).catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address format!");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password must contain 1 uppercase, 1 lowercase and minimum 6 characters");
      } else if (error.code === "auth/network-request-failed") {
        toast.error("Network error! Check your internet connection.");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error("Email/password signup is disabled in Firebase.");
      } else if (error.code === "auth/internal-error") {
        toast.error("Internal server error. Try again later.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    })
  };
  const handleSignout = (e) => {
      signOut(auth).then(() => {
        toast.info("Signed out");
        setUser(null);
      }).catch(error => {
         toast.error(e.message);
      })
    };
  return (
    <div>
      {user? (<div className='lg:flex'>
        <img src={user?.photoURL || '/images/userChobi.png'} className='w-1/2 lg:w-1/4 h-auto m-5'/>
        <div className='lg:w-full lg:p-10'>
          <p className='text-4xl font-extrabold p-5'>Name:{user?.displayName}</p>
        <p className='text-3xl font-bold p-5'>Email:{user?.email}</p>
        <div className='w-full flex justify-center items-center lg:justify-start'><button onClick={handleSignout} className='bg-red-600 rounded text-white p-2 hover:bg-white hover:border hover:border-red-600 hover:text-red-600 hover:cursor-pointer hover:scale-110 transition ease-in-out text-2xl lg:text-4xl w-1/2 my-10'>Sign Out</button></div>
        </div>
      </div>)
      
      :(<div className='text-center flex items-center h-auto items-stretch'>
        <div className='bg-gradient-to-r from-blue-500 to-pink-500 text-white w-1/2 flex flex-col items-center justify-center'>
          <p className='text-3xl lg:text-5xl font-bold p-4'>Create An Account for Free!</p>
         
        </div>

        <form onSubmit={handleSignup} className='bg-white w-1/2 mx-auto p-10 h-full flex flex-col justify-content items-start justify-center'>
        <p className='text-2xl lg:text-4xl font-extrabold py-5'>Sign Up</p>
          <div className='flex flex-col gap-2 justify-content items-start justify-center w-full'>
          <label className='text-xl'>Name:</label>
            <input type='text' name='name' placeholder='Your Name' className='bg-white border border-gray-400 rounded p-1 placeholder-gray-400 w-full' />
          </div>
          <div className='flex flex-col gap-2 justify-content items-start justify-center w-full'>
            <label className='text-xl'>Email:</label>
            <input type='email' name='email' placeholder='example@email.com' className='bg-white border border-gray-400 rounded p-1 placeholder-gray-400 w-full' />
          </div>
          <div className='flex flex-col gap-2 justify-content items-start justify-center w-full pt-5 relative'>
            <label className='text-xl'>Password:</label>
            <input
              type={show ? "text" : "password"} name='password' placeholder='Enter Password' className=' w-full bg-white border border-gray-400 rounded p-1 placeholder-gray-400 ' />
            <span onClick={() => setShow(!show)} className='absolute right-1 top-15 cursor-pointer'>{show ? <IoEyeOff /> : <FaEye />}</span>
          </div>

          <button type='submit' className='bg-green-600 rounded text-white p-2 hover:bg-white hover:border hover:border-green-600 hover:text-green-600 hover:cursor-pointer hover:scale-105 transition ease-in-out text-xl w-full mt-5'>Sign Up</button>

           <div className='flex justify-items-center items-center'><p>Already have an account? </p> <NavLink to='/signin' className='mx-2 font-extrabold border-b m-3 text-gray-400 hover:text-black'>Sign In</NavLink></div>
        </form>
      </div>)}
      

    </div>
  )
}

export default Signup
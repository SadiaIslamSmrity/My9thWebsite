import React, { useState, useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router-dom'
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';


const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [show, setShow] = useState(false)
  const { user, setUser } = useOutletContext();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password).then((res) => {
      setUser(res.user);
      toast.success(`Welcome Back  ${res.user.displayName}!`);
    }).catch(error => {
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid email/password.");
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

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res);
      setUser(res.user);
      toast.success("Signed In");
    }).catch((e) => {
      console.log(e);
      toast.error(e.message);
    })
  };
  return (
    <div>
      <Helmet>
        <title>SignIn | ToyTopia</title>
      </Helmet>
      {user ? (<div className='lg:flex'>
        <img src={user?.photoURL || '/images/userChobi.png'} className='w-1/2 lg:w-1/4 h-auto m-5' />
        <div className='lg:w-full lg:p-10'>
          <p className='text-4xl font-extrabold p-5'>Name:{user?.displayName}</p>
          <p className='text-3xl font-bold p-5'>Email:{user?.email}</p>
          <div className='w-full flex justify-center items-center lg:justify-start'><button onClick={handleSignout} className='bg-red-600 rounded text-white p-2 hover:bg-white hover:border hover:border-red-600 hover:text-red-600 hover:cursor-pointer hover:scale-110 transition ease-in-out text-2xl lg:text-4xl w-1/2 my-10'>Sign Out</button></div>
        </div>
      </div>)


        : (<div className='text-center flex h-auto items-stretch'>
          <form onSubmit={handleSignin} className='bg-white w-1/2 mx-auto p-10 h-full flex flex-col justify-content items-start justify-center'>
            <p className='text-2xl lg:text-4xl font-extrabold py-5'>Login</p>
            <div className='flex flex-col gap-2 justify-content items-start justify-center w-full'>

              <label className='text-xl'>User Email:</label>
              <input type='email' name='email' placeholder='example@email.com' className='bg-white border border-gray-400 rounded p-1 placeholder-gray-400 w-full' />
            </div>
            <div className='flex flex-col gap-2 justify-content items-start justify-center w-full pt-5 relative'>
              <label className='text-xl'>Password:</label>
              <input
                type={show ? "text" : "password"} name='password' placeholder='Enter Password' className=' w-full bg-white border border-gray-400 rounded p-1 placeholder-gray-400 ' />
              <span onClick={() => setShow(!show)} className='absolute right-1 top-15 cursor-pointer'>{show ? <IoEyeOff /> : <FaEye />}</span>
            </div>
            <button type='submit' className='bg-green-600 rounded text-white p-2 hover:bg-white hover:border hover:border-green-600 hover:text-green-600 hover:cursor-pointer hover:scale-105 transition ease-in-out text-xl w-full mt-5'>Log In</button>

            <NavLink to='/forget' className='text-blue-400 py-2'> Forgot password?</NavLink>

            <div className='text-center w-full text-gray-400'>Or</div>

            {/* google signin */}
            <button type='button' onClick={handleGoogleSignin} className='cursor-pointer border border-blue-500 p-1 rounded-2xl flex justify-content justify-center items-center hover:bg-blue-50 my-5 w-full'> <img src="/images/googleimg.png" className='h-8' /> Continue with google</button>

            <div className='flex justify-items-center items-center'><p>New Here? </p> <NavLink to='/signup' className='mx-2 font-extrabold border-b m-3 text-gray-400 hover:text-black'>Sign Up</NavLink></div>
          </form>
          <div className='bg-gradient-to-r from-blue-500 to-pink-500 text-white w-1/2 flex flex-col items-center justify-center'>
            <p className='text-3xl lg:text-5xl font-bold p-4'>Please Log Into Your Account</p>

          </div></div>)}
    </div>
  )
}

export default Signin 
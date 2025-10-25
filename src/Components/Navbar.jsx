import { img } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = ({ user }) => {
    return (
        <div className='bg-white py-5 w-full sticky top-0 left-0 z-50'>
            <div className='flex justify-around items-center '>
                <div className='flex items-center'>
                    <img className='h-15' src="/images/logo.png" />
                    <NavLink to='/'> <p className='font-extrabold text-4xl hover:cursor-pointer'><span className='text-pink-500'>Toy</span><span className='text-blue-500'>Topia</span></p>
                    </NavLink>
                </div>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-pink-600 text-xl font-semibold border-b-3 border-pink-600 hover:cursor-pointer" : "text-gray-500 text-xl font-base hover:cursor-pointer"}
                >
                    Home
                </NavLink>
                <NavLink to='/store' className={({ isActive }) => isActive ? "text-pink-600 text-xl font-semibold border-b-3 border-pink-600 hover:cursor-pointer" : "text-gray-500 text-xl font-base hover:cursor-pointer"}
                >
                    Visit Store
                </NavLink>
                {user ? (
                    <NavLink to='/signin'>
                    <div className="flex flex-col gap-4 items-center relative">
                        {user.photoURL || <img className='h-12' src="/images/userChobi.png"/>}
                        <div className='absolute top-0 opacity-0 hover:opacity-100 text-xl font-bold py-10'>{user?.displayName}</div>
                    </div>
                    </NavLink>
                    
                ) : (
                    <NavLink to='/signin' className={({ isActive }) => isActive ? "text-pink-600 text-xl font-semibold border-b-3 border-pink-600 hover:cursor-pointer" : "text-gray-500 text-xl font-base hover:cursor-pointer"}
                >
                    Log In
                </NavLink>
                )}
                
            </div>
        </div>
    )
}

export default Navbar

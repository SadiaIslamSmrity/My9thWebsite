import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
            <div className='bg-gradient-to-l from-blue-800 to-pink-800 p-10 lg:px-20 py-5 '>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center w-1/3'>
                        <img className='h-7' src="/images/logo.png"/>
                    <NavLink to='/'> <p className='font-extrabold text-2xl'><span className='text-pink-300'>Toy</span><span className='text-blue-300'>Topia</span></p>
                    </NavLink>
                    </div>

                    <div className='w-1/3'>
                    <ul className='list-none text-gray-300'>
                        <li className='font-bold text-white'>About Us</li>
                        <li><NavLink>Terms And Conditions</NavLink></li>
                        <li><NavLink> Services</NavLink></li>
                        <li><NavLink>Privacy Policy</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                    </ul>
                    </div>

                    <div className='w-1/3'>
                    <ul className='list-none text-gray-300'>
                        <li className='font-bold text-white'>Socials</li>
                        <li><NavLink to='https://www.facebook.com'>Facebook</NavLink></li>
                        <li><NavLink to='https://www.instagram.com'>Instagram</NavLink></li>
                        <li><NavLink to='https://www.linkedin.com'>LinkedIn</NavLink></li>
                        <li><NavLink to='https://www.tiktok.com'>TikTok</NavLink></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
export default Footer
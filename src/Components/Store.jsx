import React from 'react'
import useToys from '../useToys';
import { NavLink } from 'react-router-dom';
import FadeInSection from './FadeInSection';
import { div } from 'framer-motion/client';
import { Helmet } from 'react-helmet-async';

const Store = () => {
  const { toys } = useToys()

  return (

    <div className='bg-blue-100 '>
      <Helmet>
        <title>Store | ToyTopia</title>
      </Helmet>
      <p className='text-4xl lg:text-6xl font-extrabold text-center pt-10'>All Our Collections</p>
      <div className='relative'>
        <img src="/images/shop.jpg" className='h-auto w-full p-10 opacity-50' />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl lg:text-7xl text-black font-extrabold text-center">
            Top Toys Available <br /> Online and In Store
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
        {toys.map(toy => (
          <FadeInSection>
            <div className='flex flex-col h-110 lg:h-110 rounded-2xl justify-center items-center bg-white p-3 text-center hover:scale-105 transition ease-in-out border-b-5 border-blue-300'>
              <img src={toy.pictureURL} className='object-cover h-50 w-full p-2' />
              <p className='font-bold text-xl lg:text-2xl'>{toy.toyName}</p>
              <p className='text-gray-400'>Developed By: <span className='text-black'>{toy.sellerName}</span></p>
              <p className='text-sm'>Ratings: {toy.rating}</p>
              <p className='text-xl text-blue-600 p-1'>${toy.price}</p>
              <NavLink to={`/details/${toy.toyId}`} className='bg-blue-600 rounded text-white p-2 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>View More</NavLink>
            </div>
          </FadeInSection>
        ))}
      </div>

    </div>
  )
}

export default Store

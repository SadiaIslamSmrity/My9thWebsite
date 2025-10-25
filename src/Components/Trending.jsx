import React from 'react'
import useToys from '../useToys'
import { NavLink } from 'react-router-dom'

const Trending = () => {
    const {toys} =useToys()

  return (
    <div className='bg-blue-100'>
        <p className='text-3xl font-extrabold text-center pt-10'>Most Popular Right Now</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10'>
                {toys.filter(toy => toy.rating > 4.6).map(toy => (
                    <div className='flex flex-col rounded-2xl justify-center items-center bg-white p-3 text-center hover:scale-105 transition ease-in-out border-b-5 border-blue-300'>
                    <img src={toy.pictureURL} className='object-cover h-50 w-full p-2'/>
                    <p className='font-bold text-xl lg:text-2xl'>{toy.toyName}</p>
                    <p className='text-sm'>Ratings: {toy.rating}</p>
                    <p className='text-red-600 font-bold '>Only {toy.availableQuantity} peices left !</p>
                    <p className='text-xl text-blue-600 p-1'>${toy.price}</p>
                    <NavLink to={`/details/${toy.toyId}`} className='bg-blue-600 rounded text-white p-2 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>View More</NavLink>
                </div>
                ))}
            </div>
    </div>
  )
}

export default Trending

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Signin from './Signin';
import useToys from '../useToys';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Details = () => {
  const { toyId } = useParams();
  const { toys, loading } = useToys();
  const { user } = useContext(AuthContext) || {};
  if (loading) {
    return <p className="text-center text-gray-500 mt-10"><div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
    </div>
    </p>;
  }
  const toy = toys.find((t) => String(t.toyId) === toyId);

  const handleTryNow = (e) => {
    e.preventDefault();
    console.log(e.target.email.value)
    const email = e.target.email.value;
    const name = e.target.name.value;
    if (!email || !name) {
      toast.error("Please fill all fields");
      return;
    }
    else {
      toast.success("Thank You For Your Participation!");
      return;
    }
  }
  return (
    <div>
      {user ? (<div>
        <div className='w-full bg-blue-50 '>
          <p className='w-full text-5xl lg:text-7xl p-10 font-extrabold text-center bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent'>Product Detail</p>
          <div className='flex flex-col-reverse lg:flex-row p-10 lg:p-20'>
            <div className='py-5'>
              <p className='text-gray-500 font-semibold'>{toy.subCategory}</p>
              <p className='text-3xl lg:text-5xl font-bold'>{toy.toyName}</p>
              <p className='text-gray-600 font-semibold'>{toy.description}</p>
              <p className='text-gray-500 font-semibold'>Manufactured By: <span className='text-2xl font-semibold text-black'>{toy.sellerName}</span></p>
              <p className='text-gray-500 font-semibold text-sm'>Contact: <a href={toy.sellerEmail} className='text-lg font-semibold text-blue-400 border-b border-blue-600'>{toy.sellerEmail}</a></p>
              <p className='text-3xl lg:text-5xl font-bold text-blue-800'>${toy.price}</p>
              <button className='bg-blue-600 rounded text-white p-2 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer hover:scale-110 transition ease-in-out m-5 ml-0 lg:text-2xl'>Add to Cart</button>
            </div>
            <div>
              <img src={toy.pictureURL} />
            </div>
          </div>
        </div>

        <form onSubmit={handleTryNow} className='bg-white w-1/2 mx-auto p-10 h-full flex flex-col justify-content items-start justify-center'>
          <p className='text-2xl lg:text-4xl font-extrabold py-5'>Try Now</p>
          <div className='flex flex-col gap-2 justify-content items-start justify-center w-full'>
            <label className='text-xl'>Name:</label>
            <input type='text' name='name' placeholder='Your Name' className='bg-white border border-gray-400 rounded p-1 placeholder-gray-400 w-full' />
          </div>
          <div className='flex flex-col gap-2 justify-content items-start justify-center w-full'>
            <label className='text-xl'>Email:</label>
            <input type='email' name='email' placeholder='example@email.com' className='bg-white border border-gray-400 rounded p-1 placeholder-gray-400 w-full' />
          </div>

          <button type='submit' className='bg-blue-600 rounded text-white p-2 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer hover:scale-105 transition ease-in-out text-xl w-full mt-5'>Try Now</button>
        </form>

      </div>) : (<Signin />)}
    </div>
  )
}

export default Details
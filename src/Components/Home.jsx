import React from 'react'
import Trending from './Trending'
import FadeInSection from './FadeInSection'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | ToyTopia</title>
      </Helmet>
            <div className='relative'>
                <img className='h-auto w-full' src="/images/bigphoto2.jpeg" />
                <div className='absolute text-blue-600 top-10 lg:top-20 left-10 lg:left-20 font-extrabold text-start'>
                    <p className='lg:text-2xl'>We provide</p>
                    <p className='text-3xl lg:text-6xl'>Every Toy You Need for Your Child</p>
                    <p className='text-sm pt-10'>Starts from <span className='text-2xl lg:text-5xl'>$9.99 only !</span></p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row w-full lg:p-15'>
                <div className='bg-gradient-to-b lg:bg-gradient-to-r from-blue-300 to-blue-100 text-3xl lg:text-5xl p-3 text-center items-center justify-center w-full lg:w-1/3 lg:m-3 lg:rounded lg:p-10 text-wrap font-semibold hover:scale-105 transition ease-in-out '>GET 20% OFF <br />on your first order</div>
                <div className='bg-gradient-to-b lg:bg-gradient-to-r from-pink-300 to-pink-100 text-3xl lg:text-5xl p-3 text-center items-center justify-center w-full lg:w-1/3 lg:m-3 lg:rounded lg:p-10 text-wrap font-semibold hover:scale-105 transition ease-in-out '>Collect points <br />with every order</div>
                <div className='bg-gradient-to-b lg:bg-gradient-to-r from-yellow-300 to-yellow-100 text-3xl lg:text-5xl p-3 text-center items-center justify-center w-full lg:w-1/3 lg:m-3 lg:rounded lg:p-10 text-wrap font-semibold hover:scale-105 transition ease-in-out'>Easy Return Policy</div>
            </div>

            <div className='w-full lg:flex'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className='w-full lg:w-1/2'
                >
                    <SwiperSlide><img src="/images/baby5.jpg" alt="Slide 1" className='w-full h-auto p-15' /></SwiperSlide>
                    <SwiperSlide><img src="/images/baby1.jpg" alt="Slide 2" className='w-full h-auto p-15' /></SwiperSlide>
                    <SwiperSlide><img src="/images/baby4.webp" alt="Slide 3" className='w-full h-auto p-15' /></SwiperSlide>
                    <SwiperSlide><img src="/images/baby6.jpg" alt="Slide 3" className='w-full h-auto p-15' /></SwiperSlide>
                    <SwiperSlide><img src="/images/baby2img.webp" alt="Slide 3" className='w-full h-auto p-15' /></SwiperSlide>
                </Swiper>

                <div className='w-full lg:w-1/3 flex justify-center items-center text-3xl font-bold p-10 lg:p-20 bg-pink-50'><p>Where Little Smiles Begin!<br/> And Playtime Starts <br/> And For Every Giggle and Grin.</p></div>

            </div>


            {/* <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full justify-center items-center bg-blue-100 py-10">
                    <div className='text-center'>
                        <p className='text-5xl font-extrabold text-red-500 '>GET 20% OFF <br/> on your first order </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full justify-center items-center bg-green-100 py-10">
                     <div className='text-center'>
                        <p className='text-5xl font-extrabold text-green-700 '>Collect points <br/>with every order</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full justify-center items-center bg-pink-100 py-10">
                    <div className='text-center'>
                        <p className='text-5xl font-extrabold text-black '>Easy Return Policy</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            {/* popular toys */}
            <Trending />
        </div>
    )
}

export default Home

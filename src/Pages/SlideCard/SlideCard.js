import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaLightbulb } from 'react-icons/fa';
import img1 from '../../asset/slide2.jpg'
const SlideCard = () => {


    return (
        < div className="carousel-item relative w-full rounded-md" >
            <div className='carousel-img h- w-full'>
                <img src={img1} className="w-full h-96 rounded-md" />
            </div>

            <div className="absolute ml-6  mt-44">
                <div className='bg-white p-3 rounded-lg w-10'>
                    <FaLightbulb></FaLightbulb>
                </div>
                <h1 className='text-xl font-bold text-white'>  Faster way to create web pages </h1>
                <p className='text-white text-lg'>That's my skill. I'm not really specifically talented at anything except for the ability to learn. </p>
                <div className='bg-white w-12 rounded-full p-4 mt-3 float-right'>
                    <AiOutlineSetting></AiOutlineSetting>
                </div>
            </div>

            <div className="absolute  flex justify-end transform -translate-y-4 left-5 right-5  bottom-60">
                <a className="btn btn-circle mr-5">❮</a>
                <a className="btn btn-circle">❯</a>
            </div>
        </div >
    );
};

export default SlideCard;
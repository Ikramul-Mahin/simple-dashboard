import React from 'react';
import { FaCoins, FaShoppingCart } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { MdOutlineCollectionsBookmark } from 'react-icons/md'
const NavCards = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>

            <div className="card w-60 bg-base-100 shadow-xl mb-8">
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-md">TODAY'S MONEY</h2>
                            <p className='text-md'>$53,000</p>
                        </div>
                        <div className='bg-cyan-500 rounded-full p-4'>
                            <FaCoins className='text-white'></FaCoins>
                        </div>
                    </div>
                    <div className="">
                        <h3><span className='text-green-500'>+55%</span> since yesterday </h3>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-md">TODAY'S USERS</h2>
                            <p className='text-md'>2,300</p>
                        </div>
                        <div className='bg-red-500 rounded-full p-4'>
                            <BiWorld className='text-white'></BiWorld>
                        </div>
                    </div>
                    <div className="">
                        <h3><span className='text-green-500'>+3%</span> since last week </h3>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-md">NEW CLIENTS</h2>
                            <p className='text-md'>+3,462</p>
                        </div>
                        <div className='bg-green-500 rounded-full p-4'>
                            <MdOutlineCollectionsBookmark className='text-white'></MdOutlineCollectionsBookmark>
                        </div>
                    </div>
                    <div className="">
                        <h3><span className='text-red-500'>-2%</span> since last quarter </h3>
                    </div>
                </div>
            </div>

            <div className="card w-60 bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="text-md">SALES</h2>
                            <p className='text-md'>$103,430</p>
                        </div>
                        <div className='bg-orange-500 rounded-full p-4'>
                            <FaShoppingCart className='text-white'></FaShoppingCart>
                        </div>
                    </div>
                    <div className="">
                        <h3><span className='text-green-500-500'>+5%</span> since last month </h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavCards;
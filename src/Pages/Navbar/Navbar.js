import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar w-full flex justify-between">
                <div className="text-left block">
                    <div className='text-white flex justify-center'>
                        <HiHome className='mt-1'></HiHome>
                        <div className='mx-1'>/</div>
                        <h1>Dashboard</h1>
                    </div>
                    <div className='text-white mt-2 flex'>
                        <h2 className='text-lg mr-16'>Dashboard</h2>
                        <FaBars className='text-xl '></FaBars>
                    </div>
                </div>

                <div>
                    <div className='mx-3'>
                        <input type="text" iconEnd={<BiSearchAlt2></BiSearchAlt2>} placeholder="Type here" className="input input-bordered h-8 w-full" />
                    </div>
                    <div className='flex justify-center align-baseline'>
                        <FaUserCircle className='text-white mt-1 mx-1'></FaUserCircle>
                        <h2 className='text-white'>Sign Up</h2>
                    </div>
                    <AiOutlineSetting className='text-white text-md mx-3'></AiOutlineSetting>
                    <IoNotificationsSharp className='text-white text-md'></IoNotificationsSharp>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
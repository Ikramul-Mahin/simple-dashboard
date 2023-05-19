import React from 'react';
import { BsDisplay } from 'react-icons/bs';
import { MdOutlineCalendarMonth, MdLibraryBooks } from 'react-icons/md';
import { FaMoneyCheck, FaUserAlt } from 'react-icons/fa';
import { SiVirtualbox } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';
import { SlNotebook } from 'react-icons/sl';
import older from '../../asset/folder-removebg-preview.png'
const LeftSidebar = () => {
    return (
        <div>
            <div className="card w-64 h-full bg-base-100 shadow-xl">

                <div className="card-body h-screen text-left">
                    <div>
                        <h2 className='text-md'>Argon Dashboard 2 PRO</h2>
                    </div>
                    <div className="flex flex-col w-full -mt-3 -mb-4 border-opacity-50">
                        <div className="divider"></div>
                    </div>

                    <div className='-mt-8 text-left'>
                        <ul className="menu p-4 w-48 bg-base-100 text-slate-400">
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <BsDisplay className='mt-1'></BsDisplay>
                                    <a>Dashboard</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <MdOutlineCalendarMonth className='mt-1 text-red-600'></MdOutlineCalendarMonth>
                                    <a>Tables</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <FaMoneyCheck className='mt-1 text-green-400'></FaMoneyCheck>
                                    <a>Billing</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <SiVirtualbox className='mt-1 text-sky-500'></SiVirtualbox>
                                    <a>Virtual Reality</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <TbWorld className='mt-1 text-red-600'></TbWorld>
                                    <a>RTL</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className='mb-0'>
                        <h2>Account Pages</h2>
                        <ul className="menu p-4 text-left w-48 bg-base-100 text-slate-400">
                            <li className='hover:text-base-content'>
                                <div className='flex text-left'>
                                    <FaUserAlt className='mt-1'></FaUserAlt>
                                    <a>Profile</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <MdLibraryBooks className='mt-1 text-orange-600'></MdLibraryBooks>
                                    <a>Sign In</a>
                                </div>
                            </li>
                            <li className='hover:text-base-content'>
                                <div className='flex'>
                                    <SlNotebook className='mt-1 text-blue-500'> </SlNotebook>
                                    <a>Diary</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <img className='' src={older} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LeftSidebar;
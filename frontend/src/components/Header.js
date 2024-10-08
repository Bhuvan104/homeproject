import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={'/'}><Logo w={100} h={90}></Logo></Link>
            </div>
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='Search product here' className='w-full outline-none '></input>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full'><CiSearch /></div>
            </div>
            <div className='flex items-center gap-7'>
                <div className='text-3xl cursor-pointer'>
                    <FaRegUserCircle />
                </div>
                <div className='text-2xl cursor-pointer relative'>
                    <FaCartArrowDown />
                    <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-sm'>0</p>
                    </div>
                </div>
                <div className='px-3 bg-red-600 py-1 rounded-full text-white hover:bg-red-700'>
                <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

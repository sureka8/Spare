import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className='container mx-auto grid grid-cols-3 h-96 gap-10'>
        <div className=' flex items-center justify-center'>
        <div className='flex space-x-3 items-center'>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaFacebookF className='text-orange-500 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaTwitter className='text-orange-500 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><FaInstagram className='text-orange-500 text-xl ' /></div>
          <div className='bg-slate-100 h-9 w-9 rounded-full p-2'><TbWorld className='text-orange-500 text-xl ' /></div>
        </div> 
        </div>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='  font-semibold'>QUICK LINKS</h1>
                <ul className='flex flex-col space-y-3 justify-center px-3 mt-5'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
        </div>
        <div className=' px-5 flex items-center justify-center  '>
        <div className='flex flex-col space-y-3  '>
                <input type='text' className='bg-slate-100 py-3 rounded-md w-full px-10 '  />
                <button className='text-white font-bold bg-orange-500 w-full rounded-md py-3'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer

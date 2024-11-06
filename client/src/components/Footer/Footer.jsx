import React from 'react'
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-12'>
    <div className='p-5'>
          <ul>
            <p className='text-gray-800 font-bold text-3xl pb-6'>
              Acadbud
            </p>
            {/* <div className='flex gap-6 pb-5'>
                 <AiFillInstagram href='https://www.instagram.com/navonmesh1103' className='text-2xl cursor-pointer hover:text-pink-600'/>
                 <FaXTwitter className='text-2xl cursor-pointer hover:text-gray-800'/>
                 <FaLinkedin href='https://www.linkedin.com/company/nexus-reach-us-ease-up/' className='text-2xl cursor-pointer hover:text-blue-600'/>
                 <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
            </div> */}
            <div className='flex gap-6 pb-5'>
    <a href='https://www.instagram.com/_nexus_acadbud_us/profilecard/?igsh=OTV5Mm0wcDFkaDFs' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-pink-600'>
        <AiFillInstagram />
    </a>
    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-gray-800'>
        <FaXTwitter />
    </a>
    <a href='https://www.linkedin.com/company/nexus-reach-us-ease-up/' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-blue-600'>
        <FaLinkedin />
    </a>
    <a href='https://nexusacadbud.tech/' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-red-600'>
        <FaYoutube />
    </a>
</div>

          </ul>
    </div>
    <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Services</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer' ><a href="http://localhost:5173/shop/listing">Electrican</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/shop/listing">Painter</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/shop/listing">Plumber</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/shop/listing">Reparing</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/shop/listing">Construction</a></li>
        </ul>
    </div>
     <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Acadbud</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/about">About</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/shop/listing">Services</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/media">Press & Media</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/social">Social Impacts</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/terms&conditions">Terms & Conditions</a></li>
        </ul>
     </div>
     <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/contact">Contact</a></li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/support">Support</a></li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/team">Our Team</a></li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/achievements">Achievements</a></li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="http://localhost:5173/video">Acadbud Launch</a></li>

      </ul>
     </div>
     
    </div>
    
  )
}
export default Footer

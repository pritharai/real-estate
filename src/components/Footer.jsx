import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt=""/>
            <p className='text-gray-400 mt-4'>Find your dream home with ease. Explore top listings, trusted agents, and the best deals in your area.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources, sent to your inbox weekly</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 mt-10 py-4 text-center text-gray-500'>
        Copyright © 2025 Real Estate. All rights reserved.
      </div>
    </div>
  )
}

export default Footer

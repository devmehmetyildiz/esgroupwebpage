import React from 'react'
import images from '../../assets/images'
import icons from '../../assets/icons'

export default function footer() {
  return (
    <div className='bg-[#111]  relative'>
      <div className='absolute left-0 top-0'>
        <img className='' src={images.footerleft} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center px-30 p-4'>
        <div className='flex flex-row justify-center items-center'>
          <div className='ml-2 flex flex-col w-1/4'>
            <h1 className='font-bold text-white wy-2 text-xl'>GUNTER</h1>
            <div className='border-2 border-orange-700 w-1/4' />
            <p className=' text-white wy-2 text-ellipsis'>Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor ut labore et dolore magna aliqua.</p>
          </div>
          <div className='ml-2 flex flex-col w-1/4'>
            <h1 className='font-bold text-white wy-2 text-xl'>New YORK</h1>
            <div className='border-2 border-orange-700 w-1/4' />
            <p className=' text-white wy-2'>198 Collective Street</p>
            <p className=' text-white wy-2'>Manhattan</p>
            <p className=' text-white wy-2'>Kingston</p>
            <p className=' text-white wy-2'>United State</p>
          </div>
          <div className='ml-2 flex flex-col w-1/4'>
            <h1 className='font-bold text-white wy-2 text-xl'>LONDON</h1>
            <div className='border-2 border-orange-700 w-1/4' />
            <p className=' text-white wy-2'>352/71 Second Street</p>
            <p className=' text-white wy-2'>King Street</p>
            <p className=' text-white wy-2'>Kingston</p>
            <p className=' text-white wy-2'>United Kingdom</p>
          </div>
          <div className='ml-2 flex flex-col w-1/4'>
            <h1 className='font-bold text-white wy-2 text-xl'>CONTACT</h1>
            <div className='border-2 border-orange-700 w-1/4' />
            <p className=' text-white wy-2'>info@gunter.com</p>
            <p className=' text-white wy-2'>fax@gunter.com</p>
            <p className=' text-white wy-2'>+44 478 541 7452</p>
            <div className='flex flex-row justfy-center items-center'>
              <div className='rounded-full border-2 border-orange-600'>
                <icons.FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className='flex my-16 justify-between '>
          <p className=' text-white mx-2'>@Gunter All Rights Reserved Evy Theme</p>
          <p className=' text-white mx-2'>Terms % Conditions - Privacy Policy</p>
        </div>
      </div>
      <div className='absolute right-0 bottom-0 '>
        <img className='' src={images.footerright} alt="" />
      </div>
    </div>
  )
}

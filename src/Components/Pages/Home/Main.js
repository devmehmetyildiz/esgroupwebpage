import React from 'react'
import images from '../../../assets/images'

export default function main() {
  const panelbackground = {
    backgroundImage: `url(${images.background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className='pt-16 flex flex-col items-center justfiy-center lg:flex-row' style={panelbackground}>
      <div className='w-2/3 flex justify-end items-end lg:w-1/2'>
        <div className='flex flex-col items-center justify-center lg:w-2/3'>
          <h1 className='font-extrabold text-3xl text-black-700 p-4 leading-normal lg:text-6xl'>We take care of the future</h1>
          <p className='text-[#848484] leading-relaxed py-4 px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverraaccumsan lacus vel facilisis.</p>
          <div className='pr-[70%] pt-8 pb-4'>
            <button className='bg-orange-600 p-2 min-w-fit rounded-md hover:bg-orange-800 transition ease-in-out duration-500'>GetStarted</button>
          </div>
        </div>
      </div>
      <div className='p-4 w-2/3 lg:w-1/2 lg:p-0'>
        <img src={images.mainimg} alt="" className='object-contain'/>
      </div>
    </div>
  )
}

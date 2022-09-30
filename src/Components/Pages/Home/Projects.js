import React from 'react'
import images from "../../../assets/images"
import Title from "../../Common/Title"
export default function projects() {
  return (
    <div className='bg-[#f5e7da] py-4 px-32 flex flex-col justfy-center items-center'>
      <Title className="mx-8" title={"PROJECTS"} subtitle="Lets Check Our Latest Projects" isBigger={true} />
      <div className='m-2 flex flex-row justfy-center items-center'>
        <div className='flex flex-col w-1/2'>
          <img className='m-2' src={images.project1} alt="" />
          <div className='flex flex-col justify-start items-start pl-2'>
            <h5 className="font-bold text-[#ff4800]">Design</h5>
            <h3 className='text-black font-bold'>UX/UI Design</h3>
          </div>
        </div>
        <div className='flex flex-col w-1/2'>
          <img className='m-2' src={images.project2} alt="" />
          <div className='flex flex-col justify-start items-start pl-2'>
            <h5 className="font-bold text-[#ff4800]">Development</h5>
            <h3 className='text-black font-bold'>Web Development</h3>
          </div>
        </div>
      </div>
      <div className='m-2 flex flex-row justfy-center items-center'>
        <div className='flex flex-col w-[33.33%]'>
          <img className='m-2' src={images.project3} alt="" />
          <div className='flex flex-col justify-start items-start pl-2'>
            <h5 className="font-bold text-[#ff4800]">Design</h5>
            <h3 className='text-black font-bold'>UX/UI Design</h3>
          </div>
        </div>
        <div className='flex flex-col w-[33.33%]'>
          <img className='m-2' src={images.project4} alt="" />
          <div className='flex flex-col justify-start items-start pl-2'>
            <h5 className="font-bold text-[#ff4800]">Development</h5>
            <h3 className='text-black font-bold'>Web Development</h3>
          </div>
        </div>
        <div className='flex flex-col w-[33.33%]'>
          <img className='m-2' src={images.project5} alt="" />
          <div className='flex flex-col justify-start items-start pl-2'>
            <h5 className="font-bold text-[#ff4800]">Development</h5>
            <h3 className='text-black font-bold'>Web Development</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

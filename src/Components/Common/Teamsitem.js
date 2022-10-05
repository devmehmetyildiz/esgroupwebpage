import React from 'react'
import Icons from '../../assets/icons'

export default function Teamsitem({ imgsrc, title, work, text }) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-1/4 flex justify-center items-center relative'>
                <img className='rounded-full z-110 ' src={imgsrc} alt="" />
                <div className=' text-red-600 absolute animate-updownanimate right-20 bottom-0 z-1000 text-[60px]'>
                    <Icons.TbCircleDashed />
                </div>
            </div>
            <div className='text-center font-semibold text-lg mt-2 lg:w-1/2'>
                <p>{text}</p>
            </div>
            <div className='text-[#ff4800] font-bold text-xl mt-4'>
                <h3>{title}</h3>
            </div>
            <div className='text-[#848484] text-lg my-4'>
                <h2>{work}</h2>
            </div>
        </div>
    )
}

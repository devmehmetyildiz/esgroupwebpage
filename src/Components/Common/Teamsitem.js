import React, { useState } from 'react'
import Icons from '../../assets/icons'
import { motion } from 'framer-motion'

export default function Teamsitem({ title, imgcenter, imgleft, imgright, history, imgtitle }) {

    const frame_toRightslide = {
        initial: { x: -400 },
        viewport: { once: true },
        whileInView: { x: 0 },
        transition: { duration: 0.7 }
    }

    const [hovermode, sethovermode] = useState(false)

    return (
        <div className='flex w-[100%]  flex-col justify-center items-center p-4'>
            <h1 className='font-bold font-poppins text-3xl text-[#20002C] p-4'>{title}</h1>
            <div className='w-[55%] flex justify-center items-center'>
                <motion.img whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='pb-32 w-0 lg:w-1/4 left-0 top-0   z-110 opacity-20' src={imgleft} alt="" />
                <div
                    onMouseEnter={() => { sethovermode(true) }}
                    onMouseLeave={() => { sethovermode(false) }}
                    className='opacity-1 left-0 top-0 flex  text-white flex-col justify-center items-start hover:border hover:border-white transition duration-300 w-[100%] py-2 lg:w-1/2 hover:shadow-md '>
                    <div className={hovermode ? 'w-[100%]' : 'invisible w-[100%]'}>
                        <h2 className='text-md text-center font-[poppins] font-bold px-2'>{imgtitle}</h2>
                        <div className='border-[1px] border-gray-300 bg-gray-300  ' />
                    </div>
                    <motion.img whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className=' left-0 top-0 opacity-1  z-110 p-8' src={imgcenter} alt="" />
                    <div className={`flex flex-col justify-start items-start w-[100%]  ${hovermode ? null : 'invisible'}`}>
                        <div className='flex flex-row justify-between items-center  w-[100%]'>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>Türü </p>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>Derin Tencere</p>
                        </div>
                        <div className='border-[1px] h-[0] border-gray-300 bg-gray-300  w-[100%]' />
                        <div className='flex flex-row justify-between items-center  w-[100%]'>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>Dış Yüzey </p>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>Granit</p>
                        </div>
                        <div className='border-[1px] h-[0] border-gray-300 bg-gray-300  w-[100%]' />
                        <div className='flex flex-row justify-between items-center  w-[100%]'>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>İç Yüzey</p>
                            <p className='text-sm text-left font-bold font-[poppins]  text-white px-2'>Granit</p>
                        </div>
                        <p className='text-sm text-left font-bold font-[poppins]  text-white px-2 pt-4'>Renk Çeşitlerimiz</p>
                        <div className='border-[1px] border-gray-300 bg-gray-300  w-[100%]' />
                        <div className='flex flex-row justify-center items-center p-2'>
                            <div className='w-[15px] h-[15px]      bg-red-600 rounded-full' />
                            <div className='w-[15px] h-[15px] mx-2 bg-red-400 rounded-full' />
                            <div className='w-[15px] h-[15px] mx-2 bg-red-600 rounded-full' />
                            <div className='w-[15px] h-[15px] mx-2 bg-red-100 rounded-full' />
                            <div className='w-[15px] h-[15px]      bg-red-900 rounded-full' />
                        </div>
                    </div>

                </div>
                <motion.img whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='pb-32 w-0 lg:w-1/4 left-0 top-0   z-110 opacity-20' src={imgright} alt="" />
            </div>
            <button onClick={() => { history.push('/Products') }} className='bg-[#20002C] p-2 min-w-fit rounded-md hover:bg-[#9e79ac] text-[#cbb4d4] transition ease-in-out duration-100 whitespace-nowrap'>Detay için Tıklayınız</button>
        </div>
    )
}

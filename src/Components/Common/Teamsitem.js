import React from 'react'
import Icons from '../../assets/icons'
import { motion } from 'framer-motion'

export default function Teamsitem({ title, imgcenter, imgleft, imgright, history }) {

    const frame_toRightslide = {
        initial: { x: -400 },
        viewport: { once: true },
        whileInView: { x: 0 },
        transition: { duration: 0.7 }
    }

    return (
        <div className='flex w-[100%] flex-col justify-center items-center p-4'>
            <div className='w-1/2 flex justify-center items-center'>
                <motion.img whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='w-1/3 pb-32 z-110' src={imgleft} alt="" />
                <img className='w-2/3 px-20 z-110 ' src={imgcenter} alt="" />
                <img className='w-1/3 pb-32 z-110 ' src={imgright} alt="" />
            </div>
            <h1 className='font-bold font-poppins text-3xl text-[#20002C] p-4'>{title}</h1>
            <button onClick={() => { history.push('/Products') }} className='bg-[#20002C] p-2 min-w-fit rounded-md hover:bg-[#9e79ac] text-[#cbb4d4] transition ease-in-out duration-100 whitespace-nowrap'>Detay için Tıklayınız</button>
        </div>
    )
}

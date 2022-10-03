import React, { useState } from 'react'

export default function Experienceitem({ icon, title, text }) {
    const [hovermode, sethovermode] = useState(false)
    return (
        <div className='flex flex-row justfy-center items-center p-2' onMouseEnter={() => { sethovermode(true) }} onMouseLeave={() => { sethovermode(false) }}>
            <div className={`transition ease-in-out duration-400 border-[#ff4800] border-[3px] rounded-full mx-5 p-1 ${hovermode ? 'bg-[#ff4800]' : null}`}>
                <div className={`transition ease-in-out duration-700 p-3 font-thin text-5xl ${hovermode ? 'text-white' : 'text-[#ff4800]'}`}>
                    {icon}
                </div>
            </div>
            <div className='flex flex-col '>
                <div className='font-bold text-xl'>
                    <h2>{title}</h2>
                </div>
                <div className='text-ellipsis lg:max-w-[60%]'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

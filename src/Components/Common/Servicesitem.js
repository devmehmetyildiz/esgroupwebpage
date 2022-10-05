import React, { useState } from 'react'
import icons from '../../assets/icons'

export default function Servicesitem({ icon, title }) {
    const [hovermode, sethovermode] = useState(false)

    return (
        <div className={`transition ease-in-out min-w-24  flex flex-row justify-between p-3  m-4 items-center rounded-l-full ${ hovermode ? "bg-[#20002C]" : "bg-gray-100"}`}
            onMouseEnter={() => { sethovermode(true) }}
            onMouseLeave={() => { sethovermode(false) }}
        >
            <div className='mxl-1 rounded-full bg-white p-5'>
                {icon}
            </div>
            <div className={`text-lg font-bold ${hovermode ? 'text-white' : null}`}>
                <h2 className=''>{title}</h2>
            </div>
            <div className='pr-4'>
                <icons.AiOutlineArrowRight className={` ${hovermode? 'text-white y-1 transition ease-in-out text-2xl':'text-xl'}`} />
            </div>
        </div>
    )
}

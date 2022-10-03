import React from 'react'

export default function Paymentitem({ icon, iconbg, title, settings, iconcolor, payment, type, buttoncolor }) {

    const iconbackground = {
        backgroundImage: `url(${iconbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div className='m-4 '>
            <div className='my-2 bg-white flex justfy-center items-center' style={iconbackground}>
                <div className=' my-20 mx-32  text-[80px]' >
                    <div className={iconcolor}>
                        {icon}
                    </div>
                </div>
            </div>
            <div className='text-xl m-2 text-black-700 text-center font-bold'>
                <h2>{title}</h2>
            </div>
            <div className='my-4 bg-white flex flex-col justfy-center items-center'>
                {settings.map(item =>
                    <div key={item} className="text-blue-500 mt-2">
                        <p>{item}</p>
                    </div>
                )}
                <div className='my-2 text-blue-900 text-[32px] font-bold'>
                    <h3>{payment}</h3>
                </div>
                <div className='my-2 text-gray-400 font-bold text-lg'>
                    <h4>{type}</h4>
                </div>
                <div className="my-8 text-white">
                    <button className={`w-32 h-8 ${buttoncolor}`}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

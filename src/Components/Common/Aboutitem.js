import React from 'react'
import images from '../../assets/images'
import Title from './Title'
export default function Aboutitem({ icon, title, text }) {

    const background = {
        backgroundImage: `url(${images.aboutbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition :'center'
    }

    return (
        <div className='flex flex-col justify-center items-center' style={background}>
            <div className='py-2'>
                {icon}
            </div>
            <Title subtitle={title} isCentered={true} />
            <div className='py-4 w-1/2 text-center'>
                <p className=''>{text}</p>
            </div>
        </div>
    )
}

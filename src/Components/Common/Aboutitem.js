import React from 'react'
import Title from './Title'
export default function Aboutitem({ icon, title, text }) {
    return (
        <div className='app__about-item-container'>
            <div className='app__about-item-icon-container'>
                {icon}
            </div>
            <Title subtitle={title} isCentered={true} />
            <div className='app__about-item'>
                <p className='p__opensans-text'>{text}</p>
            </div>
        </div>
    )
}

import React from 'react'
import "../../assets/css/Common.css"

export default function Title({ subtitle, title }) {
    return (
        <div className='app__common-titleside'>
            <div className='app__common-subtitle'>
                <h5>{title}</h5>
            </div>
            <div className='app__common-title'>
                <h2>{subtitle}</h2>
            </div>
            <div className='app__common-line'>
                <div className='app__common-line1' />
                <div className='app__common-line2' />
                <div className='app__common-line3' />
            </div>
        </div>
    )
}

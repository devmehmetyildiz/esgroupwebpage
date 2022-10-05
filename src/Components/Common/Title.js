import React from 'react'
import "../../assets/css/Common.css"

export default function Title({ subtitle, title, isCentered,isBigger,isMiddle }) {
    return (
        <div className={isCentered ? "app__common-titleside-center" : "app__common-titleside"}>
            <div className='app__common-subtitle'>
                <h5>{title}</h5>
            </div>
            <div className='app__common-title'>
              {isBigger ? <h2 style={{fontSize:'34px'}}>{subtitle}</h2> : 
              isMiddle ? <h2 >{subtitle}</h2>
              :<h2>{subtitle}</h2>}  
            </div>
            <div className={isCentered ? "app__common-line-center" : "app__common-line"}>
                <div className='app__common-line1' />
                <div className='app__common-line2' />
                <div className='app__common-line3' />
            </div>
        </div>
    )
}

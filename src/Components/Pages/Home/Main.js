import React from 'react'
import "../../../assets/css/Main.css"
import images from '../../../assets/images'

export default function main() {
  return (
    <div className='Fullpage-wrapper'>
      <div className='app__main-wrapper'>
        <div className='app__main-container'>
          <div className='app__main-titleside'>
            <div className='app__main-titleside-title'>
              <h1 className='h1__title-dark'>We take care of the future</h1>
            </div>
            <div className='app__main-titleside-text'>
              <p className='p__opensans-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverraaccumsan lacus vel facilisis.</p>
            </div>
            <div className='app__main-titleside-button'>
              <button className='custom__button'>Get Started</button>
            </div>
          </div>
          <div className='app__main-imgside'>
            <img src={images.mainimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

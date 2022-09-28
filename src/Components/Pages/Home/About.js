import React from 'react'
import Aboutitem from '../../Common/Aboutitem'
import "../../../assets/css/About.css"
import icons from "../../../assets/icons"

export default function about() {
  return (
    <div className='app__about-wrapper'>
      <div className='app__about-container'>
        <div className='app__about-titleside'>
          <h1 className='h1__subtitle-dark'>We bring the right people together to challenge established thinking and drive transformation.</h1>
        </div>
        <div className='app__about-items'>
          <Aboutitem icon={<icons.BsFillCalendarCheckFill className='app__about-icon' />} title="Business Planning" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
          <Aboutitem icon={<icons.GiSupersonicArrow className='app__about-icon'/>} title="Performance" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
          <Aboutitem icon={<icons.FaSearchDollar className='app__about-icon'/>} title="A Full Service" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
        </div>
      </div>
    </div>
  )
}

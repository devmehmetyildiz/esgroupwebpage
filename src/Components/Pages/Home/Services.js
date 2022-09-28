import React, { useState } from 'react'
import Servicesitem from '../../Common/Servicesitem'
import "../../../assets/css/Services.css"
import icons from "../../../assets/icons"
import images from "../../../assets/images"
import Title from '../../Common/Title'

export default function services() {

  return (
    <div className='p-2'>
      <div className='flex  sm:flex-col lg:flex-row'>
        <div className='w-1/2'>
          <img className="object-contain" src={images.services} alt="" />
        </div>
        <div className='w-1/2 p-4'>
          <Title title="WHAT WE DO" subtitle="Our Services" isBigger={true} />
          <div className='flex flex-col px-32'>
            <Servicesitem icon={<icons.TbPuzzle2 className='app__services-icon' />} title="Digital Branding" />
            <Servicesitem icon={<icons.GiBulb className='app__services-icon' />} title="Creative Solutions" />
            <Servicesitem icon={<icons.GiMegaphone className='app__services-icon' />} title="Marketing Solutions" />
          </div>
        </div>
      </div>
    </div>
  )
}

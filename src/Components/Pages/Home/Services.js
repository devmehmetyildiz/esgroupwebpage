import React, { useState } from 'react'
import Servicesitem from '../../Common/Servicesitem'
import icons from "../../../assets/icons"
import images from "../../../assets/images"
import Title from '../../Common/Title'

export default function services() {

  return (
    <div className='pt-2 mt-3'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
          <img className="object-contain" src={images.services} alt="" />
        </div>
        <div className='lg:w-1/2 p-4'>
          <div className='px-10 flex justify-center items-center '>
            <Title title="WHAT WE DO" subtitle="Our Services" isBigger={true} />
          </div>
          <div className='flex flex-col lg:px-32'>
            <Servicesitem icon={<icons.TbPuzzle2 className='text-orange-600 text-3xl' />} title="Digital Branding" />
            <Servicesitem icon={<icons.GiBulb className='text-orange-600 text-3xl' />} title="Creative Solutions" />
            <Servicesitem icon={<icons.GiMegaphone className='text-orange-600 text-3xl' />} title="Marketing Solutions" />
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import Servicesitem from '../../Common/Servicesitem'
import icons from "../../../assets/icons"
import images from "../../../assets/images"
import Title from '../../Common/Title'

export default function Services() {

  const [selectedimg, setselectedimg] = useState(0)
  const imgs = [
    { value: 0, img: images.türkcekatalog },
    { value: 1, img: images.ingilizcekatalog },
    { value: 2, img: images.arapcakatalog },
  ]

  return (
    <div className='pt-4 pb-8 mt-3'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 flex justify-end items-center'>
          <img className="object-contain" src={imgs.find(u => u.value == selectedimg).img} alt="" />
        </div>
        <div className='lg:w-1/2 p-4'>
          <div className='px-10 flex justify-center items-center '>
            <Title  subtitle="KATALOGLARIMIZ" isBigger={true} />
          </div>
          <div className='flex flex-col lg:px-32'>
            <a  onMouseEnter={() => { setselectedimg(0) }} download href='katalog/türkcekatalog.pdf'>  <Servicesitem icon={<icons.TbPuzzle2 className='text-[#20002C] text-3xl' />} title="Türkçe Katalog" /> </a>
            <a onMouseEnter={() => { setselectedimg(1) }} download href='katalog/ingilizcekatalog.pdf'>  <Servicesitem icon={<icons.GiBulb className='text-[#20002C] text-3xl' />} title="İngilizce Katalog" /> </a>
            <a onMouseEnter={() => { setselectedimg(2) }} download href='katalog/arapcakatalog.pdf'> <Servicesitem icon={<icons.GiMegaphone className='text-[#20002C] text-3xl' />} title="Arapça Katalog" /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

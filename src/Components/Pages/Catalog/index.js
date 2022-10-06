import React from 'react'
import images from '../../../assets/images'
import { motion } from "framer-motion"
export default function index() {

  const catalogs = [
    {
      id: 1,
      year: '2019-2020',
      lang: 'TÜRKÇE',
      type: 'KATALOG',
      pdfurl: 'Katalog/1920TRKatalog.pdf',
      img: images.trkatalog1920
    },
    {
      id: 2,
      year: '2019-2020',
      lang: 'ENGLİSH',
      type: 'Catalogue',
      pdfurl: 'Katalog/1920ENKatalog.pdf',
      img: images.enkatalog1920
    },
    {
      id: 3,
      year: '2019-2020',
      lang: 'عربي',
      type: 'كتالوج',
      pdfurl: 'Katalog/1920ARKatalog.pdf',
      img: images.arkatalog1920,
    },
    {
      id: 4,
      year: '2019-2020',
      lang: 'Français',
      type: 'Catalogue',
      pdfurl: 'Katalog/1920FRKatalog.pdf',
      img: images.frkatalog1920
    },
    {
      id: 5,
      year: '2019-2020',
      lang: 'Deustche',
      type: 'Katalog',
      pdfurl: 'Katalog/1920DEKatalog.pdf',
      img: images.dekatalog1920
    },
    {
      id: 6,
      year: '2019-2020',
      lang: 'Русский',
      type: 'каталог',
      pdfurl: 'Katalog/1920RUKatalog.pdf',
      img: images.pykatalog1920
    },
    {
      id: 7,
      year: '2019-2020',
      lang: 'Ελληνικός',
      type: 'Κατάλογος',
      pdfurl: 'Katalog/1920ELKatalog.pdf',
      img: images.elkatalog1920
    },
    {
      id: 8,
      year: '2019-2020',
      lang: 'Polski',
      type: 'Katalog',
      pdfurl: 'Katalog/1920POLKatalog.pdf',
      img: images.polkatalog1920
    }
  ]

  const frame_toleftslide = {
    initial: { x: 400 },
    viewport: { once: true },
    whileInView: { x: 0 },
    transition: { duration: 0.7 }
  }

  const frame_toRightslide = {
    initial: { x: -400 },
    viewport: { once: true },
    whileInView: { x: 0 },
    transition: { duration: 0.7 }
  }
// 
  return (
    <div className='pt-24 mb-12 flex flex-col justify-center items-center'>
      <div
        className='py-12 flex flex-col justify-center items-center mainbackground w-[100%]'>
        <h1 className='font-bold text-[#F6E5C1] text-5xl'>KATALOG</h1>
      </div>
      <div className='flex flex-col w-2/3 py-8 px-4'>
        {catalogs.map(item => {
          return <div className={item.id % 2 === 0 ? '  flex flex-col lg:flex-row justify-between items-center' : ' flex flex-col lg:flex-row-reverse justify-between items-center'}>
            {item.id % 2 === 0 ? <motion.img {...frame_toRightslide} whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='cursor-pointer' src={item.img} alt="" /> :
              <motion.img {...frame_toleftslide} whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='cursor-pointer' src={item.img} alt="" />}
            <div className='flex flex-col'>
              <h1 className='text-lg lg:text-2xl text-gray-700 font-poppins font-bold'>{item.year}</h1>
              <div className='flex flex-row justify-center items-center'>
                <h1 className='text-2xl lg:text-5xl text-red-700 font-bold font-poppins mx-4'>{item.lang}</h1>
                <h1 className='text-2xl lg:text-5xl text-black-700 font-bold font-poppins '>{item.type}</h1>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import productimages from '../../../assets/productimages'
import { motion } from "framer-motion"

export default function Index() {

  const setcategories = [
    {
      title: "9'lu set",
      value: 0,
      ischecked: false
    },
    {
      title: "10'lu set",
      value: 1,
      ischecked: false
    },
    {
      title: "Tencereler",
      value: 2,
      ischecked: false
    },
    {
      title: "Tavalar",
      value: 2,
      ischecked: false
    },
    {
      title: "Kapaklar",
      value: 2,
      ischecked: false
    },
    {
      title: "Tepsiler",
      value: 2,
      ischecked: false
    }
  ]
  const typecategories = [
    {
      title: "Basık Tencere",
      value: 0,
      ischecked: false
    },
    {
      title: "Derin Tencere",
      value: 1,
      ischecked: false
    },
    {
      title: "Tava",
      value: 3,
      ischecked: false
    },
    {
      title: "Tepsi",
      value: 4,
      ischecked: false
    },
  ]
  const diametercategories = [
    {
      title: "18",
      value: 0,
      ischecked: false
    },
    {
      title: "20",
      value: 1,
      ischecked: false
    },
    {
      title: "22",
      value: 1,
      ischecked: false
    },
    {
      title: "24",
      value: 1,
      ischecked: false
    },
    {
      title: "26",
      value: 1,
      ischecked: false
    }
  ]
  const midcategories = [
    {
      title: "BAKLAVA",
      value: 0,
      ischecked: false
    },
    {
      title: "İSTİRİDYE",
      value: 1,
      ischecked: false
    },
    {
      title: "ECO",
      value: 2,
      ischecked: false
    },
    {
      title: "KLASİK",
      value: 2,
      ischecked: false
    },
    {
      title: "LUXURY KARE SERİ",
      value: 2,
      ischecked: false
    },
    {
      title: "DİĞER",
      value: 2,
      ischecked: false
    },
  ]
  const bottomcategories = [
    {
      title: "Granit",
      value: 0,
      ischecked: false
    },
    {
      title: "Çelik",
      value: 1,
      ischecked: false
    },
    {
      title: "Teflon",
      value: 2,
      ischecked: false
    },
    {
      title: "Alüminyum",
      value: 2,
      ischecked: false
    }
  ]
  const colorcategories = [
    {
      title: "Gri",
      value: 0,
      ischecked: false
    },
    {
      title: "Kahverengi",
      value: 1,
      ischecked: false
    },
    {
      title: "Kırmızı",
      value: 2,
      ischecked: false
    },
    {
      title: "Krem",
      value: 2,
      ischecked: false
    },
    {
      title: "Mor",
      value: 2,
      ischecked: false
    },
    {
      title: "Kahve",
      value: 2,
      ischecked: false
    },
    {
      title: "Siyah",
      value: 2,
      ischecked: false
    },
  ]
  const kulptype = [
    {
      title: "Plastik",
      value: 0,
      ischecked: false
    },
    {
      title: "Çelik",
      value: 1,
      ischecked: false
    },
    {
      title: "Alüminyum",
      value: 1,
      ischecked: false
    },
  ]
  const kapaktype = [
    {
      title: "Cam",
      value: 0,
      ischecked: false
    },
    {
      title: "Çelik",
      value: 1,
      ischecked: false
    },
    {
      title: "Alüminyum",
      value: 1,
      ischecked: false
    },
  ]
  const imgs = [
    {
      categori: 0,
      name: 'Baklava Pembe Tencere',
      value: productimages.baklavaPink
    },
    {
      categori: 1,
      name: 'Baklava Basık Pembe Renk',
      value: productimages.baklavabasıktencerePurple
    },
    {
      categori: 2,
      name: 'Baklava Tepsi Pembe Renk',
      value: productimages.baklavatepsiPink
    },
    {
      categori: 3,
      name: 'Eco Tepsi Pembe Renk',
      value: productimages.ecoBrown
    },
    {
      categori: 0,
      name: 'Baklava Pembe Tencere',
      value: productimages.baklavaPink
    },
    {
      categori: 1,
      name: 'Baklava Basık Pembe Renk',
      value: productimages.baklavabasıktencerePurple
    },
    {
      categori: 2,
      name: 'Baklava Tepsi Pembe Renk',
      value: productimages.baklavatepsiPink
    },
    {
      categori: 3,
      name: 'Eco Tepsi Pembe Renk',
      value: productimages.ecoBrown
    },
    {
      categori: 0,
      name: 'Baklava Pembe Tencere',
      value: productimages.baklavaPink
    },
    {
      categori: 1,
      name: 'Baklava Basık Pembe Renk',
      value: productimages.baklavabasıktencerePurple
    },
    {
      categori: 2,
      name: 'Baklava Tepsi Pembe Renk',
      value: productimages.baklavatepsiPink
    },
    {
      categori: 3,
      name: 'Eco Tepsi Pembe Renk',
      value: productimages.ecoBrown
    },
    {
      categori: 0,
      name: 'Baklava Pembe Tencere',
      value: productimages.baklavaPink
    },
    {
      categori: 1,
      name: 'Baklava Basık Pembe Renk',
      value: productimages.baklavabasıktencerePurple
    },
    {
      categori: 2,
      name: 'Baklava Tepsi Pembe Renk',
      value: productimages.baklavatepsiPink
    },
    {
      categori: 3,
      name: 'Eco Tepsi Pembe Renk',
      value: productimages.ecoBrown
    },

  ]
  const colorfilters = [
    {
      color: 'bg-gray-600',
      title: 'Gri',
      value: 14,
      ischecked: false
    },
    {
      color: 'bg-brown-600',
      title: 'Kahverengi',
      value: 15,
      ischecked: false
    },
    {
      color: 'bg-red-600',
      title: 'Kırmızı',
      value: 19,
      ischecked: false
    },
    {
      color: 'bg-purple-600',
      title: 'Mor',
      value: 7,
      ischecked: false
    }
  ]

  const categories = [
    {
      title: "Ana Kategori",
      value: setcategories
    },
    {
      title: "Kalıp Kategori",
      value: typecategories
    },
    {
      title: "Çap Kategori",
      value: diametercategories
    },
    {
      title: "Tür Kategori",
      value: midcategories
    },
    {
      title: "Taban Kategori",
      value: bottomcategories
    },
    {
      title: "Kulp Kategori",
      value: kulptype
    },
    {
      title: "Kapak Kategori",
      value: kapaktype
    },
  ]

  return (
    <div className='pt-24 mb-12 flex flex-col justify-center items-center'>
      <div
        className='py-12 flex flex-col justify-center items-center mainbackground w-[100%]'>
        <h1 className='font-bold text-[#F6E5C1] text-5xl'>ÜRÜNLER</h1>
      </div>
      <div className='flex flex-row justify-center items-center w-[100%]'>
        <div className='flex flex-col justify-start items-center w-1/3 py-2 h-auto'>
          <div className='flex flex-col justify-center items-center border-2 border-gray-300 shadow-md  rounded-md'>
            {categories.map(mainitem => {
              return <React.Fragment>
                <h2>{mainitem.title}</h2>
                <div className='border-[1px] h-[0] border-gray-300 bg-gray-300  w-[100%]' />
                {mainitem.value.map(item => {
                  return <div className='flex flex-row justify-between items-center w-[100%] px-4'>
                    <p>{item.title}</p>
                    <input type="checkbox" className='rounded-full border-2 ' />
                  </div>
                })}
                <div className='border-[1px] h-[0] border-gray-300 bg-gray-300  w-[100%]' />
              </React.Fragment>
            })}
          </div>
        </div>
        <div className=' py-2 border-2 border-gray-300 shadow-md  rounded-md'>
          <div className='flex flex-row justify-center items-end'>
            <h4>Toplam Ürün Sayısı</h4>
          </div>
          <div className='border-[1px] h-[0] border-gray-300 bg-gray-300  w-[100%]' />
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {imgs.map(item => {
              return <div className='flex flex-col justify-center items-center border-2 border-gray-300 shadow-md rounded-md'>
                <motion.img whileHover={{ scale: 1.2, transition: { duration: 1 }, }} className='w-2/3 opacity-1  z-110 ' src={item.value} alt="" />
                <h4>{item.name}</h4>
              </div>
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

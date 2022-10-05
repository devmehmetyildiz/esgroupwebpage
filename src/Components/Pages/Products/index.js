import React, { useState } from 'react'

export default function Index() {

  const categories = [
    {
      title: "BAKLAVA SERİ",
      value: 0
    },
    {
      title: "İSTİRİDYE SERİ",
      value: 1
    },
    {
      title: "ECO SERİ",
      value: 2
    },
    {
      title: "KLASİK SERİ",
      value: 3
    },
    {
      title: "LUXURY KARE SERİ",
      value: 4
    },
    {
      title: "DİĞER ÜRÜNLER SERİ",
      value: 5
    }
  ]

  const [selectedcategories, setselectedcategories] = useState(0)

  return (
    <div className='pt-16 mb-12 flex flex-col justify-center items-center'>
      <div
        className='py-12 flex flex-col justify-center items-center bg-black w-[100%]'>
        <h1 className='font-bold text-white text-5xl'>ÜRÜNLER</h1>
      </div>
      <div className='flex flex-col justfy-center items-center min-w-2/3'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-black text-lg p-4 font-poppins font-bold'>KATEGORİLER</h2>
            <h2 className='text-black text-lg p-4 font-poppins font-bold'>Aktif Kategori:{categories.find(u => u.value == selectedcategories).title}</h2>
          </div>
          <ul className='flex flex-col justify-center items-center '>
            {categories.map(item => {
              return <li key={item.id} className='text-gray-600 hover:text-gray-800 cursor-pointer' id={item.value} onClick={(e) => { setselectedcategories(e.target.id) }}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>

    </div>
  )
}

import React from 'react'
import images from '../../assets/images'
import icons from '../../assets/icons'

export default function Footer() {
  
  return (
    <div className='mainbackground relative'>
      <div className='absolute left-0 top-0'>
        <img className='' src={images.footerleft} alt="" />
      </div>
      <div className='flex flex-col justify-center items-top lg:px-30 p-4'>
        <div className='lg:px-40 flex-2 lg:flex flex-row justify-center lg:justify-spacebetween items-top'>
          <div className=' flex flex-col lg:w-1/4'>
            <h1 className='font-bold text-white wy-2 text-lg lg:text-xl whitespace-nowrap'>ES GRUP</h1>
            <div className='border-2 border-[#20002C] bg-[#20002C] w-[70%]' />
            <p className=' text-white lg:my-2 text-xs lg:text-lg text-ellipsis'>Eslon Mutfak Eşyaları</p>
            <p className=' text-white lg:my-2 text-xs lg:text-lg text-ellipsis'>Essan Alüminyum Bak. Met. San</p>
            <p className=' text-white lg:my-2 text-xs lg:text-lg text-ellipsis'>Esport İç Dış Ticared Ltd.</p>
          </div>
          <div className=' flex flex-col lg:w-1/4'>
            <h1 className='font-bold text-white px-2 text-lg lg:text-xl whitespace-nowrap'>KAHRAMANMARAŞ</h1>
            <div className='border-2 border-[#20002C] bg-[#20002C] w-[70%]' />
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Organize Sanayi Bölgesi 3. Cd. No:3</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Onikişubat/Kahramanmaraş</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Tel:+90 (344) 257 9330</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Fax:+90 (344) 257 9376</p>
          </div>
          <div className=' flex flex-col lg:w-1/4 px-2'>
            <h1 className='font-bold text-white wy-2 text-lg lg:text-xl whitespace-nowrap'>İSTANBUL</h1>
            <div className='border-2 border-[#20002C] bg-[#20002C] w-[50%]' />
            <p className=' text-white text-xs lg:text-lg lg:my-2'>İstoç Ticaret Merkezi</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Bağcılar/İstanbul</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Tel:+90 (344) 257 9330</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>Fax:+90 (344) 257 9376</p>
          </div>
          <div className='flex flex-col lg:w-1/4'>
            <h1 className='font-bold text-white wy-2 text-lg lg:text-xl whitespace-nowrap'>İLETİŞİM</h1>
            <div className='border-2 border-[#20002C] bg-[#20002C] w-[40%]' />
            <p className=' text-white text-xs lg:text-lg lg:my-2'>info@eslon.com.tr</p>
            <p className=' text-white text-xs lg:text-lg lg:my-2'>evita@eslon.com.tr</p>
            <div className='flex flex-row justfy-center items-center'>
              <div className='rounded-full p-2 border-2 border-[#20002C] flex justify-center items-center'>
                <icons.FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:px-40  flex lg:my-16 justify-center lg:justify-between whitespace-nowrap'>
          <p className=' text-white text-xs lg:text-lg mx-2 '>©ARMS TEKNOLOJİ Tüm Hakları Saklıdır 2022</p>
          <p className=' text-white text-xs lg:text-lg mx-2'>Kullanım Koşulları % Gizlilik Politikası</p>
        </div>
      </div>
      <div className='absolute right-0 bottom-0 '>
        <img className='' src={images.footerright} alt="" />
      </div>
    </div>
  )
}

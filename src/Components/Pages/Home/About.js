import React from 'react'
import Aboutitem from '../../Common/Aboutitem'
import icons from "../../../assets/icons"

export default function about() {
  return (
    <div className='flex flex-col justify-center items-center py-8 px-4'>
      <h1 className='px-8 text-3xl font-bold py-8 max-w-1 text-center lg:max-w-2/3'>ES GRUP BÜNYESİNDEKİ ŞİRKETLERİMİZ</h1>
      <div className='flex flex-col justify-center items-center lg:flex-row'>
        <Aboutitem  title="Eslon Mutfak Eşyaları San. ve Tic. Ltd. Şti." text="Tencere tava setlerinin üretiminin yapıldığı şirketimiz." />
        <Aboutitem  title="Essan Alüminyum Bak. Met. Tek. San. Tic. A.Ş." text="Tencere ve tava setlerinin diskleri için alüminyum üretiminin yapıldığı şirketimiz" />
        <Aboutitem  title="Esport İç Dış Ticaret Ltd. Şti." text="İthalat ve İhracat şirketimiz." />
      </div>
    </div>
  )
}

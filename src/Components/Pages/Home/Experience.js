import React from 'react'
import Icons from '../../../assets/icons'
import icons from '../../../assets/icons'
import images from '../../../assets/images'
import Experienceitem from '../../Common/Experienceitem'
import Title from '../../Common/Title'
export default function experience() {
  return (
    <div className='flex flex-row'>
      <div className='w-1/2 flex flex-col justify-center items-center p-4'>
        <div className='mb-2 pr-10'>
          <Title title={"GROWING WITH OUR CLIENTS"} subtitle="25 Years of Experience" isBigger={true} />
        </div>
        <div className='pl-60'>
          <Experienceitem icon={<Icons.TbPuzzle2/>} title={"Consistency"} text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur." />
          <Experienceitem icon={<Icons.TbPuzzle2/>} title={"Consistency"} text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur." />
          <Experienceitem icon={<Icons.TbPuzzle2/>} title={"Consistency"} text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur." />
        </div>
      </div>
      <div className='w-1/2'>
        <img src={images.experience} alt="" className='object-contain' />
      </div>
    </div>
  )
}

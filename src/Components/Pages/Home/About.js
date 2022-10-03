import React from 'react'
import Aboutitem from '../../Common/Aboutitem'
import icons from "../../../assets/icons"

export default function about() {
  return (
    <div className='flex flex-col justify-center items-center py-8 px-4'>
      <h1 className='px-8 text-3xl font-bold py-8 max-w-1 text-center lg:max-w-2/3'>We bring the right people together to challenge established thinking and drive transformation.</h1>
      <div className='flex flex-col justify-center items-center lg:flex-row'>
        <Aboutitem icon={<icons.BsFillCalendarCheckFill className='text-orange-600 text-4xl' />} title="Business Planning" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
        <Aboutitem icon={<icons.GiSupersonicArrow className='text-orange-600 text-4xl' />} title="Performance" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
        <Aboutitem icon={<icons.FaSearchDollar className='text-orange-600 text-4xl' />} title="A Full Service" text="Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit." />
      </div>
    </div>
  )
}

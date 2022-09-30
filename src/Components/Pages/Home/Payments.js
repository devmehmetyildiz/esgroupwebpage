import React from 'react'
import icons from '../../../assets/icons'
import images from '../../../assets/images'
import Paymentitem from '../../Common/Paymentitem'
import Title from "../../Common/Title"

export default function payments() {
  return (
    <div className='flex flex-col p-8 bg-gray-200 justfy-center items-center'>
      <div className="my-3">
        <Title title="PRICING" subtitle="Our Flexible Pricing Plan" isCentered={true} isBigger={true}/>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <Paymentitem buttoncolor="bg-orange-600" icon={<icons.GiMegaphone/>} iconbg={images.paymentbg1} title="Starter Plan" iconcolor="text-orange-700" payment="$49.99" type="Per Month" settings={[
          "10GB Bandwidth Internet",
          "Business & Financ Analysing",
          "25 Social Media Reviews",
          "Customer Managemet",
          "24/7 Support"
        ]} />
        <Paymentitem  buttoncolor="bg-blue-600" icon={<icons.TbPuzzle2/>} iconbg={images.paymentbg2} title="Advance Plan" iconcolor="text-blue-700" payment="$69.99" type="Per Month" settings={[
          "10GB Bandwidth Internet",
          "Business & Financ Analysing",
          "25 Social Media Reviews",
          "Customer Managemet",
          "24/7 Support"
        ]} />
        <Paymentitem  buttoncolor="bg-green-600" icon={<icons.SiBrave/>} iconbg={images.paymentbg3} title="Premium Plan" iconcolor="text-green-700" payment="$99.99" type="Per Month" settings={[
          "10GB Bandwidth Internet",
          "Business & Financ Analysing",
          "25 Social Media Reviews",
          "Customer Managemet",
          "24/7 Support"
        ]} />
      </div>
    </div>
  )
}

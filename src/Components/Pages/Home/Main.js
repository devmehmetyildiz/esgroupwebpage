import React from 'react'
import images from '../../../assets/images'
import Slider from 'react-slick'
import Mainslider from '../../Common/Mainslider';

export default function main() {
  const panelbackground = {
    backgroundImage: `url(${images.background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const Slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="slick rounded-full border-[2px] border-orange-500 text-[#f9f9f9] p-[10px] hover:bg-orange-700">
      </div>
    )
  };

  return (
    <div className='pt-16' style={panelbackground}>
      <Slider {...Slidersettings}>
        <Mainslider />
        <Mainslider />
        <Mainslider />
        <Mainslider />
      </Slider>
    </div>

  )
}

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
    showArrow:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    cssEase: "linear",
    autoplaySpeed: 3750,
    autoplay: true,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="slick rounded-full border-[2px] border-[#F6E5C1] text-[#f9f9f9] p-[10px] hover:border-[#EA9458] ">
      </div>
    )
  };

  const slideritem1 = {
    title: "Fuar Katılımımları",
    text: "13-15 Eylül 2022 tarihleri arasında Moskova, Rusya'daki HouseHold Expo Uluslararası Züccacaiye Dekorasyon ve Ev Tekstili Fuarına Eslok Mutfak Eşyaları Sanayi ve Tic. Ltd. Şti. olarak katılım gerçekleştirdik ",
    image: images.tanıtımfoto1
  }
  const slideritem2 = {
    title: "Fuar Katılımımları",
    text: "10-13 Mart 2022 tarihleri arasında TÜYAP İstanbul'daki HOST İSTANBUL Fuarına Eslok Mutfak Eşyaları Sanayi ve Tic. Ltd. Şti. olarak katılım gerçekleştirdik",
    image: images.tanıtımfoto2
  }
  const slideritem3 = {
    title: "Firma Tanıtım Videomuz",
    text: "",
    video: "https://www.youtube.com/embed/BwoP3xEsdz0"
  }
  const slideritem4 = {
    title: "Fuar Katılımımları",
    text: "15-18 Eylül 2022 tarihleri arasında TÜYAP İstanbul'daki ZUCHEX EV ve MUTFAK EŞYALARI Fuarına Eslok Mutfak Eşyaları Sanayi ve Tic. Ltd. Şti. olarak katılım gerçekleştirdik",
    image: images.tanıtımfoto3
  }


  return (
    <div className='pt-16 pb-8 mainbackground max-w-[100%]'>
      <Slider {...Slidersettings}>
        <Mainslider content={slideritem3} type="video" showbtn={false} />
        <Mainslider content={slideritem2} type="img" showbtn={true} />
        <Mainslider content={slideritem1} type="img" showbtn={true} />
        <Mainslider content={slideritem4} type="img" showbtn={true} />
      </Slider>
    </div>

  )
}

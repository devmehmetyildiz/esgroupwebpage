import React from 'react'
import Slider from 'react-slick'
import Teamsitem from '../../Common/Teamsitem';
import images from "../../../assets/images"
import productimages from "../../../assets/productimages"

export default function Teams() {

  const Slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="slick rounded-full border-[2px] border-[#cbb4d4] bg-[#cbb4d4] text-[#cbb4d4] p-[10px] hover:border-[#20002C] hover:bg-[#20002C] ">
      </div>
    )
  };

  const sliderContents = [
    {
      title: "BAKLAVA SERİSİ",
      imgright: productimages.baklavabasıktencerePurple,
      imgcenter: productimages.baklavaPink,
      imgleft: productimages.baklavabasıktencereRed,
      imgtitle : "ETİKA BAKLAVA SERİSİ TENCERE"
    },
    {
      title: "İSTİRİDYE SERİ",
      imgright: productimages.ecoBrown,
      imgcenter: productimages.baklavabasıktencerePurple,
      imgleft: productimages.baklavaPink,
      imgtitle : "ETİKA BAKLAVA SERİSİ TENCERE"
    },
    {
      title: "ECO SERİ",
      imgright: productimages.ecoDark,
      imgcenter: productimages.ecoBrown,
      imgleft: productimages.baklavabasıktencerePurple,
      imgtitle : "ETİKA BAKLAVA SERİSİ TENCERE"
    },
    {
      title: "ECO SERİ",
      imgright: productimages.baklavabasıktencereRed,
      imgcenter: productimages.ecoDark,
      imgleft: productimages.ecoBrown,
      imgtitle : "ETİKA BAKLAVA SERİSİ TENCERE"
    },
  ]


  return (
    <div className=' p-4 mb-2 mainbackground'>
      <div className='p-20 cursor-pointer '>
        <Slider {...Slidersettings}>
          {sliderContents.map(item => {
            return <Teamsitem {...item} />
          })}
        </Slider>
      </div>
    </div>
  )
}

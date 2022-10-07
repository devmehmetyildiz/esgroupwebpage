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
      <div className="slick rounded-full border-[2px] border-orange-500 text-[#f9f9f9] p-[10px] hover:bg-orange-700">
      </div>
    )
  };

  const sliderContents = [
    {
      title: "BAKLAVA SERİSİ",
      imgleft: productimages.baklavabasıktencerePurple,
      imgcenter: productimages.baklavaPink,
      imgright: productimages.baklavabasıktencereRed
    },
    {
      title: "İSTİRİDYE SERİ",
      imgleft: productimages.baklavabasıktencerePurple,
      imgcenter: productimages.baklavaPink,
      imgright: productimages.baklavabasıktencereRed
    },
    {
      title: "ECO SERİ",
      imgleft: productimages.baklavabasıktencerePurple,
      imgcenter: productimages.baklavaPink,
      imgright: productimages.baklavabasıktencereRed
    },

  ]


  return (
    <div className='bg-[#f9f9f9] p-4 mb-2'>
      <div className='lg:p-20 cursor-pointer'>
        <Slider {...Slidersettings}>
          {sliderContents.map(item => {
            return <Teamsitem {...item} />
          })}
        </Slider>
      </div>
    </div>
  )
}

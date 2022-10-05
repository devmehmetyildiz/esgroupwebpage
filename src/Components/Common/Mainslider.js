import React from 'react'
import images from '../../assets/images'
import { withRouter } from 'react-router-dom';
export  function Mainslider({content,showbtn,type,history}) {
    const { title, text, image, video, videotitle } = content

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center lg:flex-row p-8'>
                <div className='w-2/3 flex justify-end items-end lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center lg:w-2/3'>
                        <h1 className='text-center font-poppins font-extrabold text-3xl text-black-700 p-4 leading-normal lg:text-6xl'>{title}</h1>
                        <p className='text-[#F6E5C1] leading-relaxed py-4 px-8'>{text}</p>
                        <div className='pt-8 pb-4'>
                            {showbtn ? <button onClick={()=>{history.push('/Corporate')}} className='bg-[#F6E5C1] p-2 min-w-fit rounded-md hover:bg-[#EA9458] transition ease-in-out duration-100 whitespace-nowrap'>Ayrıntılar için Tıklayınız</button>
                                : null}
                        </div>
                    </div>
                </div>
                <div className='p-4 w-2/3 lg:w-1/2 lg:p-0'>
                    {type === "img" ?
                        <img src={image} alt="" className='object-contain max-w-[60%]' /> :
                        <iframe width="460" height="315"
                            src={video}
                            title={videotitle}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    }
                </div>
            </div>
        </div>
    )
}
export default withRouter(Mainslider)
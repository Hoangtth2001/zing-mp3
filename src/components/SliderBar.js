import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { getArraySlider } from '../ultis/getArrbanner'
import 'animate.css';

const SliderBar = () => {
  const { banner } = useSelector(state => state.app)

  useEffect(() => {
    const sliderElements = document.getElementsByClassName("slider-items")
    let max = 2;
    let min = 0;
  
    const intervalList = setInterval(() => {
      const list = getArraySlider(min, max, sliderElements.length)
      for (let i = 0; i < sliderElements.length; i++) {

        list.some(item => item === i) ? sliderElements[i].style.display = "block" : sliderElements[i].style.display = "none"
     sliderElements[i].classList.add('animate_slideInRight')

      }

     
     if(min === sliderElements.length -1) {
      min = 0 ;
     }else{
      min ++;
     }
     if(max ===  sliderElements.length-1){
      max = 0 ;
     }else{
      max ++;
     }
    }, 2000);
    return () => {
      intervalList && clearInterval(intervalList)
    }

  }, [])
  return (

    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
      {banner?.map(item => (
        <img
          key={item.encodeId}
          src={item.banner}
          alt={item.banner}
          className='slider-items object-contain w-1/3 rounded-lg'
        />
      ))}
    </div>
  )
}

export default SliderBar
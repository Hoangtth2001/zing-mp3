import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getArraySlider } from '../ultis/getArrbanner'
import { music } from '../store/actions'

const SliderBar = () => {
  const { banner } = useSelector(state => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    const sliderElements = document.getElementsByClassName("slider-item")
    let max = 2;
    let min = 0;

    const intervalList = setInterval(() => {
      const list = getArraySlider(min, max, sliderElements.length)
      for (let i = 0; i < sliderElements.length; i++) {
        if (list.some(item => item === i)) sliderElements[i].style.display = "block"
        else {
          sliderElements[i].style.display = "none"
          if(i === max){
            sliderElements[i].classList.add('animate-slide-right' , 'order-last', 'z-20')
          }
          else if(i === min){
            sliderElements[i].classList.add('animate-slide-left' , 'order-first', 'z-10')

          }
          else{
            sliderElements[i].classList.add('animate-slide-left2','order-2', 'z-10' )

          }
        }
      }

      if (min === sliderElements.length - 1) {
        min = 0;
      } else {
        min++;
      }
      if (max === sliderElements.length - 1) {
        max = 0;
      } else {
        max++;
      }
    }, 3000);
    return () => {
      intervalList && clearInterval(intervalList)
    }

  }, [])

  const hadleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(music.setCurrentSongID(item.encodeId))

    }
  }

  return (

    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
      {banner?.map(item => (
        <img
          key={item.encodeId}
          src={item.banner}
          alt={item.banner}
          onClick={() => hadleClickBanner(item)}
          className='slider-item object-contain w-1/3 rounded-lg '
        />
      ))}
    </div>
  )
}

export default SliderBar
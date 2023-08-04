import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

const SliderBar = () => {
  const { banner } = useSelector(state => state.app)

  useEffect(() => {
    const sliderElements = document.getElementsByClassName("slider-items")
    let max = 2;
    let min = 0;
    
    const intervalList = setInterval(() => {

      for (let i = 0; i<sliderElements.length ;i++) {
          if (i <= max && i >= min ) {
            sliderElements[i].style.display = "block"
            
          }
          else {
            sliderElements[i].style.display = "none"

          }
        
      }
      min += 1;
      max += 1;
     if(min === 4 && max === 6){
      min = 0;
      max = 2;
     }
    }, 1000);
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
          className='slider-items object-contain w-1/2 rounded-lg'
        />
      ))}
    </div>
  )
}

export default SliderBar
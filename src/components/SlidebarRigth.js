import React, { useEffect } from 'react'
import { apisImgPlayers, apisMusic } from '../apis'
import { useState } from 'react'
import icons from '../ultis/icons'

import { useMusicContext } from '../store/reducers/MusicContext'
import { music } from '../store/actions'



const { BiDotsHorizontalRounded, AiOutlineHeart } = icons

const SlidebarRigth = () => {
  // const [musicId, setMusicId] = useState(0)
  const { listMusicInfor, handlePlayMusic, currentMusicId} = useMusicContext();


  return (

    <div className='flex flex-col text-xs w-full'>
      <div className='flex flex-row  items-center justify-between'>
        <div className='h-[70px] flex-none py-[14px] px-2 flex items-center gap-2'  >
          <span className='rounded-full bg-gray-300 p-[8px]'>Danh sach phat</span>
          <span className='rounded-full bg-gray-300 p-[8px]'>Nghe gan day</span>
        </div>
        <span className="p-2 rounded-full bg-gray-300  "><BiDotsHorizontalRounded size={14} /></span>
      </div>


      <div className=''>
        {listMusicInfor.map((item, index) => (
          <div key={index}

            className={`w-[375px] flex-auto border border-red-500 flex items-center  gap-4 hover:bg-[#CECCC9] ${ item.id === currentMusicId  && 'text-red-500 bg-gray-200'}`}
          >
            <div>
              <img src={item.img} alt='thumnail' className='w-16 h-16 object-cover rounded-md'
                onClick={() => handlePlayMusic(item.id)}
              />
            </div>
            <div className='flex flex-col '>
              <span className={`font-semibold text-gray-700 text-sm '}`}>{item.title}</span>
              <span className='text-sm text-gray-500'>{item.singer}</span>
            </div>
            <div className='flex gap-2' style={{ position: 'absolute', right: 4 }}>
              <span><AiOutlineHeart size={16} /></span>
              <span><BiDotsHorizontalRounded size={16} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlidebarRigth
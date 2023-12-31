import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'

import icons from '../ultis/icons'
import { apisMusic } from "../apis"
import { apisImgPlayers } from '../apis'
// import { useMusicContext } from '../store/reducers/MusicContext'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useMusicContext } from '../store/reducers/MusicContext'


const { AiOutlineHeart, AiFillHeart, BiDotsHorizontalRounded } = icons;

const Player = () => {
    // const [storeCurrentMusicId, setcurrentMusicId] = useState("")
    const { listMusicInfor, currentMusicId, handlePlayMusic } = useMusicContext();



    const handleClicknext = () => {
        if (currentMusicId === listMusicInfor.length - 1) {
            handlePlayMusic(0)
        }
        else
            handlePlayMusic(currentMusicId + 1)
    }
    const handleClickprevious = () => {
        if (currentMusicId === 0) {
            handlePlayMusic(currentMusicId)
        }
        else
            handlePlayMusic(currentMusicId - 1)
    }
    const currentMusic = listMusicInfor.find((item) => item.id === currentMusicId)


    return (
        <div>
            {currentMusic && (

                <div className='bg-[#DEDAD1] px-5 h-full min-h-[90px] flex'>
                    <div className='w-[375px] flex-auto border border-red-500 flex items-center gap-4'>
                        <div>
                            <img src={currentMusic.img} alt='thumnail' className='w-16 h-16 object-cover rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <span className='font-semibold text-gray-700 text-sm'>{currentMusic.title}</span>
                            <span className='text-sm text-gray-500'>{currentMusic.singer}</span>
                        </div>
                        <div className='flex pl-2 gap-2'>
                            <span><AiOutlineHeart size={16} /></span>
                            <span><BiDotsHorizontalRounded size={16} /></span>
                        </div>
                    </div>
                    <div className='w-[500px] flex-auto border border-red-500'>

                        <div >
                            <AudioPlayer
                                customVolumeControls={[]}
                                onClickNext={handleClicknext}
                                onClickPrevious={handleClickprevious}
                                style={{
                                    backgroundColor: "#DEDAD1",
                                }} src={currentMusic.url} showSkipControls={true} />
                        </div>
                    </div>
                    <div className='w-[375px] flex-auto border border-red-500'>
                        Volume

                    </div>
                </div>
            )}

        </div>

    )
}

export default Player
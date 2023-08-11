import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import icons from '../ultis/icons'
import { apisMusic } from "../apis"
import { apisImgPlayers } from '../apis'
// import { useMusicContext } from '../store/reducers/MusicContext'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useMusicContext } from '../store/reducers/MusicContext'


const { AiOutlineHeart, AiFillHeart, BiDotsHorizontalRounded } = icons;

const Player = () => {

    const { listMusicInfor } = useMusicContext();
    const { currentSongID } = useSelector(state => state.music)
    
    console.log(currentSongID)
    return (
        <div>
            {listMusicInfor.map((music, index) => (
                <div key={index} className='bg-[#DEDAD1] px-5 h-full min-h-[90px] flex'>
                    <div className='w-[375px] flex-auto border border-red-500 flex items-center gap-4'>
                        <div>
                            <img src={music.img} alt='thumnail' className='w-16 h-16 object-cover rounded-md' />
                        </div>
                        <div className='flex flex-col '>
                            <span className='font-semibold text-gray-700 text-sm'>{music.title}</span>
                            <span className='text-sm text-gray-500'>{music.singer}</span>
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
                               style={{
                                backgroundColor: "#DEDAD1",
                               }} src={music.url} showSkipControls={true} />
                        </div>
                    </div>
                    <div className='w-[375px] flex-auto border border-red-500'>
                        Volume

                    </div>
                </div>
            ))}
        </div>

    )
}

export default Player
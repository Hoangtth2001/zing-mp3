import React from 'react'
import {  useSelector } from 'react-redux'

const Player = () => {
    const {currentSongID} = useSelector(state => state.music)
    console.log(currentSongID)
    return (
        <div className='bg-[#DEDAD1] px-5 h-full min-h-[90px] flex'>
            <div className='w-[375px] flex-auto border border-red-500'>
                detail
            </div>
            <div className='w-[500px] flex-auto border border-red-500'>
                main Player
            </div>
            <div className='w-[375px] flex-auto border border-red-500'>
                Volume
            </div>
        </div>
    )
}

export default Player
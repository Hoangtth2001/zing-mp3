import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import icons from '../ultis/icons'
import { apisMusic } from "../apis"
import { apisImgPlayers } from '../apis'
// import { set } from 'firebase/database'


const { AiOutlineHeart, AiFillHeart, BiDotsHorizontalRounded } = icons;
const Player = () => {

    const [listContent, setListContent] = useState('')
    const [lisImgandPlayer, setLisImgandPlayer] = useState("")
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            apisMusic.getinforMusic().then((arrMusicContent) => {
                setListContent(arrMusicContent)
            })
            apisImgPlayers.getPlayerAndImg().then((arrImgPlayers) => {
                setLisImgandPlayer(arrImgPlayers)
            })
        }


        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    const listMusicInfor = []

    console.log('inforMusic: ', listMusicInfor)

    if (lisImgandPlayer.length === listContent.length) {
        for (let i in lisImgandPlayer) {
            const musicAndImg = {
                'url': lisImgandPlayer[i].url,
                'img': lisImgandPlayer[i].img,
                'singer': listContent[i].singer,
                'author': listContent[i].author,
                'title': listContent[i].title,

            }
            listMusicInfor.push(musicAndImg);
        }
    }
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
                        <div className='flex pl-2'>
                            <span><AiOutlineHeart size={16} /></span>
                            <span><BiDotsHorizontalRounded size={16} /></span>
                        </div>
                    </div>
                    <div className='w-[500px] flex-auto border border-red-500'>

                        <div >
                            <audio controls>
                                <source src={music.url} />
                            </audio>
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
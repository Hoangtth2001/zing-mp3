import { list, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { storage } from '../firebase'
import { getDownloadURL, listAll } from 'firebase/storage'
import icons from '../ultis/icons'
import { apisMusic } from "../apis"

const { AiOutlineHeart, AiFillHeart, BiDotsHorizontalRounded } = icons;
const Player = () => {

    const musicRef = ref(storage, 'musics')
    const imgMusicRef = ref(storage, "img_music")

    const [musicURL, setMusicURL] = useState([])
    const [imgMusic, setImgMusic] = useState([])
    const [listContent, setListContent] = useState('')

    useEffect(() => {
        let isMounted = true; // To track if the component is still mounted
        apisMusic.getinforMusic().then((arrMusicContent) => {
            setListContent(arrMusicContent)
        })

        listAll(musicRef)
            .then((music) => {
                // console.log(music.items);
                const promises = music.items.map((item) => getDownloadURL(item));
                Promise.all(promises).then((urls) => {
                    if (isMounted) {
                        setMusicURL(urls);
                    }
                });
            }
            );
        listAll(imgMusicRef)
            .then((img) => {
                // console.log(img);
                const promises = img.items.map((item) => getDownloadURL(item));
                Promise.all(promises).then((urls) => {
                    if (isMounted) {
                        setImgMusic(urls);
                    }
                });
            }
            );
        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    const listMusicInfor = []

    // console.log( 'inforMusic: ' , inforMusic)

    if (musicURL.length === imgMusic.length && imgMusic.length === listContent.length) {
        for (let i in musicURL) {
            const musicAndImg = {
                'url': musicURL[i],
                'img': imgMusic[i],
                'singer': listContent[i].singer,
                'author': listContent[i].author,
                'title': listContent[i].title,

            }
            listMusicInfor.push(musicAndImg);
        }
    }

 console.log(listMusicInfor.singer);

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
                            <span><BiDotsHorizontalRounded size={16}/></span>
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
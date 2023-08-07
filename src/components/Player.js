import { ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { storage } from '../firebase'
import { getDownloadURL, listAll } from 'firebase/storage'


const Player = () => {
    const musicRef = ref(storage, 'musics')
    const imgMusicRef = ref(storage, "img_music")

    const [musicURL, setMusicURL] = useState([])
    const [imgMusic, setImgMusic] = useState([])



    useEffect(() => {
        let isMounted = true; // To track if the component is still mounted

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
                console.log(img);
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


    if (musicURL.length === imgMusic.length) {
        for (let i in musicURL) {
            const musicAndImg = {
                'url': musicURL[i],
                'img': imgMusic[i],
            }
            listMusicInfor.push(musicAndImg);
        }
    }
    const { currentSongID } = useSelector(state => state.music)
    console.log(currentSongID)
    return (
        <div>
            {listMusicInfor.map((music, index) => (
                <div key = {index} className='bg-[#DEDAD1] px-5 h-full min-h-[90px] flex'>
                    <div className='w-[375px] flex-auto border border-red-500'>
                        <div>
                            <img src={music.img} alt='blabla' />
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
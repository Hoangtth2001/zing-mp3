import React, { createContext, useContext, useEffect, useState } from 'react';
import { apisImgPlayers, apisMusic } from '../../apis';
const MusicContext = createContext();

export const useMusicContext = () => {
    return useContext(MusicContext);
};

export const MusicProvider = ({ children }) => {
    const [listMusicInfor, setListMusicInfor] = useState([]);
    const [listContent, setListContent] = useState([]);
    const [lisImgandPlayer, setLisImgandPlayer] = useState([]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            apisMusic.getinforMusic().then((arrMusicContent) => {
                setListContent(arrMusicContent);
            });
            apisImgPlayers.getPlayerAndImg().then((arrImgPlayers) => {
                setLisImgandPlayer(arrImgPlayers);
            });
        }

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (lisImgandPlayer.length === listContent.length) {
            const musicInfo = lisImgandPlayer.map((item, index) => {
                return {
                    id: index,    
                    url: item.url,
                    img: item.img,
                    singer: listContent[index].singer,
                    author: listContent[index].author,
                    title: listContent[index].title,
                };
            });
            setListMusicInfor(musicInfo);
        }
    }, [lisImgandPlayer, listContent]);

    const contextValue = {
        listMusicInfor,
    };

    return (
        <MusicContext.Provider value={contextValue}>{children}</MusicContext.Provider>
    );
};
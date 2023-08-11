import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

export const getPlayerAndImg = async () => {
    const musicRef = ref(storage, 'musics')
    const imgMusicRef = ref(storage, "img_music")
    try {
        const musicList = await listAll(musicRef);
        const imgList = await listAll(imgMusicRef);
        const musicPromises = musicList.items.map((item) => getDownloadURL(item));
        const imgPromises = imgList.items.map((item) => getDownloadURL(item));

        const musicURLs = await Promise.all(musicPromises);
        const imgURLs = await Promise.all(imgPromises);
        const listMusicInfor = []
        if (musicURLs.length === imgURLs.length) {
            for (let i in musicURLs) {
                const musicAndImg = {
                    'url': musicURLs[i],
                    'img': imgURLs[i],
                }
                listMusicInfor.push(musicAndImg);
            }
        }
        return listMusicInfor;
    } catch (error) {
        throw (error)

    }
}





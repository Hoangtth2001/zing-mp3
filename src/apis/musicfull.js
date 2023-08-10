import { apisImgPlayers, apisMusic } from "."



 export const getfullMusic = async () => {
    try {
        const music = await apisMusic.getinforMusic()
        const imgAndPlayer = await apisImgPlayers.getPlayerAndImg()

        const musicPromise = await Promise.all(music)
        const imgAndPlayerPromise = await Promise.all(imgAndPlayer)
        
        return {musicPromise, imgAndPlayerPromise}  
    } catch (error) {
        throw(error )
    }

}



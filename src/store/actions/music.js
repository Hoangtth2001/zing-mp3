import actionTypes from "./actionTypes";

export const setCurrentSongID = (songId) => ({
    type: actionTypes.SET_CURRENT_SONG_ID,
    songId,
})
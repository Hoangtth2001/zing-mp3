import actionTypes from "../actions/actionTypes";
const initState = {
    currentSongID: [],

  
}
const musicReducer = (state = initState, action) => {
    switch (action.type) {
       case actionTypes.SET_CURRENT_SONG_ID:
        return {
            ... state,
            currentSongID: action.songId || null,
        }
        default:
            return state;
    }
}
export default musicReducer; 
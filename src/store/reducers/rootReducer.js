import appReducer from "./appReducer";
import { combineReducers  } from "redux";

// gom cac reducer
const rootReducer = combineReducers({
    app: appReducer
})
export default rootReducer;

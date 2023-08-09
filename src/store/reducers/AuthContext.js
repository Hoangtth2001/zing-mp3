import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INIT_STATE = {
  currentUser : null,
}
export const AuthContext = createContext(INIT_STATE);  
export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer,INIT_STATE);
  
return(
  <AuthContext.Provider value = {{currentUser: state.currentUser , dispatch}}>
    {children}  
  </AuthContext.Provider> 

)
}
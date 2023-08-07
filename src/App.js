
import { Home, Login, Public, Mymusic } from "./container/public";
import { Routes, Route, Navigate } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import { actions } from "./store/actions";
import { useDispatch } from "react-redux";
import { AuthContext } from "./store/reducers/AuthContext";
import { useContext } from "react";
import { ref, child, get } from "firebase/database";
import { database } from "./firebase";


function App() {


  const dbRef = ref(database);
  get(child(dbRef,'Music')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  }); 


  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser);
  useEffect(() => {
    dispatch(actions.getHome())

  }, [])
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={path.LOGIN} />
  }

  return (
    <div className="">

      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.STAR} element={<RequiredAuth><Home /></RequiredAuth>} />
          <Route path={path.MY_MUSIC} element={<Mymusic />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;

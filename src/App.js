
import { Home, Login, Public ,Mymusic} from "./container/public";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import { actions } from "./store/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome())

  }, [])

  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.STAR} element={<Home />} />
          <Route path={path.MY_MUSIC} element={<Mymusic />} />


        </Route>
          <Route path={path.LOGIN} element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;

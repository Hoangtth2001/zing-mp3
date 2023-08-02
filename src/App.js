
import { Home, Login, Public } from "./container/public";
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
          <Route path={path.PUBLIC} element={<Login />} />
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

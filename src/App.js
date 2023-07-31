
import { Home, Login, Public } from "./container/public";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";


function App() {

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

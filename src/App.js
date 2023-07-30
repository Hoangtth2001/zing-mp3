
import { useSelector } from "react-redux";

function App() {
  const {test} = useSelector(state => state.app )
  console.log(test)
  return (
    <div className="text-3xl font-bold underline"> 
    toi la hoang
  
    </div>
  );
}

export default App;


import {Routes, Route} from "react-router-dom"
import "./App.css"
import Testdb from "./Testdb"
import Testauth from "./Testauth";

function App() {
  return (
  <>
    <Routes>
      <Route path="/testauth" element={<Testauth/>}/>
      <Route path="/testdb" element={<Testdb/>}/>
    </Routes>
  </>  
  );
}

export default App;
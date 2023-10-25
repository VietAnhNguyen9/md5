import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./tour/List";
import Create from "./tour/Create";
import Update from "./tour/Update";
import Detail from "./tour/Detail";

function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<List/>}></Route>
          <Route path={'/create'} element={<Create/>}></Route>
          <Route path={'/update/:id'} element={<Update/>}></Route>
          <Route path={'/detail/:id'} element={<Detail/>}></Route>
        </Routes>
      </>
  )
}

export default App;

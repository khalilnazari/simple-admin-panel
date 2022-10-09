import { Navbar, Sidebar } from "./components";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";
import { Dashboard, Users} from './containers'
import './App.scss'


const App = () => {
  const [hideSidebar, setHideSidebar] = useState(false); 
  return (
    <div className={hideSidebar ? "mainWrapper hideSidebar" : "mainWrapper"}>
      <BrowserRouter>
        <Navbar  setHideSidebar={setHideSidebar} />
        <Sidebar hideSidebar={hideSidebar}/>

        <div className="mainContainer">
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

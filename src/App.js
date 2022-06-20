import { Navbar, Sidebar } from "./components";
import { Dashboard, Users } from "./containers";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

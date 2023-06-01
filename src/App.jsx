import {BrowserRouter as Router, HashRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Create from './pages/create/Create';
import Edit from './pages/edit/Edit';
import Read from './pages/read/Read';
import Home from './pages/home/Home';

function App() {
  
  return (
    <HashRouter hashType="hashbang" >

      <Navbar/>
      <Routes>
        <Route exact path="/customer-registration" element={<Home/>} />
        <Route exact path="/customer-registration/create" element={<Create/>} />
        <Route path="/customer-registration/read" element={<Read/>} /> 
        <Route path="/customer-registration/edit/:id" element={<Edit/>} />
      </Routes>

    </HashRouter>
  )
}

export default App

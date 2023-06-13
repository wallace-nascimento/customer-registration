import {BrowserRouter as Router, HashRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Create from './pages/create/Create';
import Edit from './pages/edit/Edit';
import Read from './pages/read/Read';
import Home from './pages/home/Home';

function App() {
  
  return (
    <HashRouter hashType="hashbang">

      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/create" element={<Create/>} />
        <Route path="/read" element={<Read/>} /> 
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>

    </HashRouter>
  )
}

export default App

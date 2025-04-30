import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Menu></Menu>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        {/* <Menu></Menu> */}
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

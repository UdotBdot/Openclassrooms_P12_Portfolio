import './App.scss'
import Loader from '../pages/loader/Loader'
import Home from '../pages/Home'
import Works from '../pages/Works';
import AboutMe from '../pages/AboutMe';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App

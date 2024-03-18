import './App.scss'
import Loader from '../pages/Loader/Loader'
import Home from '../pages/Home/Home'
import Works from '../pages/Works/Works';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <header>
        <Routes>
        <Route path="/" element={<Loader />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/works" element={<Works />}/>
        </Routes>
      </header>
    </BrowserRouter>

  )
}

export default App

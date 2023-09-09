import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import  Productos  from "./components/Productos";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Productos/>}/>
    </Routes>
    <Footer/>
    




    </BrowserRouter>
  )
  }
export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Feature from './pages/Feature'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='feature' element={<Feature/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

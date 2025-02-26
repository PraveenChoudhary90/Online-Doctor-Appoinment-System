
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Login from './pages/Login'
import Dashboard from './AdminDashboard'
import Search from './pages/Search'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='feature' element={<Feature/>}/>
        <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

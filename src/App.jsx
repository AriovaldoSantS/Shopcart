import './App.css'
import Login from './pages/Login'
import Products from './pages/Products'
import Shop from './pages/Shop'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/details' element={<Details />} />

      </Routes>
    </>
  )
}

export default App

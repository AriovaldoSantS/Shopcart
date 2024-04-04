import './App.css'
import Login from './pages/Login'
import Products from './pages/Products'
import { Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Checkout from './pages/Checkout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/checkout' element={<Checkout />} />

      </Routes>
    </>
  )
}

export default App


import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import './App.css'
import { Header } from './Component/Header'
import { Home } from './Component/Home'
import { Cart } from './Component/Cart'
import { useState } from 'react'

function App() {
  const [cart,setcart]=useState([]);
 return (
    <>
      <BrowserRouter>
      <Header cart={cart}/> 
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home cart={cart} setcart={setcart}/>}/>
          <Route path="/Cart" element={<Cart cart={cart} setcart={setcart}/>}/>
        </Routes>
      </div>
      </BrowserRouter>

    </>
  )
}

export default App

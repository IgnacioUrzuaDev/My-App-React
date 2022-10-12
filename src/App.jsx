import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider  from './Context/CartContext';
import CartContainer from './Components/Cart/CartContainer';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>        
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route> 
              <Route path='/category/:category' element={<ItemListContainer />}></Route>
              <Route path='/ItemDetail/:id' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<CartContainer />}></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path= "*" element={<h1>Error 404</h1>}></Route>
            </Routes>        
      </BrowserRouter>
    </CartContextProvider>
    </>   
  );
}

export default App;
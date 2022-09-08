import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route> 
          <Route path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route path='/ItemDetail/:id' element={<ItemDetailContainer/>}></Route>
          <Route path= "*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
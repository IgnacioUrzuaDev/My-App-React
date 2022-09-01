import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={'Wellcome to my e-commerce'}/>
    </div>
  );
}

export default App;
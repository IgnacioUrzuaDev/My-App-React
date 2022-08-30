import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Wellcome to my e-commerce'}/>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {

  const [counter, setCounter] = useState(0);
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Greetings, earthlings'}/>
    </>
  );
}

export default App;
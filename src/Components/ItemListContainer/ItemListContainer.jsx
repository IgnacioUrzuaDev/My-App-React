import React from 'react';
import ItemCount from '../Counter/ItemCount';

const ItemListContainer = ({greeting}) => {
    function onAdd(count){
        console.log ('Se han agregado ${count} productos al carrito')
    }
    return (
        <>
           <h1>{greeting}</h1> 
           <ItemCount stock={10} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;
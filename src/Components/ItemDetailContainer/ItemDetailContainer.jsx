import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const getProduct = () => new Promise ((resolve, reject) => {
        setTimeout(()=> resolve(Products.find(product => product.id ===8)), 2000)
    })
    
    useEffect(() => {
        getProduct()
        .then(Response => setItem(Response))
    }, [])
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;

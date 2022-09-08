import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Fragments/Loader';
const ItemDetailContainer = () => {
    const id = useParams()
    const [item, setItem] = useState()
    const getProduct = () => new Promise ((resolve, reject) => {
        setTimeout(()=> resolve(Products.find(product => product.id === Number(id))), 2000)
    })
    useEffect(() => {
        getProduct()
        .then(Response => setItem(Response))
    },[])
    return (
        <>
            {
                item ? <ItemDetail item={item}/> : <Loader/>
            }    
        </>
    )
}

export default ItemDetailContainer;

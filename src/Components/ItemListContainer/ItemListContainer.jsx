import  React, { useEffect, useState } from "react";
import  Products  from "../../Products/Products";
import  ItemList  from "../ItemList/ItemList";

const ItemListContainer = () =>{
    const[productList, setProductList] = useState([])

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(Products), 2000)
    })

    useEffect(()=>{
        getProducts()
        .then(Products => setProductList(Products))
        .catch(error => console.error(error))    
        
    },[])

    return (
        <ItemList productList={productList} />
    )
}
export default ItemListContainer
import  React, { useEffect, useState } from "react";
import  Products  from "../../Products/Products";
import  ItemList  from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Fragments/Loader";

const ItemListContainer = () =>{
    const[productList, setProductList] = useState([])
    const {category} = useParams()
    const getProducts = () => new Promise((resolve, reject) => {
        if(category){
            setTimeout(()=> resolve(Products.filter(item => item.category === category)), 2000)
        }else{
            setTimeout(()=> resolve(Products), 2000)
        }
    })
    useEffect(()=>{
        getProducts()
        .then(Products => setProductList(Products))
        .catch(error => console.error(error))
        return () => {
            setProductList([])
        }
    },[category])
    return (
        <>
            {
                productList.length ? <ItemList productList={productList} /> : <Loader/>
            }
        </>  
    )
}
export default ItemListContainer
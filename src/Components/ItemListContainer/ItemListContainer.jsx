import  Products  from "./Products";
import { useEffect, useState } from "react";
import  ItemList  from "../ItemListContainer/ItemList";

function consultPromise(confirm) {
    return new Promise((res, rej)=>{
        if(confirm) {
            res(Products)
        } else {
            rej("reject")
        }
    })
}
const ItemListContainer = () => {
   const [Products, setProducts] = useState([]);
   useEffect(() => {
        consultPromise(true)
        .then(Products =>{
            setProducts(Products)
        })
        .catch(error => {
            console.error(error)
        })
    return (
        <> 
           <ItemList data={data} />
        </>
    ));

export default ItemListContainer
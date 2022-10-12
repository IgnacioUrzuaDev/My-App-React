import  React, { useEffect, useState } from "react";
//import  Products  from "../../Products/Products";
import  ItemList  from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Fragments/Loader";
import db from "../../Services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

    const { categoryId } = useParams()

    const {items, setItems} = useState()
    const {load, setLoad} = useState(true)


    const getData = async (category) =>{
        try{
            setLoad(true)
            const document = category ? query(collection(db,"Items"), where("category", "==", category))
                : collection(db, "Items")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc ={ id: doc.id,...doc.data() })
            setItems(result)
            setLoad(false)
        }   catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(categoryId)
    },[categoryId])


    return (
        <>
            {load ? <Loader /> : <ItemList productList={productList} />}
        </>  
    )
}
export default ItemListContainer
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Fragments/Loader';
import { getDoc } from 'firebase/firestore';
const ItemDetailContainer = () => {
    const {id} = useParams()
    const [selectedItem, setSelectedItem] = useState()
    const [load, setLoad] = useState(true)

    const getSelected = async(idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() =>{
        getSelected(id)
    }, [id])
    
    return (
        <>
            {load ? <Loader /> : <ItemDetail item={item} />}    
        </>
    )
}

export default ItemDetailContainer;

import React, { useState, createContext, useEffect } from "react";
import Products from '../Products/Products'

export const context = createContext({
    cartProducts:[]
});
const { Provider } = context;

const CartContext = ( {children} ) => {

    const[buy, setBuy] = useState([]);
    const[qtyBuy, setQtyBuy] = useState (0);

    const getQtyItem = () => {
        let quantity = 0;
        buy.forEach(item=>{
            quantity += item.quantity
        })
        setQtyBuy(quantity);
    }
    useEffect(() => {
        getQtyItem();
    },[buy])

    const addItem = (item) => {
        if(isInCart(item.id)){
            const found = buy.find(Products.id === item.id);
            const index = buy.indexOf(found);
            const auxBuy = [...buy];
            auxBuy[index].quantity += item.quantity;
            setBuy(auxBuy);
        }else{
            setBuy([...buy, item])
        };
    }

    const removeItem = (id) => {
        setBuy(buy.filter(item => item.id !== id));
    }

    const clear = () => { 
        setBuy([]);
        setQtyBuy(0);
    }
    
    const isInCart = (id) => { 
        return buy.some(buy => buy.id === id);
    }

    const totalBuy= () => {
        let total=0;
        buy.forEach((e)=>total=total+ parseFloat(e.quantity*e.price))

        return total.toFixed(2);
    }

    return (
        <Provider value={{
            cartProducts:buy,
            addItem,
            removeItem,
            clear,
            qtyBuy,
            totalBuy}}>
            {children}
            </Provider>
    );
}

export default CartContext;
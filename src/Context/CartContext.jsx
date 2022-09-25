import  React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (id, price, quantity, stock) => {
        const isInCart = cart.find(product => product.id === id)
        if (isInCart) {
            isInCart.quantity = isInCart.quantity + quantity;
            setCart([...cart])
        }else {
            setCart([...cart, {id: id, price: price, quantity: quantity, stock : stock }])
        }
    }

    const removeItem = (itemId, price) => {
       const filteredArray = cart.filter(
       (item) => item.id !== itemId || item.price !== price
       )
       setCart(filteredArray)
    }
    
    const clear = () => { setCart([]) }

    const totalQuantity = () =>{
        if(cart.length > 0 ){
            const result = cart.reduce((acc, curr) => acc + curr.quantity, 0)
                return result
        }
    }

    const totalPrice = () => {
        return cart.reduce((acc, curr) => acc + curr.price * curr.price, 0)
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalQuantity, totalPrice }}>{ children }</CartContext.Provider>;
};

export default CartContextProvider;
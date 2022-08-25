import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import '../CartWidget/CartWidget.css';


const CartWidget = () => {
    return (
        <>
        <MdShoppingCart className='cartIcon'/>
        </>
    );
}

export default CartWidget;

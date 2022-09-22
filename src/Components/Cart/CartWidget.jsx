import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import './CartWidget.css';
import { useCartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom'

function CartWidget () {
    const {cart, totalQuantity} = useCartContext()
    return (
        <>{
        cart.length ?
        <Link to="/cart" >
        <MdShoppingCart className='cartIcon'/>
        <p>{totalQuantity()}</p>
        </Link>
        :""}
    </>
    );
}

export default CartWidget;

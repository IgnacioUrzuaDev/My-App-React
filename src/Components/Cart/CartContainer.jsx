import React, { useContext } from "react"
import { useCartContext } from "../../Context/CartContext"
import {Link} from 'react-router-dom'
import ItemCart from "./ItemCart"

const CartContainer = () =>{

    const { cart, clear, getTotal } = useContext(useCartContext)

    return (
        <>
        <h1>Your Cart</h1>
        <hr />
        {cart.length !== 0 ?
            (
                <div>
                    <div>
                        {cart.map((e) => <ItemCart key={e.id} item={e} />)}
                        <br />
                        {`Total:  $ ${getTotal()}`}
                        <br />
                        <button onClick={clear}>Clear Cart</button>
                        <br />
                        <br />
                        <Link to='/checkout'>
                            <button> Checkout </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>Your Cart is empty</h3>
                    <Link to='/'>Keep shopping</Link>
                </div>
            )
        }
        </>
    )
}

export default CartContainer;
import { useCartContext } from "../../Context/CartContext"
import {Link} from 'react-router-dom'
import ItemCart from "./ItemCart"


function CartContainer() {
    const {cart, clear, totalPrice} = useCartContext()
    const key = (id, quantity) => {
        return id+quantity
    }
    return (
    <>  
        {cart.length ? 
        <div>
            {
            cart.map(item => 
            <ItemCart id={item.id} key={key(item.id)} quantity={item.quantity} price={item.price}/>)}
            <button onClick={() => clear()}> clear cart </button>
            <h1>Total: {totalPrice()}</h1>
        </div>
        :
        <div>
            <h1> Your cart is empty</h1>
            <Link to="/">
                <button> Products </button>
            </Link>
        </div>}
    </>
    )
}

export default CartContainer;
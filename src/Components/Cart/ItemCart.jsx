import { useCartContext } from "../../Context/CartContext"
import  Products  from '../../Products/Products'


function ItemCart({ id, quantity, price}) {
    const { removeItem } = useCartContext()
    const Product = Products.find((product) => product.id === id)
    const key = Product.id + price

    return (
        <>
        <div key={key}>
            <img src={Product.img} alt={Product.title} />
            <div>
                <p>{Product.title}</p>
                <p>{Product.category}</p>
                <p>{Product.stock}</p>
                <p>{Product.price}</p>
                <p>Total : {Product.price * quantity}</p>
            </div>
            <button onClick={() => removeItem(id)}> Remove </button>
        </div>
        </>   
    )
}

export default ItemCart
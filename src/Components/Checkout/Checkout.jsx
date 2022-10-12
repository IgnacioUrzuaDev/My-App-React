import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { useNavigate } from "react-router-dom"
import db from "../../Services/firebase"
const Checkout = () => {
    const { cart, totalPrice, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
            Name:'',
            Email:'',
            Phone: ''
    })

    const { Name, Email, Phone} = buyer
    const navigate = useNavigate 

    const generateOrder = async (data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear()
        } catch (error) {
            console.log(error) 
        }
    }

    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e=>{return {id:e.id,title:e.name,price:e.price,quantity:e.quantity}})
        const date = new Date()
        const total = totalPrice()
        const data = {buyer, items, date, total}
        generateOrder(data)
    }

    const handleClear = () => {
        clear()
        navigate('/cart')
    }

  return (
    <>
        <h1>Checkout Line</h1>
        <hr />
        {!orderId?
        <div><h4>Submit your info: </h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={Name}
                    onChange={handleInputChange} 
                /> <br /><br />
                <input
                    type="text"
                    name="Email"
                    placeholder="Email"
                    value={Email}
                    onChange={handleInputChange} 
                /> <br /><br />
                <input
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    value={Phone}
                    onChange={handleInputChange} 
                /> <br /><br />
                <br />
                <br />
                <input 
                    type="submit"
                    value="checkout" />   
            </form></div>
            :
            <h4> Your Order's number is: {orderId}</h4>    
        }
        <br />
        <button onClick={clear}> Cancel Order </button>
    </>
  )
}

export default Checkout
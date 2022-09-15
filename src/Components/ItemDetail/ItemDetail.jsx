import React from 'react';
import ItemCount from '../Counter/ItemCount'
import '../ItemDetail/ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext';


const ItemDetail = ({item}) => {
        const [showBtn, setshowBtn] = useState(true)
        
        const onAdd = () => {
            const {addItem} = CartContext()
            const onAdd = ( id, count ) =>{
              setshowBtn(false)
              addItem( id, count )
        };
    }
           
    return (
    <article>
        <h1>{item.title}</h1>
        <div className='detail-card'>
            <div className='leftside-detail-card'>
                <img src={item.img} alt={item.title} className="img"/>
            </div>
            <div className='rightside-detail-card'>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
                <p>Stock: {item.stock}</p>
                {showBtn ? <ItemCount stock={item.stock} initial={0} id={item.id} onAdd={onAdd}/> : <Link to={'/cart'} className='gotocartBtn' >Check your Cart</Link>}            
            </div>
        </div>
    </article>
    )
}

export default ItemDetail;

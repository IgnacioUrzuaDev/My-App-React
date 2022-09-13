import React from 'react';
import ItemCount from '../Counter/ItemCount'
import '../ItemDetail/ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {
        const [showBtn, setshowBtn] = useState(true)
        const onAdd = (quantity) => {
                console.log(quantity)
                setshowBtn(false)
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
                {showBtn ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> : <Link to={'/cart'} className='gotocartBtn' >Check your Cart</Link>}            
            </div>
        </div>
    </article>
    )
}

export default ItemDetail;

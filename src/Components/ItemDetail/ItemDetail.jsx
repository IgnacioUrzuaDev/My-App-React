import React from 'react';
import ItemCount from '../Counter/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({item}) => {
        const onAdd = (quantity) => {
                console.log(quantity)
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
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    </article>
    )
}

export default ItemDetail;

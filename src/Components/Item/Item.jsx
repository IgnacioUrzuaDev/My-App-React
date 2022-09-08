import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
const Item = ({productList}) => {
    const {title, img, price, id} = productList
    return (
        <div className='item-card'>
            <div className='item-container'>
                <h2>{title}</h2>
                <div>
                    <img className='img' src={img} alt={`Imagen del producto ${title}`}/>
                </div>
                <p className='price'>{price}</p>
                <Link to={`/ItemDetail/${id}`}>
                    <button className='button button-detail'>Show item details</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;
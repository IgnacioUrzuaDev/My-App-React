import React from "react";
import './Item.css'

const Item = ({productList}) => {
    const {title, img, price, id} = productList
    return (
        <div className='item-card'>
            <div className='item-container'>
                <h2>{title}</h2>
                <div>
                    <img className='img' src={img} alt={`Imagen del producto ${title}`} />
                </div>
                <p className='price'>{price} $</p>
                <button className='button button-detail'>Show item details</button>
            </div>
        </div>
    )
}

export default Item;
import React from "react";
import Item  from '../Item/Item'

const ItemList = ({productList}) => {
    return (
        <div style={{display: 'flex', gap: '2rem'}}>
            {
                productList.map(product=> <Item key={Item.id} productList={product} />)
            }
        </div>
    )
}

export default ItemList;
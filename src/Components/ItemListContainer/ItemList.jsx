import React from "react";
import Item  from '../ItemListContainer/Item'

const ItemList = ({data}) => {
    return (
        <div>
            {data.map((Products) => (
                <Item Products={Item} key={Item.id} />
                ))}
        </div>
    );
}

export default ItemList;
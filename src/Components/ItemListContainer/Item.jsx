import React from "react";
import ItemCount from "../Counter/ItemCount";

function Item({ Products }) {
    return (
        <>       
            <div>
                <img src={Products.img} alt={Products.title}/>
                <div>
                    <p>{Products.title}</p>
                    <p>${Products.price}</p>
                    <ItemCount stock={Products.stock}/>
                </div>
            </div>           
        </>
    );
}

export default Item;
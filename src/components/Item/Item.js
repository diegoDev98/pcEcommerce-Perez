import './Item.css'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function Item(props) {
        
        return (
            <div className="item">
                <h3>{props.name}</h3>
                <img src={props.src} />
                <p>{props.desc}</p>
                <ItemCount initial={props.initial} stock={props.stock}/>
            </div>
        )
    

}
export default Item;
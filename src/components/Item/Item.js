import './Item.css'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function Item(props) {
        
        return (
            <div className="item">
                <h3>{props.name}</h3>
                <img src={props.src} />
                <p>{props.desc}</p>
                <ItemCount initial= {1} stock="5"/>
            </div>
        )
    

}
export default Item;
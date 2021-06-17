import './Item.css'
import React  from 'react'
import ItemCount from './ItemCount/ItemCount';

function Item(props) {
    
        return (
            <div className="item">
                <div>{props.id}</div>
                <h3>{props.title}</h3>
                <img src={props.url} alt={props.title} />
                <h4>{props.price}</h4>
                <ItemCount 
                    initial={props.initial} 
                    stock={props.stock} 
                    onAdd={ () => { alert('Item Added To Cart') } } />
            </div>
        )
}
export default Item;
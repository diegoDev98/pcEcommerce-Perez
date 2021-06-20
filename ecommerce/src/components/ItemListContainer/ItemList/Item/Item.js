import './Item.css'
import React  from 'react'
import ItemCount from './ItemCount/ItemCount';
import {Link} from 'react-router-dom'

function Item(props) {
    
        return (
            <div className="item">
                <Link to = {`/item/${props.id}`}>
                <div>{props.id}</div>
                <h3>{props.title}</h3>
                </Link>
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
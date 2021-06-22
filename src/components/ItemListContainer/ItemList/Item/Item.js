import './Item.css'
import React  from 'react'
import ItemCount from './ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import {useCartContext} from '../../../CartContext'


function Item(props) {
    const {addToCart } = useCartContext();
        return (
            <div className="item">

                <Link to = {`/item/${props.id}`}>
                    <div className="itemId">{props.id}</div>
                    <h3>{props.title}</h3>
                    <div className="imgcontainer">
                        <img src={props.url} alt={props.title} />
                    </div>
                </Link>

                <h4>${props.price}</h4>
                
                <ItemCount 
                    title={props.title}
                    price = {props.price}
                    id= {props.id}
                    initial={props.initial} 
                    stock={props.stock} 
                    onAdd={ (title,quantity,id,price) => { addToCart(title,quantity,id,price) } } />
            </div>
        )
}
export default Item;
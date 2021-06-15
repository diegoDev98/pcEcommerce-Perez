import './Item.css'
import React ,  {useEffect} from 'react'
import ItemCount from './ItemCount/ItemCount';

function Item(props) {
    
        return (
            <div className="item">
                <div>{props.id}</div>
                <h3>{props.title}</h3>
                <img src={props.url} />
                <h4>{props.price}</h4>
                <ItemCount initial={props.initial} stock={props.stock}/>
            </div>
        )
    

}
export default Item;
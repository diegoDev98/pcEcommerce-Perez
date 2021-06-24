import './Item.css'
import React,{useState}  from 'react'
import ItemCount from '../../../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../../CartContext'
import soldout from './soldout.png'



function Item(props) {
    const {addToCart } = useCartContext();
    const [stock,setStock] = useState(props.stock)
        return (
            <div className="item">

                <Link to = {`/item/${props.id}`}>
                    <div className="itemId">{props.id}</div>
                    <h3>{props.title}</h3>
                    <div className="imgcontainer">
                    <img src={props.url} alt={props.title} />
                    </div>
                </Link>
                {stock==0 &&<img className="soldout" src={soldout}></img>}
                <h4>${props.price}</h4>
                
                <ItemCount 
                    title={props.title}
                    price = {props.price}
                    id= {props.id}
                    initial={0} 
                    stock={stock} 
                    setStock={setStock}
                    onAdd={ (title,quantity,id,price) => { addToCart(title,quantity,id,price);} } />
            </div>
        )
}
export default Item;
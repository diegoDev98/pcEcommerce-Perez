
import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount/ItemCount'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'



export default function ItemDetail({item}) {
let [btnDisplay,setBtnDisplay] = useState(false);

useEffect(() => {
    console.log(btnDisplay)
} , [btnDisplay])
    
    function addToCart(quantity) {
        alert('Item Added To Cart')
    }
    return (
        <div className="itemDetail">
            <h1><i>{item.title && item.title.toUpperCase()}</i></h1><hr/>
            <div className="itemInfo">
                <div className="detailImageContainer">
                    <img src={item.url} alt={item.title}  className="image"/>
                </div>
                <div className="desc">
                    
                    <p>{item.description}</p>
                    <h4>{item.price}</h4>
                    <ItemCount 
                        className ="counter"
                        initial={1}
                        stock={item.stock} 
                        onAdd={ (quantityToAdd) => { 
                            setBtnDisplay(true);
                         } } 
                    />
                    {btnDisplay == true ? <Link to='/cart'><button className="btn btn-success">Termina Tu Compra</button> </Link>:console.log('nothing')}
                </div>
                </div> 
            </div>
    )
}

import './ItemDetail.css'
import ItemCount from '../../ItemCount/ItemCount'

import soldout from './../../ItemListContainer/ItemList/Item/soldout.png'

import { useCartContext } from '../../CartContext'

export default function ItemDetail({item}) {



const {addToCart } = useCartContext();
    return (
        <div className="itemDetail">
            <h1><i>{item.title && item.title.toUpperCase()}</i></h1><hr/>
            <div className="itemInfo">
                <div className="detailImageContainer">
                    <img src={item.url} alt={item.title}  className="image"/>
                </div>
                <div className="desc">
                    
                    <p>{item.description}</p>
                    <h4>${item.price}</h4>
                    <ItemCount 
                        detailContainer = {true}
                        title={item.title}
                        price = {item.price}
                        id= {item.id}
                        initial={0} 
                        stock={item.stock} 
                        onAdd={ (title,quantity,id,price) => { addToCart(title,quantity,id,price) } } 
                    />
                </div>
                </div> 
                {
                item.stock===0 &&
                <img src={soldout} alt ={item.title} className="detailso"></img>
                }
            </div>
    )
}
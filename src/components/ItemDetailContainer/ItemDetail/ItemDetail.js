
import './ItemDetail.css'
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount/ItemCount'
export default function ItemDetail({item}) {



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
                    onAdd={ () => { alert('Item Added To Cart') } } />
                </div>
                </div> 
            </div>
    )
}
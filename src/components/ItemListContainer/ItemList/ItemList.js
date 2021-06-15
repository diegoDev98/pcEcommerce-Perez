import React, {useState} from 'react'
import Item from './Item/Item'

function ItemList({items}){
const [products, setProducts] = useState(items);

    return(
        
            <>
                {
                products.map(u=> 
                    <Item 
                        initial={1} 
                        title={u.title} 
                        url={u.url} 
                        price={u.price}  
                        stock={u.stock} 
                        id={u.id}>  
                    </Item>)
                    }
            </>
      
    )
    
}
export default ItemList;

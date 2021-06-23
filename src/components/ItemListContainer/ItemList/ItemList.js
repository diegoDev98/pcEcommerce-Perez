import React from 'react'
import Item from './Item/Item'


function ItemList({items}){


    return(
        
            <>
                {
                items.map((u,index)=> 
                    
                        <Item 
                            key={index}
                            initial={1} 
                            title={u.title} 
                            url={u.url} 
                            price={u.price}  
                            stock={u.stock} 
                            id={u.id}
                            >  
                        </Item>
                    
                    )
                   
                    }
                    
            </>
      
    )
    
}
export default ItemList;

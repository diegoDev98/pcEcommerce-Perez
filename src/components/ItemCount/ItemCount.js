import React, {Component,useState} from 'react';
import './ItemCount.css'



function ItemCount ({stock , initial, onAdd}) {
   let [num,setNum] = useState(initial);
   function onAdd() {
       alert('Item Added To Cart')
   }
   
    return (
        <>
            <div className="ItemCount">
                <button className="subtract" onClick={() => setNum( 
                    num > 0 
                    ? num = num - 1 
                    : ( alert('Cant go under 0!') , num = num ) 
                    ) }  >-</button> 

                <span className="countNumber">{num}</span> 

                <button className="add" onClick={() => setNum( 
                    num < stock 
                    ? num=num+1 
                    : ( alert('Not enough stock!') , num = num
                    ) ) }>+</button>
            </div>
            <button className="btn btn-primary" onClick={onAdd}>Agregar Al Carrito</button>
        </>
    )
}

export default ItemCount;
import React, {Component,useState,useEffect} from 'react';
import './ItemCount.css'



function ItemCount ({stock , initial, onAdd}) {
   let [num,setNum] = useState(initial);
   function onAdd() {
       alert('Item Added To Cart')
   }
   
    return (
        <>
            <div className="ItemCount">
                <button className="counter" onClick={() => {num > 0 && setNum(num-1) }  } >-</button> 

                <span className="countNumber">{num}</span> 

                <button className="counter" onClick={() => { num<stock && setNum(num+1)}}>+</button>
            </div>
            <button className="btn btn-primary addToCart" onClick={onAdd}>Agregar Al Carrito</button>
        </>
    )
}

export default ItemCount;
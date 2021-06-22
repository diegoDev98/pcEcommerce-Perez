import React, {useState} from 'react';
import './ItemCount.css'
import {Link} from 'react-router-dom'
import BuyButton from './BuyButton';



function ItemCount ({stock , initial, onAdd,title,price,id,detailContainer}) {
   let [num,setNum] = useState(initial);
   let [btnDisplay,setBtnDisplay] = useState(false);
   let [itemCountDisplay,setItemCountDisplay] = useState(true);
  
   
    return (
        <>
        
            {itemCountDisplay === true &&
            <div>
                <div className="ItemCount">
                    <button className="counter" onClick={() => {num > 0 && setNum(num-1) }  } >-</button> 

                    <span className="countNumber">{num}</span> 

                    <button className="counter" onClick={() => { num<stock && setNum(num+1)}}>+</button>
                </div>
                <button className="btn btn-primary addToCart" onClick={ ()=> {onAdd(title, num, id, price); detailContainer && setBtnDisplay(true); detailContainer && setItemCountDisplay(false);  }}>Agregar Al Carrito</button>
            </div>}
            
            {btnDisplay  && detailContainer && <Link to='/cart'>
                    <BuyButton /></Link> 
			}
        </>
    )
}

export default ItemCount;
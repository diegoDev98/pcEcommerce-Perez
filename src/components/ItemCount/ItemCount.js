import React, {useState} from 'react';
import './ItemCount.css'
import {Link} from 'react-router-dom'
import BuyButton from './BuyButton';
import { getFireStore } from '../../firebase/index';
import { addItems,deleteItems } from '../../firebase/index';
import firebase from 'firebase/app'

const db = getFireStore();


function reduceItemStock(id,stock,db){

    db.collection('items').where('id','==',id).get().then(
        (snapshot) => {
            snapshot.docs.forEach(doc => {
                var elID= doc.id;
                const itemRef = db.collection('items').doc(elID);
                itemRef.update({
                    stock: firebase.firestore.FieldValue.increment(-stock)
                });


            })
        }
    )
   
    
}

function ItemCount ({stock , initial, onAdd,title,price,id,detailContainer,setStock}) {
   let [num,setNum] = useState(initial);
   let [btnDisplay,setBtnDisplay] = useState(false);
   let [itemCountDisplay,setItemCountDisplay] = useState(true);

   
    return (
        <>
        
            {itemCountDisplay === true &&
            <div>
                <div className="ItemCount" >
                    <button className="counter" onClick={() => {num > 0 && setNum(num-1) }  } >-</button> 

                    <span className="countNumber" >{num}</span> 

                    <button className="counter" onClick={() => { num<stock && setNum(num+1)}}>+</button>
                </div>
                <button className="btn btn-primary addToCart" id={stock==0&&'disabledbtn'}  onClick={ ()=> 
                    {
                        onAdd(title, num, id, price);
                        setNum(0);
                        setStock(stock-num);
                        reduceItemStock(id,num,db)
                        detailContainer && setBtnDisplay(true); 
                        detailContainer && setItemCountDisplay(false);  
                    }} >Agregar Al Carrito</button>
            </div>}
            
            {btnDisplay  && detailContainer && <Link to='/cart'>
                    <BuyButton /></Link> 
			}
        </>
    )
}

export default ItemCount;
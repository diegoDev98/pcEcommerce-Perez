import React, {useState} from 'react';
import './ItemCount.css'
import {Link} from 'react-router-dom'
import BuyButton from './BuyButton';
import { getFireStore } from '../../firebase/index';
import { addItems,deleteItems } from '../../firebase/index';
import firebase from 'firebase/app'

const db = getFireStore();


function reduceItemStock(id,stock,db){
    
    console.log('test 1 =>')
    db.collection('items').where('id','==',id).get().then(
        (snapshot) => {
            snapshot.docs.forEach(doc => {
                doc = [doc.data()]
                doc[0].stock = doc[0].stock-stock;
                if(doc[0].stock<0) doc[0].stock=0;
                
                deleteItems(doc,'items')
                setTimeout(()=>{
                    db.collection('items').add(doc[0])
                },1000)
               
                // addItems(doc,'items')
                
               
            })
        }
    )

    // database.collection('items').where('id','==','1').update({
    //     stock: firebase.firestore.FieldValue.increment(-stock)
    // });
    
}

function ItemCount ({stock , initial, onAdd,title,price,id,detailContainer,setStock}) {
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
                <button className="btn btn-primary addToCart" onClick={ ()=> 
                    {
                        onAdd(title, num, id, price);
                        setNum(0);
                        setStock(stock-num)
                        reduceItemStock(id,num,db)
                        detailContainer && setBtnDisplay(true); 
                        detailContainer && setItemCountDisplay(false);  
                    }}>Agregar Al Carrito</button>
            </div>}
            
            {btnDisplay  && detailContainer && <Link to='/cart'>
                    <BuyButton /></Link> 
			}
        </>
    )
}

export default ItemCount;
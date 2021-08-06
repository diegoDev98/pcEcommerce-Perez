import React from 'react';
import CartItem from './CartItem';
import {useCartContext} from '../../CartContext'
import EmptyCartIcon from './EmptyCartIcon/EmptyCartIcon'
import {Link} from 'react-router-dom'

function addTotal(total, num) {
    return total + num;
  }
 
function CartWidget(props) {
  
    const items = props.content;
    const {clearItems} = useCartContext();
    const {removeItem} = useCartContext();
 

    let total = 0;
    if(items.length > 0){
        total = items.map(item => item.price).reduce(addTotal)
    }

    return (
        
        items.length>0 ?
    (
        <div className="cartWidget">
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            {items.map((u,index)=>
            <CartItem
                id={u.id}
                name={u.name}
                quantity={u.quantity}
                price={u.price}
                key={index}
                remove={()=>{removeItem(u.id,u.quantity)}}
                
            />)}
            <tr>
                <td colSpan="5" className="total">Total:  ${total}</td> 
            </tr>
            <tr>
                <td colSpan="5" style={{position:'relative'}} >
                    
                <Link to="/checkout"><button className="checkoutBtn"> Checkout</button></Link>
                <button className="clearCartIcon" onClick={()=>{clearItems()}}>Clear Items</button>
                </td> 
              
            </tr>
            </tbody>
            </table>
            
            
        </div>
       ) : <div className="emptyCart">
           Cart is empty
           <EmptyCartIcon></EmptyCartIcon>
           
           </div>
    ); 


} 

export default CartWidget;
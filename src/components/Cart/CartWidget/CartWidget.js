import React from 'react';
import CartItem from './CartItem';
import {useCartContext} from '../../CartContext'
import EmptyCartIcon from './EmptyCartIcon/EmptyCartIcon'
import {Link} from 'react-router-dom'

function CartWidget(props) {
    const items = props.content;
    const {total} = useCartContext();
    const {clearItems} = useCartContext();
    const {removeItem} = useCartContext();
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
                remove={()=>{removeItem(u.id)}}
            />)}
            <tr>
                <td colspan="5" className="total">Total:  ${total}</td> 
            </tr>
            <tr>
                <td colspan="5" style={{position:'relative'}} >
                    
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
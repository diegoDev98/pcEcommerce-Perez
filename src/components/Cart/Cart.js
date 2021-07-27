import React from 'react';
import './Cart.css'
import { useCartContext } from '../../CartContext';
import CartWidget from './CartWidget/CartWidget';


function Cart() {
    
    
    const {items} = useCartContext();
    

    return (
        <div className="cart">
            <CartWidget content={items}/>
        </div>
    );
}

export default Cart;
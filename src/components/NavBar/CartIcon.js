import React from 'react';
import { useCartContext } from '../CartContext';


export default function CartIcon(props) {
    const {itemsInCart} = useCartContext();
    return (
        
        <i className="bi bi-cart">
            {itemsInCart>0 && <div className="circle">{itemsInCart}</div>}
            
        </i>
    )
}
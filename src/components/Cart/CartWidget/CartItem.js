import React from 'react';

function CartItem(props) {
    var deleteItem = {
        color:'red',
        fontSize:'20px',
        fontWeight:'800' 
    }
    return (
        <tr className="cartItem">
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td style={deleteItem} onClick={props.remove}>X</td>
        </tr>
    );
}

export default CartItem;
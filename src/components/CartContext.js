import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){

	const [items, setItems] = useState([]);
	const [itemsInCart, setItemsInCart] = useState(0);
	
	
    
	const isInCart = function(id) {
		return items.findIndex((obj => obj.id === id));
	}

const addToCart =function(name, quantity, id, price){
	
		var objIndex = isInCart(id)
		setItemsInCart(prev => prev + quantity)
		var item =[...items];
		if(quantity!==0 && objIndex=== -1 ) {
			item.push({'id': id, 'name': name, 'quantity': quantity, 'price': price*quantity})
		}
		else if(objIndex!==-1){
			item[objIndex].quantity += quantity;
			item[objIndex].price += price * quantity
		}
		
		setItems(item);
	

	}

	const removeItem = function(id,num){
		if (items.length > 0) {
			const updateItems = items.filter(u=>u.id!==id);
			setItems(updateItems);
			if(num){
				setItemsInCart(prev=>prev-num)
			}
			
		}
	}
	const clearItems = function(){
		setItems([]);
		setItemsInCart(0)
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem,clearItems,itemsInCart,setItemsInCart}}>
{children}
</CartContext.Provider>
}
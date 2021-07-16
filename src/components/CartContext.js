import React, { useContext, useState,useEffect } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [itemsInCart, setItemsInCart] = useState(0);
	

    useEffect(() => {
		var total=0;
		for(var x=0;x<items.length;x++){
			total += items[x].price;
		}
		
	setTotal(total)
	} ,[items])
    
	const isInCart = function(id) {
		return items.findIndex((obj => obj.id === id));
	}

const addToCart =function(name, quantity, id, price){
		var objIndex = isInCart(id)
		setItemsInCart(prev => prev + quantity)
		var item =[...items];
		console.log(quantity);
		if(quantity!==0 && objIndex=== -1 ) {
			item.push({'id': id, 'name': name, 'quantity': quantity, 'price': price*quantity})
		}
		else if(objIndex===0){
			item[objIndex].quantity += quantity;
			item[objIndex].price += price * quantity
		}
		
		setItems(item);
	

	}

	const removeItem = function(id){
		if (items.length > 0) {
			const updateItems = items.filter(u=>u.id!==id);
			setItems(updateItems);
		}
	}
	
	const clearItems = function(){
		setItems([]);
		setItemsInCart(0)
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem,clearItems,total,itemsInCart}}>
{children}
</CartContext.Provider>
}
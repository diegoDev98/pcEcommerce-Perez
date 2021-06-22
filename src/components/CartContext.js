import React, { useContext, useState,useEffect } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);

    useEffect(() => console.log('Items in cart have been updated',items) ,[items])
    
	const isInCart = function(id) {
		return items.findIndex((obj => obj.id == id));
	}

	const addToCart = function(name, quantity, id, price){
		var objIndex = isInCart(id)

		var item =[...items];

		if(objIndex== -1 ) {
			item.push({'id': id, 'name': name, 'quantity': quantity, 'price': price*quantity})
		}
		else {
			item[objIndex].quantity += quantity;
			item[objIndex].price += price * quantity
		}
		
		setItems(item);
	

	}

	const removeItem = function(id){
		if (items.length > 0) {
			const updateItems = items.filter(function (item){
				return item.productId !== id;
			});
			setItems(updateItems);
		}
	}
	
	const clearItems = function(){
		setItems([]);
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem}}>
{children}
</CartContext.Provider>
}
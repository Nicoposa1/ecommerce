import React, { createContext, useState } from "react"
import { element } from "prop-types"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = (element) => {
		const exist = cart.find((item) => item.id == element.id);
		if(exist) {
			setCart(cart.map((item) =>
				item.id == exist.id ? {...item, quantity: item.qty + element.qty} : item
			));
		} else
			setCart([...cart, element]);
	};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
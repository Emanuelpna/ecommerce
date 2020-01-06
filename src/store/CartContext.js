import React, { createContext, useState } from 'react';

import { getProductById } from './fakeProducts';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartIds, setCartIds] = useState([1, 4, 4]);

  const addToCart = productId => {
    setCartIds([...cartIds, productId]);
  };

  const cart = () => {
    return cartIds.map(productId => {
      return getProductById(productId);
    });
  };

  const getTotalValue = () => {
    return cart()
      .map(item => {
        return item.price;
      })
      .reduce((accumulator, nextValue) => accumulator + nextValue);
  };

  const getCount = id => {
    return cartIds.filter(cartId => {
      return cartId === id;
    }).length;
  };

  const removeFromCart = id => {
    setCartIds(cartIds.filter(product => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartIds,
        getCount,
        cart,
        addToCart,
        getTotalValue,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

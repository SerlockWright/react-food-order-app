/* eslint-disable react/prop-types */
import React from 'react';
import CartContext from './CartContext';
import { cartReducer } from '../reducer/cart.reducer';
import { addCartItem, removeCartItem } from '../reducer/cart.action';

//initial state reducer
const defaultCartState = {
    items: [],
    totalAmount: 0
}

//khai bao reducer

function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = React.useReducer(cartReducer, defaultCartState);

    const handleAddItemToCart = (item) => {
        dispatchCartAction(addCartItem(item))
    }

    const handleRemoveItemFromCart = (id) => {
        dispatchCartAction(removeCartItem(id))
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItemToCart,
        removeItem: handleRemoveItemFromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
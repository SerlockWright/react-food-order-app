/* eslint-disable react/prop-types */
import React from 'react';
import CartContext from './CartContext';

//initial state reducer
const defaultCartState = {
    items: [],
    totalAmount: 0
}

//khai bao reducer
const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE_CART_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.payload.id)
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;

};

function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = React.useReducer(cartReducer, defaultCartState);

    const handleAddItemToCart = (item) => {
        dispatchCartAction({
            type: 'ADD_CART_ITEM',
            payload: {
                item: item
            }
        })
    }

    const handleRemoveItemFromCart = (id) => {
        dispatchCartAction({
            type: 'REMOVE_CART_ITEM',
            payload: {
                id: id
            }
        })
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
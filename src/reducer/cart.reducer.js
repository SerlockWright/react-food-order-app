import * as cartAction from './cart.action';

//initial state
const defaultCartState = {
    items: [],
    totalAmount: 0
}

//reducer function
export function cartReducer(state = defaultCartState, action) {
    if (action.type === cartAction.ADD_ITEM_CART) {
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

    if (action.type === cartAction.REMOVE_ITEM_CART) {
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
}
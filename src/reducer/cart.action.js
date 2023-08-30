//constant
export const ADD_ITEM_CART = 'CART/ADD_ITEM_CART';
export const REMOVE_ITEM_CART = 'CART/REMOVE_ITEM_CART';

//action creator
export const addCartItem = (item) => {
    return {
        type: ADD_ITEM_CART,
        payload: {
            item: item
        }
    };
};

export const removeCartItem = (id) => {
    return {
        type: REMOVE_ITEM_CART,
        payload: {
            id: id
        }
    };
};

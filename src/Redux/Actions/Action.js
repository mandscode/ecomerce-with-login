import { DELETE_ITEM, PRODUCTS } from "./ActionTypes";

export const CartProducts = value => {
    return {
        type: PRODUCTS,
        payload: value
    }
}

export const deleteProduct = value => {
    return {
        type: DELETE_ITEM,
        payload: value
    }
}

export const addQuantity = id => {
    return {
      type: "ADD_QUANTITY",
      payload: id
    };
  };

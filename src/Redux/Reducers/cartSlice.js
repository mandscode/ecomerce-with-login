import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    person: [],
  },
  reducers: {
    addPerson: (state, action) => {
     return {
      ...state,
      person: [...state.person, action.payload]
     }
    },
    removePerson: (state, action) => {
     return {
      person: []
     }
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
       return { ...state,
    //   const removeItem = state.cart.filter((item) => item.id !== action.payload);
      cart: [...state.cart.filter((product) => product.id !== action.payload.id)]
    //   state.cart = removeItem;
    }},
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  addPerson,
  removePerson
} = cartSlice.actions;
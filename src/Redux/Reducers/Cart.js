import { DELETE_ITEM, PRODUCTS } from "../Actions/ActionTypes";

const initialState = {
    products:[0],
    cartItems: []
}

const Cart = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload],
            };

        case DELETE_ITEM:
                return {
                ...state,
                cartItems: [...state.cartItems.filter((product) => product !== action.payload)]
            }
        case "ADD_QUANTITY":
            return {
                ...state,
                products: state.cartItems.map((item) => {
                    if(item.id === action.payload.id) {
                        return item.inCart += 1;
                        
                    } 
                })
                };  
        

        default: return state
        
    }
    
}

export default Cart;
import { combineReducers } from 'redux';
import Cart from './Cart';
import counterReducer from './Counter';

const rootReducer = combineReducers({
  cartItems: Cart,
  counter: counterReducer
});

export default rootReducer;
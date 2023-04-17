import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/Reducers";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
      "cartItems"
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk]

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware),) )

export const persistor = persistStore(store)

export default store;
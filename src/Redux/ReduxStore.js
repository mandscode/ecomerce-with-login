import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/cartSlice";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
      "cart",
      "person"
    ],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const middleware = [thunk]


export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
})

export const persistor = persistStore(store)
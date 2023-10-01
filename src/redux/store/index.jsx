import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import taskReducer from "../reducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
    reducer: {
        tasks: persistedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
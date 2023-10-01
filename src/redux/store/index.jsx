import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import taskReducer from "../reducer";

// Configuration for persisting Redux state using AsyncStorage
const persistConfig = {
    key: "root",                // Key to identify the persisted state
    storage: AsyncStorage      // AsyncStorage for storing the state
}

// Create a persisted reducer with the specified configuration
const persistedReducer = persistReducer(persistConfig, taskReducer);

// Configure the Redux store
const store = configureStore({
    reducer: {
        tasks: persistedReducer      // The root reducer with persistence
    },
    devTools: process.env.NODE_ENV !== 'production',   // Enable Redux DevTools in non-production environments
    middleware: [thunk],                               // Apply Redux Thunk middleware for async actions
});

// Create a persistor for persisting the Redux store
export const persistor = persistStore(store);

export default store;
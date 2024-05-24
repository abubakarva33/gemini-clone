import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import chatHistorySliceReducer from "./ChatHistorySlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["chatHistory"],
};

const rootReducer = combineReducers({
  chatHistory: chatHistorySliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

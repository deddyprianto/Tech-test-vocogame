import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataSlice from "./feature/dataSlice";
import dataSlicePersisted from "./feature/dataSlicePersisted";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dataSlicePersisted"], // Tentukan slice yang perlu disimpan
};

const rootReducer = combineReducers({
  dataSlice,
  dataSlicePersisted,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

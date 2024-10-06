import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/features/users/userSlices";
import { pokemonApi } from "@/services/pokemon/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import apiReducers from "./reducers";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const combinedReducer = combineReducers(rootReducer);

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

// Optional, but highly recommended for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { countersReducer } from "./reducers/counters-reducer";

const rootReducer = {
  [countersReducer.name]: countersReducer.reducer,
};

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = createReduxStore();

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

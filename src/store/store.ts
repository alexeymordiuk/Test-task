import { configureStore, combineReducers } from "@reduxjs/toolkit";
import data from './fetch/dataSlice'

const rootReducer = combineReducers({
    data
});

const store = configureStore({
    reducer: rootReducer
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;


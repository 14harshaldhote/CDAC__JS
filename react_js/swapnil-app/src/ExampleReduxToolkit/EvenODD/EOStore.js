import { configureStore } from "@reduxjs/toolkit";
import EOReducer from "./EOSlice"; 

export const EOStore = configureStore({
    reducer: {
        eo: EOReducer,
    },
});

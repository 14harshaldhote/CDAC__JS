import { configureStore } from "@reduxjs/toolkit";
import FactorialReducer from "./FactorialSlice";

export const factorialStore=configureStore({
    reducer:{
        facto:FactorialReducer
    }

})
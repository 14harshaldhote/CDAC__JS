
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlicer'

export const counterStore=configureStore({
    reducer:{
        counter: counterReducer
    }
})
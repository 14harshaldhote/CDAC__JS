import { createSlice } from '@reduxjs/toolkit';

export const factorialSlice = createSlice({
    name: 'factorial',
    initialState: {
        fact: 1,
        error: null,
    },
    reducers: {
        calcFact: function (state, action) {
            const num = action.payload.num;

           
            state.error = null;

            if (num < 0) {
                state.error = `${num} : Number cannot be negative`;
            } else {
                for (let i = 1; i <= num; i++) {
                    state.fact *= i;
                }
            }
        },
        resetError: function (state) {
        
            state.error = null;
        },
    },
});

export default factorialSlice.reducer;
export const { calcFact, resetError } = factorialSlice.actions;

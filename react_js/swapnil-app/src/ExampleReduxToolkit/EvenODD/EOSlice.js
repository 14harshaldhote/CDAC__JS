import { createSlice } from '@reduxjs/toolkit';

export const eoSlice = createSlice({
    name: 'eo',
    initialState: {
        result: null,
        error: null,
    },
    reducers: {
        checkEvenOdd: function (state, action) {
            const num = action.payload.num;

            state.error = null;

            if (isNaN(num) || num === "") {
                state.error = "Invalid input. Please enter a valid number.";
            } 
            else if (num < 0) {
                state.error = "Negative numbers cannot be even or odd.";
            }
            else {
                state.result = num % 2 === 0 ? "Even" : "Odd";
            }
        },
        resetError: function (state) {
            state.error = null;
        },
    },
});

export default eoSlice.reducer;
export const { checkEvenOdd, resetError } = eoSlice.actions;

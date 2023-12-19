import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calcFact, resetError } from "./FactorialSlice";
import FactorialError from './FactorialError'; 

function FactorialaApp() {
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const [isCalculating, setCalculating] = useState(false);

    const error = useSelector((state) => state.facto.error);
    const fact = useSelector((state) => state.facto.fact);

    const calculateFactorial = () => {
        setCalculating(true);
        dispatch(calcFact({ num }));
    };

    useEffect(() => {
        if (!isCalculating && !error) {
            setNum(0); 
            dispatch(resetError()); 
        }
    }, [isCalculating, error, dispatch]);

    return (
        <>
            <input
                value={num}
                onChange={(event) => setNum(event.target.value)}
                placeholder='Enter a number'
            />
            <button onClick={calculateFactorial} disabled={isCalculating}>
                {isCalculating ? 'Calculating...' : 'Calculate Factorial'}
            </button>
            {error ? <FactorialError error={error} /> : <h1>Factorial is : {fact}</h1>}
        </>
    );
}

export default FactorialaApp;

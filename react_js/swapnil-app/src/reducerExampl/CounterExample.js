import { event } from 'jquery';
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action.payload }
        // break
        case 'dec':
            return { count: state.count - action.payload }

        // break
    }
}

function CounterExample() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [num,setNum]=useState(0)

    return (
        <>
        <input type='number' value={num} onChange={event=>setNum(parseInt(event.target.value))} ></input>
            <button onClick={() => dispatch({ type: "inc", payload:num })}>+
            </button>
            <h2>
                {state.count}
            </h2>
            <button onClick={() => dispatch({ type: "dec", payload:num })}>
                -
            </button>
        </>
    )
}

export default CounterExample
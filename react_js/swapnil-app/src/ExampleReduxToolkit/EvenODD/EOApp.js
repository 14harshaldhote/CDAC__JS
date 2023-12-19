import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkEvenOdd } from './EOSlice';  
import EOError from './EOError'; 

function EOApp() {
    const dispatch = useDispatch();
    const [num, setNum] = useState('');
    const result = useSelector((state) => state.eo.result);
    const error = useSelector((state) => state.eo.error);
  
    const handleCheck = () => {
      dispatch(checkEvenOdd({ num }));
    };
  
    return (
      <div>
        <input
          value={num}
          onChange={(event) => setNum(event.target.value)}
          placeholder='Enter a number'
        />
        <button onClick={handleCheck}>Check</button>
        {error ? <EOError error={error} /> : null}
        {result ? <div>Result: {result}</div> : null}
      </div>
    );
}

export default EOApp;

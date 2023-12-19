import React, { useState } from 'react';
import Add from './Add';

function CountExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Add setCount={setCount} />
      <p>Count: {count}</p>
    </div>
  );
}

export default CountExample;
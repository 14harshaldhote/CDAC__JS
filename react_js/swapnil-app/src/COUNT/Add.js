import React from 'react';

function Add(props) {
  const { setCount } = props;

  return (
    <div>
      <button onClick={() => setCount((Count) => Count + 1)}>Increment</button>
    </div>
  );
}

export default Add;
// Display.js
import React from 'react';

function Display({ bioData }) {
  return (
    <div>
      <h3>Bio Data:</h3>
      <p>{bioData}</p>
    </div>
  );
}

export default Display;
import React, { useRef, useState } from 'react';

function FieldTable() {
  const [num, setNum] = useState(0);
  const [table, setTable] = useState("");
  const [bcolor, setColor] = useState("");
  const [colors, setColors] = useState("");

  const change = () => {
    setColors(bcolor);
  };

  const showTable = () => {
    let tableContent = "";
    for (let i = 1; i <= 10; i++) {
      tableContent += `\n ${num}  *  ${i} =   ${num * i}`;
    }
    setTable(tableContent);
  };

  const divRef = useRef();

  const handleClick = () => {
    document.body.style.backgroundColor = colors; 
  };

  return (
    <div>
        
      <h2 style={{ textAlign: 'center' }}>Welcome to CDAC</h2>
      <input type='text' onChange={(e) => setColor(e.target.value)} value={bcolor} />

      <div style={{ textAlign: 'center' }}>
        <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={showTable}>Generate Table</button>

        <pre>
          <ul>{table}</ul>
        </pre>

        
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleClick}>Change color of the whole page</button>
      </div>

      <div className="w-auto p-5" ref={divRef} style={{ backgroundColor: bcolor }}>
      </div>
    </div>
  );
}

export default FieldTable;

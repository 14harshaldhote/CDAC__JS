import React, { useRef, useState } from 'react';

function FeildTable() {
  const [num, setNum] = useState(0);
  const [table, setTable] = useState("");
  const [bcolor,setColor] = useState("");
  const [colors,setColors] = useState();

const change=()=>{
    setColors(bcolor);
}

  const showTable = () => {
    let tableContent = "";
    for (let i = 1; i <= 10; i++) {
      tableContent += `\n ${num}  *  ${i} =   ${num * i}`;
    }
    setTable(tableContent);
  };

  const ref = useRef();
    
    const handleClick = () => {
        ref.current.style.backgroundColor = "black";
        ref.current.style.padding = "3rem";
      
    };
  

  return (
    <div>
      <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />

      <button onClick={showTable}>BUTTON TO ADD</button>

     
       <pre >
        <ul>
        {table}
        </ul>
        </pre>

        <input type='text'  onChange={function(e){setColor(e.target.value)} } value={colors}/>

        <button id ='btn' onClick={change}>onClick</button>
        <div className="w-auto p-5 " style={{backgroundColor:bcolor}}>
            
        </div>



        <div>
            <h2>Welcome to CDAC</h2>
            <button onClick={handleClick}>Enable dark mode</button>
 
            <br />
            <br />
 
           
            <div className="w-auto p-5 " ref={ref}>
                
            </div>
        </div>
    </div>
  );
}

export default FeildTable;

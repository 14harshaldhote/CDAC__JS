import React,{useEffect, useState} from 'react'

function EUseEffect() {
  const [name,setName]=useState("");
  const[age,setAge]=useState("")
  useEffect(function(){
    console.log('im in effect')
  })
  function greetings(){
   setName('greetings for swapnil')
  }
  useEffect(function(){
    console.log('use effect called.......')
  },[])
    
  
  return (
    <div>
      <h1>Use Effect Example.......</h1>
      <input value={name} placeholder="anme" onChange={(event=>setName(event.target.value))}/>
      <button onClick={greetings}>Button</button>

      <input value={age} placeholder='age' onChange={(event=>setAge(event))}/>
      {/* <button onClick={greetings}>Button</button> */}

    </div>
  )
}

export default EUseEffect
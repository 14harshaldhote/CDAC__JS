//its a hook and only use when the calculation is so heavy
//also known as expensive value
//it gives a call back value and retun a function


//useState returns a array in teh array it will return value and its setter function

import { useMemo, useState } from "react";

import React from 'react'

function EuseMemo() {

  const[Count,setCount]=useState(0);

   const val=useMemo(function()
    {
     console.log("useMemo called...")
      return Count
    },[Count])

    function prinCount()
    {
       console.log("value="+Count)
    }
    function incCount()
    {
        console.log("value inc")
        setCount(Count+1)
    }

    return(
        <>
        <h1>{val}</h1>
        <button onClick={prinCount}>Print Count</button>
        <button onClick={incCount}>Inc Count</button>
        </>
    )
}

export default EuseMemo

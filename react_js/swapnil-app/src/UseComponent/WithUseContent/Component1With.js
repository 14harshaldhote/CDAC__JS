import React from 'react'
import Component2With from './Component2With'
import { useState, createContext } from 'react'
export const NameContext=createContext();



function Component1With() {
    // useState({name:"harshal",age:23,mobile:6324663873783});

    const person=[
        {name:"harshal",age:23,mobile:6324663873783},
        {name:"swapnil",age:22,mobile:962363873783},
        {name:"milind",age:28,mobile:9598963783},
        {name:"shashank",age:26,mobile:9232473783},
        {name:"prabhat",age:12,mobile:73152873783},
        {name:"Vibhav",age:20,mobile:882462121783}


    ]

  return (
    <NameContext.Provider value={person}>
    <h1>    Component1With</h1>
        <Component2With />
        </NameContext.Provider>
  )
}

export default Component1With
import React from 'react'
import Component3 from './Component3'

function Component2({name}) {
  return (
    <>
        <h1>Component2</h1>
        <Component3 name={name}/>
    </>
  )
}

export default Component2
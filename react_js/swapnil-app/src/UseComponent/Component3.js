import React from 'react'
import Component4 from './Component4'

function Component3({name}) {
  return (
    <><h1>Component3</h1>
        <Component4 name={name}/>
    </>

  )
}

export default Component3
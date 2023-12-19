import React from 'react'

function FactorialError(error ) {
  return (
    <div>
        <h1 style={{color:'red'}}>{error}</h1>
    </div>
  )
}

export default FactorialError;
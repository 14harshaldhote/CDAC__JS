import React from 'react'
import { increment,decrement } from './CounterSlicer'
import { useSelector,useDispatch } from 'react-redux'

function CounterApp() {

    const dispatch=useDispatch()
    const count= useSelector((state)=>state.counter.count)


return (<>
  
  
  <button onClick={()=>dispatch(increment())}>+</button>
  <h2>{count}</h2>
  <button onClick={()=>dispatch(decrement())}>-</button>
  </>
  )
}

export default CounterApp
import React, { useContext } from 'react'
import {NameContext} from './Component1With'


function Component4With() {


const person=useContext(NameContext);

  return (
    <>
    <div className='alert-info'>
        <h1> Component4 </h1>
        <h1> <ul>
        {person.map(function (p) {
                            return (
                                <li>{p.name}-{p.age}-{p.mobile}</li>
                            )
                        })}
                    </ul>
</h1>
        </div>
    </>
  )
}

export default Component4With
import { useRef } from "react"

export const EUseRef=()=>{

const nameRef = useRef()
    const enableField=()=>{
        if(nameRef.current.disabled){
        nameRef.current.disabled=false
        }
        else{
            nameRef.current.disabled=true
        }
    }
    return(
        <>
            <input type="number" ref={nameRef} disabled/>
            <input type="checkbox" onChange={enableField} />
            {/* <button onClick={enableField}>Enable Field...</button> */}
        </>
    );
}
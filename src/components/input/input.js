import React from "react";
export default function Input({type, handleInputChange}){
return(
    <>
        <div>Input</div>
        <input type="text" id={type} onChange={handleInputChange}></input>
    </>
    
    
)
}
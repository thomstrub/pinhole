import React from "react";
export default function Result({name, result}){
return(
    <>
        <h3>{name.readibleName}</h3>
        <input id={name.variableName} value={result}></input>
    </>
    
)
}
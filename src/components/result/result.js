import React from "react";
export default function Result({name, result}){
return(
    <>
        <h2>{name.readibleName}</h2>
        <input id={name.variableName} value={result}></input>
    </>
    
)
}
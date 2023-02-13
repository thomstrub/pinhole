import React from "react";
export default function Result({name, result}){
    const resultInUnit = result[result.unit]
    console.log(resultInUnit, "result In Unit")
    console.log(result, "<---result")
return(
    <>
        <h3>{name.readibleName}</h3>
        <input id={name.variableName} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
    </>
    
)
}
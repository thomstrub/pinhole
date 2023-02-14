import React from "react";
export default function Result({name, result}){
    const resultInUnit = result[result.unit]
    const resultStyles = {
        color: "gray",
        fontFamily: "Karla",
        fontSize: "32px",
        border: "1px solid gray",
        borderRadius: "6px",
        height: "4rem",
        width: "12rem",
        boxSizing: "border-box",
        paddingLeft: "12px",
        paddingTop: "14px",
        paddingBottom:"14px",
        display: "flex",
        alignItems: "flex-start"
    }
    return(
        <>
            <label htmlFor={name.variable}>{name.readibleName}</label>
            <input style={resultStyles} id={name.variableName} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
        </>
        
    )
}
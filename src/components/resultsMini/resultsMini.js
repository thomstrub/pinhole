import React from "react";
export default function ResultsMini({name, result}){
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
            <h2>{name.readibleName}</h2>
            <input style={resultStyles} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
        </>
    )
}
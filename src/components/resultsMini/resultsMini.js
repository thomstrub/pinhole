import React from "react";
import ToggleContainer from "../toggles/toggleContainer";

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

    const rowStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    }
    return(
        <><div style={rowStyle}>
                <div>
                    <label htmlFor={name.variable}>{name.readibleName}</label>
                    <input style={resultStyles} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
                </div>
                <ToggleContainer/>
        </div>
            
        </>
    )
}
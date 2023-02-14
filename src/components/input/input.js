import React from "react";
export default function Input({name, handleInputChange, value}){

const inputStyles = {
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
    < >
        <label for={name.variable}>{name.readibleName}</label>
        <input style={inputStyles} type="number" id={name.variable} onChange={handleInputChange}>{value}</input>
    </>
)
}
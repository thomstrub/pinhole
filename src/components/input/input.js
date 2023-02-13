import React from "react";
export default function Input({name, handleInputChange, value}){
return(
    <>
        <label for={name.variable}>{name.readibleName}</label>
        <input type="number" id={name.variable} onChange={handleInputChange}>{value}</input>
    </>
)
}
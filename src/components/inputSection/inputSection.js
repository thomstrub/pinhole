import React from "react";
import Input from "../input/input";
import constants from "../../constants/constants";

export default function InputSection({handleInputChange}){
return(
    <>
        <h2>Inputs</h2>
        <Input name={constants.inputs.focalLength} handleInputChange={handleInputChange}/>
        <Input name={constants.inputs.diameter} handleInputChange={handleInputChange}/>
        <Input name={constants.inputs.filmDimension} handleInputChange={handleInputChange}/>
    </>
    
)
}
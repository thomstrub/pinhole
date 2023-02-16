import React from "react";
import Input from "../input/input";
import constants from "../../constants/constants";

export default function InputSection({handleInputChange, inputs}){
   
return(
    <>
        <Input name={constants.inputs.focalLength} handleInputChange={handleInputChange} value={inputs.focalLength}/>
        <Input name={constants.inputs.diameter} handleInputChange={handleInputChange} value={inputs.diameter}/>
        <Input name={constants.inputs.filmDimension} handleInputChange={handleInputChange} value={inputs.filmDimension}/>
    </>
    
)
}
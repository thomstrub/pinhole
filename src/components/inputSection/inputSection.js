import React from "react";
import Input from "../input/input";
import constants from "../../constants/constants";

export default function InputSection({handleInputChange}){
return(
    <>
        <Input type={constants.focalLength} handleInputChange={handleInputChange}/>
        <Input type={constants.diameter} handleInputChange={handleInputChange}/>
        <Input type={constants.filmDimension} handleInputChange={handleInputChange}/>
    </>
    
)
}
import React from "react";
import InchToggle from "./inchToggle";
import MillimeterToggle from "./millimeterToggle";
import constants from "../../constants/constants";
export default function ToggleContainer({unit, handleUnitToggle, type, label}){
    
    const toggleContainerStyles = {
     border: "1px solid #cccccc",
     display: "flex",
     flexDirection: "row",
     justifyContent: "flex-end"
    }
    const notSelectedColorStyles = {
        background: "#F2F3F5",
        color: "#BCBCBC"
    }
    const selectedColorStyles = {
        background: "#248CFF",
        color: "white"
    }

    function assignColorStyles(unit, type){
        if(unit === type){
            return selectedColorStyles
        } else {
            return notSelectedColorStyles
        }
    }
    return(
        <>
            <div onClick={() => handleUnitToggle(type, label)} style={toggleContainerStyles}>
                <InchToggle colorStyles={assignColorStyles(unit, constants.units.inches.variable)}/>
                <MillimeterToggle colorStyles={assignColorStyles(unit, constants.units.millimeters.variable)}/>       
            </div>
        </>
        
    )
}
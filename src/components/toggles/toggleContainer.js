import React from "react";
import InchToggle from "./inchToggle";
import MillimeterToggle from "./millimeterToggle";
export default function ToggleContainer({name, result}){
    
    const toggleContainerStyles = {
     display: "flex",
     flexDirection: "row"
    }
    return(
        <>
            <div style={toggleContainerStyles}>
                <InchToggle />
                <MillimeterToggle />
                
            </div>
        </>
        
    )
}
import React from "react";
export default function MillimeterToggle({name, result}){
    
    const millimeterToggleStyles = {
        background: "#F2F3F5",
        borderRadius: "0px 4px 4px 0px",
        height: "60px",
        width: "60px",
        padding: "20px",
        color: "#BCBCBC",
        fontSize: "16px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    }
    return(
        <>
            <div style={millimeterToggleStyles}>
                <p style={{marginTop: "14px"}}>mm</p>
            </div>
        </>
        
    )
}
import React from "react";
export default function InchToggle({name, result}){
    
    const inchToggleStyles = {
        background: "#248CFF",
        borderRadius: "4px 0px 0px 4px",
        height: "60px",
        width: "60px",
        padding: "20px",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    }
    return(
        <>
            <div style={inchToggleStyles}>
                <p style={{marginTop: "14px"}}>in</p>
            </div>
        </>
        
    )
}
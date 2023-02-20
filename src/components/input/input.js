import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";
import { inputsStyles, labelStyles } from "../../styles/inputAndResultsStyles";

export default function Input({name, handleInputChange, value, handleUnitToggle}){

return(
    
    <Row style={{marginTop:"12px"}}>
    <Col>
        <Row style={{marginBottom: "4px"}}>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
        <div style={{display: "flex", justifyContent: "space-between", width:"100%", margin: "0 auto"}}> 
            
            <input style={inputsStyles} type="number" pattern="/d*" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}></input>
        
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type={"inputs"} label={name.variable}/>
        </div>
        </Row>
    </Col>
    </Row>       
)
}
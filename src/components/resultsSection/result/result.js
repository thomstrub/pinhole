import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../../toggles/toggleContainer";
import { resultsStyles, labelStyles, rowStyles } from "../../../styles/inputAndResultsStyles";

export default function Result({name, result, handleUnitToggle}){
    const resultInUnit = result[result.unit]
    
    return(
        <>
        <Row style={rowStyles}>
            <Col>
        <Row>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
            <div style={{display: "flex", justifyContent: "space-between", width:"100%", margin: "0 auto"}}>
                <input style={resultsStyles} id={name.variable} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
                <ToggleContainer unit={result.unit} handleUnitToggle={handleUnitToggle} type={"results"} label={name.variable}/>
            </div> 
        </Row>
            </Col>
        </Row>
        </>
        
    )
}
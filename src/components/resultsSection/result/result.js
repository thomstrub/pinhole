import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../../toggles/toggleContainer";
import { resultsStyles, labelStyles } from "../../../styles/inputAndResultsStyles";

export default function Result({name, result, handleUnitToggle}){
    const resultInUnit = result[result.unit]
    
    return(
        <>
        <Row style={{marginTop:"12px"}}>
            <Col>
        <Row>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row>
            <Col xs={5}>
            <input style={resultsStyles} id={name.variable} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
            </Col>
            <Col></Col>
            <Col xs={5}>
            <ToggleContainer unit={result.unit} handleUnitToggle={handleUnitToggle} type={"results"} label={name.variable}/>
            </Col>
        </Row>
            </Col>
        </Row>
        </>
        
    )
}
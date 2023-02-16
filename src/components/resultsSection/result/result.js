import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../../toggles/toggleContainer";
export default function Result({name, result}){
    const resultInUnit = result[result.unit]
    const resultStyles = {
        color: "gray",
        fontFamily: "Karla",
        fontSize: "32px",
        border: "1px solid #cccccc",
        borderRadius: "6px",
        height: "60px",
        width: "195px",
        boxSizing: "border-box",
        marginBottom:"24px",
        display: "flex",
        alignItems: "flex-start"

    }
    return(
        <>
        <Row style={{marginTop:"12px", marginBottom: "12px"}}>
            <Col>
        <Row>
            <label htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row>
            <Col xs={5}>
            <input style={resultStyles} id={name.variableName} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
            </Col>
            <Col></Col>
            <Col xs={5}>
            <ToggleContainer unit={result.unit}/>
            </Col>
        </Row>
            </Col>
        </Row>
        </>
        
    )
}
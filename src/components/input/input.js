import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";

export default function Input({name, handleInputChange, value}){

const inputStyles = {
    color: "gray",
    fontFamily: "Karla",
    fontSize: "32px",
    border: "1px solid gray",
    borderRadius: "6px",
    height: "60px",
    width: "12rem",
    boxSizing: "border-box",
    paddingLeft: "12px",
    paddingTop: "14px",
    paddingBottom:"14px",
    display: "flex",
    alignItems: "flex-start"
}

return(
    
    <Row style={{marginTop:"12px", marginBottom: "12px"}}>
    <Col>
        <Row style={{marginBottom: "4px"}}>
            <label style={{lineHeight: "20px"}} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
            <Col xs={5}>
            <input style={inputStyles} type="number" id={name.variable} onChange={handleInputChange}>{value}</input>
            </Col>
            <Col></Col>
            <Col xs={5}>
            <ToggleContainer />
            </Col>
        </Row>
    </Col>
    </Row>       
)
}
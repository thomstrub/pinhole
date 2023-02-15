import React from "react";
import { Row, Col } from "react-bootstrap";

import ToggleContainer from "../../toggles/toggleContainer";

export default function ResultsMini({name, result}){
    const resultStyles = {
        color: "gray",
        fontFamily: "Karla",
        fontSize: "32px",
        border: "1px solid gray",
        borderRadius: "6px",
        height: "60px",
        width: "160px",
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
                <Row>
                    <label htmlFor={name.variable}>{name.readibleName}</label>
                </Row>
                <Row>
                    <Col>
                        <input style={resultStyles} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
                    </Col>
                </Row>
            </Col>
        </Row>
            
       
      
    )
}
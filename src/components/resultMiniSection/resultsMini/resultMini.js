import React from "react";
import { Row, Col } from "react-bootstrap";
import { resultsMiniStyles, labelStyles } from "../../../styles/inputAndResultsStyles";

export default function ResultsMini({name, result}){

    return(
        
        <Row style={{marginTop:"12px"}}>
            <Col>
                <Row>
                    <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
                </Row>
                <Row>
                    <Col>
                        <input style={resultsMiniStyles} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
                    </Col>
                </Row>
            </Col>
        </Row>
            
       
      
    )
}
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import constants from "../../constants/constants";
import ResultsMini from "./resultsMini/resultMini";

export default function ResultsMiniSection({fStop, angleOfView}){
    const resultStyles = {

    }

    return(
       
        <Row style={{marginTop:"12px"}}>
                <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div>
                        <ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''}/>
                    </div>
                    <div >
                        <ResultsMini name={constants.results.angleOfView} result={angleOfView ? angleOfView : ''}/>
                    </div>
                </div>
            
        </Row>
        
    )
}
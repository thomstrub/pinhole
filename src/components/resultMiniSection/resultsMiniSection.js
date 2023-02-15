import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import constants from "../../constants/constants";
import ResultsMini from "./resultsMini/resultMini";

export default function ResultsMiniSection({fStop, angleOfView}){
    const resultStyles = {

    }
    console.log(fStop, "fstop from results mini section <----")

    return(
       
        <Row style={{marginTop:"12px", marginBottom: "12px"}}>
                <div style={{display:"flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <div>
                        <ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''}/>
                    </div>
                    <div style={{marginLeft: "18px"}}>
                        <ResultsMini name={constants.results.angleOfView} result={angleOfView ? angleOfView : ''}/>
                    </div>
                </div>
            
        </Row>
        
    )
}
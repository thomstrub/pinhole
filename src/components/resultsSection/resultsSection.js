import React from "react";
import Result from "../result/result";
import ResultsMini from "../resultsMini/resultsMini";
import constants from "../../constants/constants";


export default function ResultsSection({unit, results}){


    function defineResults(unit, results, type){
        let otherUnit = constants.units.inches.variable
        if(unit === constants.units.inches.variable){
            otherUnit = constants.units.millimeters.variable
        }
        if (results[type]){
            return unit[unit] ? results[type][unit] : results[type][otherUnit]
        } else {
            return ''
        }
    }
return(
    <>
        <h2>Results</h2>
        <ResultsMini name={constants.results.fstop} result={defineResults(unit, results, constants.results.fstop.variable)}/>
        <ResultsMini name={constants.results.angleOfView} result={defineResults(unit, results, constants.results.angleOfView.variable)}/>
        <Result name={constants.results.imageDiameter} result={defineResults(unit, results, constants.results.imageDiameter.variable)}/>
        <Result name={constants.results.optimalPinholeDiameter} result={defineResults(unit, results, constants.results.optimalPinholeDiameter.variable)}/>
        <Result name={constants.results.optimalFocalLength} result={defineResults(unit, results, constants.results.optimalFocalLength.variable)}/>
    </>
)
}
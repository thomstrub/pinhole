import React from "react";
import Result from "../result/result";
import ResultsMini from "../resultsMini/resultsMini";
import constants from "../../constants/constants";


export default function ResultsSection({results}){
    console.log(results[constants.results.fstop.variable], "<------ fstop")
    const fStop = results[constants.results.fstop.variable]
    const angleOfView = results[constants.results.angleOfView.variable]
    const imageDiameter = results[constants.results.imageDiameter.variable]
    const optimalPinholeDiameter = results[constants.results.optimalPinholeDiameter.variable]
    const optimalFocalLength = results[constants.results.optimalFocalLength.variable]
return(
    <>
        <h2>Results</h2>
        <ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''}/>
        <ResultsMini name={constants.results.angleOfView} result={angleOfView ? angleOfView : ''}/>
        <Result name={constants.results.imageDiameter} result={imageDiameter ? imageDiameter : ''}/>
        <Result name={constants.results.optimalPinholeDiameter} result={optimalPinholeDiameter ? optimalPinholeDiameter : ''}/>
        <Result name={constants.results.optimalFocalLength} result={optimalFocalLength ? optimalFocalLength : ''}/>
    </>
)
}
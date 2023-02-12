import React from "react";
import Result from "../result/result";
import ResultsMini from "../resultsMini/resultsMini";
import constants from "../../constants/constants";

export default function ResultsSection({results}){
return(
    <>
        <h2>Results</h2>
        <ResultsMini name={constants.results.fstop} result={results.fStop?results.fStop: ''}/>
        <ResultsMini name={constants.results.angleOfView} result={results.angleOfView?results.angleOfView: ''}/>
        <Result name={constants.results.imageDiameter} result={results.imageDiameter?results.imageDiameter: ''}/>
        <Result name={constants.results.optimalPinholeDiameter} result={results.optimalPinholeDiameter?results.optimalPinholeDiameter: ''}/>
        <Result name={constants.results.optimalFocalLength} result={results.optimalFocalLength?results.optimalFocalLength: ''}/>
    </>
)
}
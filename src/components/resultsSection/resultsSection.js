import React from "react";
import Result from "../result/result";
import ResultsMini from "../resultsMini/resultsMini";

export default function ResultsSection({text, target}){
return(
    <>
        <ResultsMini/>
        <ResultsMini/>
        <Result/>
        <Result/>
    </>
)
}
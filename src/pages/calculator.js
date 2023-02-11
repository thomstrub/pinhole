import React from "react"
import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import ResultsMini from "../components/resultsMini/resultsMini"

const mainStyles = {


}

export default function Calculator() {
    return (
    <main style={mainStyles}>
        <InputSection/>
        <hr/>
        <ResultsSection/>

    </main>
    )
}   
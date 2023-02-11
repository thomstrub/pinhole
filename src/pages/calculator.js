import React, { useState, useEffect } from 'react';
import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import ResultsMini from "../components/resultsMini/resultsMini"


const mainStyles = {


}

export default function Calculator() {

    const [state, setState] = useState({
        focalLength: '',
        diameter: '',
        filmDimension: ''
    });
    // useEffect(() => {
    //     setState({
    //         ...state
    //     })
        
    // }, [state])

    function handleInputChange(e){
        // e.target.id ---> e.target.value
        e.preventDefault();
        const id = e.target.id;
        const value = e.target.value;
        setState({
            ...state,
            [id]: value
        })
    }

    return (
    <main style={mainStyles}>
        <h1>{state.focalLength? state.focalLength : "no focal length"}</h1>
        <h1>{state.diameter? state.diameter : "no diameter"}</h1>
        <h1>{state.filmDimension? state.filmDimension : "no film dimension"}</h1>
        <InputSection handleInputChange={handleInputChange}/>
        <hr/>
        <ResultsSection/>

    </main>
    )
}   
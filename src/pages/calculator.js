import React, { useState, useEffect } from 'react';
import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import ResultsMini from "../components/resultsMini/resultsMini"


const mainStyles = {


}

export default function Calculator() {

    const [state, setState] = useState({
        inputs: {
            focalLength: '',
            diameter: '',
            filmDimension: ''
        },
        results: {
            fStop: '',
            angleOfView: '',
            imageDiameter: '',
            optimalPinholeDiameter: '',
            optimalFocalLength: ''
        }
        
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
            inputs: {
                ...state.inputs,
                [id]: value
            }
        })
        
    }

    function calculateResults(){
        // let results = {

        // }
        setState({
            ...state,
            results: {
                imageDiameter: (Number(state.inputs.focalLength) * 1.92)
            }
        })
    }
    useEffect(()=> {
        // calculateResults()
        setState({
            ...state,
            results: {
                imageDiameter: (Number(state.inputs.focalLength) * 1.92)
            }
        })
    },[state.inputs])

    return (
    <main style={mainStyles}>
        {/* <h1>{state.inputs.focalLength? state.inputs.focalLength : "no focal length"}</h1>
        <h1>{state.inputs.diameter? state.inputs.diameter : "no diameter"}</h1>
        <h1>{state.inputs.filmDimension? state.inputs.filmDimension : "no film dimension"}</h1> */}
        <InputSection handleInputChange={handleInputChange}/>
        <hr/>
        <ResultsSection results={state.results}/>

    </main>
    )
}   
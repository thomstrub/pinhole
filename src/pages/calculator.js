import React, { useState, useEffect } from 'react';
import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import constants from '../constants/constants';

const mainStyles = {


}

export default function Calculator() {

    const [state, setState] = useState({
        inputs: {
            focalLength: {
                inches: '',
                millimeters: ''
            },
            diameter: {
                inches: '',
                millimeters: ''
            },
            filmDimension: {
                inches: '',
                millimeters: ''
            },
        },
        results: {
            fStop: {
                inches: '',
                millimeters: ''
            },
            angleOfView: {
                inches: '',
                millimeters: ''
            },
            imageDiameter: {
                inches: '',
                millimeters: ''
            },
            optimalPinholeDiameter: {
                inches: '',
                millimeters: ''
            },
            optimalFocalLength: {
                inches: '',
                millimeters: ''
            }
        },
        unit: constants.units.millimeters.variable
        
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
        if(state.unit === constants.units.millimeters.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : value,
                        [constants.units.inches.variable] : value * constants.units.inches.multiplierFromMillimeters
                    }
                }
            })
        } else if (state.unit === constants.units.inches.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : value * constants.units.millimeters.multiplierFromInches,
                        [constants.units.inches.variable] : value 
                    }
                }
            })
        } else {
            throw new Error("Unit Error.")
        }
        
        
    }

    // function calculateResults(){
    //     // let results = {

    //     // }
    //     setState({
    //         ...state,
    //         results: {
    //             imageDiameter: (Number(state.inputs.focalLength) * 1.92)
    //         }
    //     })
    // }
    useEffect(()=> {
        // calculateResults()
        setState({
            ...state,
            results: calculateResults(state)
        })
    },[state.inputs])

    function calculateResults(state){
        if(!state.unit){
            throw new Error('Error: No Unit')
        }

        let otherUnit = constants.units.inches.variable;
        
        if(state.unit === constants.units.inches.variable){
            otherUnit = constants.units.millimeters.variable
        }

        return {
            [constants.results.imageDiameter.variable]: {
                [state.unit]: state.inputs.focalLength[state.unit] ? (Number(state.inputs.focalLength[state.unit]) * 1.92) : '',
                [otherUnit]: state.inputs.focalLength[otherUnit] ? (Number(state.inputs.focalLength[otherUnit]) * 1.92) : ''
            },
            [constants.results.fstop.variable]: {
                [state.unit]: state.inputs.focalLength[state.unit] && state.inputs.diameter[state.unit] ? (Number(state.inputs.focalLength[state.unit]) / Number(state.inputs.diameter[state.unit])) : '',
                [otherUnit]: state.inputs.focalLength[otherUnit] && state.inputs.diameter[otherUnit] ? (Number(state.inputs.focalLength[otherUnit]) / Number(state.inputs.diameter[otherUnit])) : ''
            },
            [constants.results.angleOfView.variable]:{
                [state.unit]: state.inputs.filmDimension[state.unit] && state.inputs.focalLength[state.unit] ? (2 * Math.atan(Number(state.inputs.filmDimension[state.unit])/(2 * Number(state.inputs.focalLength[state.unit])))) : '',
                [otherUnit]: state.inputs.filmDimension[otherUnit] && state.inputs.focalLength[otherUnit] ? (2 * Math.atan(Number(state.inputs.filmDimension[otherUnit])/(2 * Number(state.inputs.focalLength[otherUnit])))) : ''
            }
           
        }
    }

    return (
    <main style={mainStyles}>
        {/* <h1>{state.inputs.focalLength? state.inputs.focalLength : "no focal length"}</h1>
        <h1>{state.inputs.diameter? state.inputs.diameter : "no diameter"}</h1>
        <h1>{state.inputs.filmDimension? state.inputs.filmDimension : "no film dimension"}</h1> */}
        <InputSection handleInputChange={handleInputChange}/>
        <hr/>
        <ResultsSection unit={state.unit} results={state.results}/>

    </main>
    )
}   
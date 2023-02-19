import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import constants from '../constants/constants';
import calculateResults from '../helper/calculate';
import ToggleContainer from '../components/toggles/toggleContainer';
import ResultsMiniSection from '../components/resultMiniSection/resultsMiniSection';


export default function Calculator() {
const millimeters = constants.units.millimeters.variable;
const inches = constants.units.inches.variable;
    // state setup 

    const [state, setState] = useState({
        inputs: {
            focalLength: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            diameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            filmDimension: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
        },
        results: {
            fStop: '',
            angleOfView: '',
            imageDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            optimalPinholeDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            optimalFocalLength: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            }
        }
        
    });

    // handlers

    function handleInputChange(e){
        e.preventDefault();
        const id = e.target.id;
        const value = e.target.value;

        if(state.inputs[id].unit === constants.units.millimeters.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : value,
                        [constants.units.inches.variable] : (value * constants.units.inches.multiplierFromMillimeters).toFixed(2),
                        unit : state.inputs[id].unit
                    }
                }
            })
        } else if (state.inputs[id].unit === constants.units.inches.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : (value * constants.units.millimeters.multiplierFromInches).toFixed(2),
                        [constants.units.inches.variable] : value,
                        unit : state.inputs[id].unit 
                    }
                }
            })
        } else {
            throw new Error("Unit Error.")
        }
    }

    function handleUnitToggle(type, label){
        if(type && label){
            if(state[type][label]){
            const newUnit = state[type][label].unit === millimeters ? inches : millimeters;
                setState({
                    ...state,
                    [type]:{
                        ...state[type],
                        [label]: {
                            ...state[type][label],
                            unit:   newUnit
                        }
                    }
                })
            }
        }
           
    }

    useEffect(()=> {
        setState({
            ...state,
            results: calculateResults(state)
        })
    },[state.inputs.diameter.inches, state.inputs.diameter.millimeters, state.inputs.filmDimension.inches, state.inputs.filmDimension.millimeters, state.inputs.focalLength.inches, state.inputs.focalLength.millimeters])
    
    return (
    <main>
        <Container fluid>
            <div style={{marginTop: "40px", display: "flex", alignSelf: "center", justifyContent: "center"}}>
                <h1 style={{fontWeight: "800px", fontStyle: "bold", fontSize: "36px", lineHeight: "42px"}}>Pinhole Calculator</h1>
            </div>
            <InputSection handleInputChange={handleInputChange} inputs={state.inputs} handleUnitToggle={handleUnitToggle}/>
            <div style={{width: "335px", height: "4px", background: "#D9D9D9"}}></div>
            <h3 style={{marginTop: "24px", fontWeight: "700", fontSize: "20px", lineHeight: "23px"}}>Results</h3>
            <ResultsMiniSection fStop={state.results.fStop} angleOfView={state.results.angleOfView}/>
            <ResultsSection results={state.results} handleUnitToggle={handleUnitToggle}/>
        </Container>
    </main>
    )
}   
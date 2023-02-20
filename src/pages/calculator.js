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
                unit: constants.units.inches.variable
            },
            diameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            filmDimension: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            },
        },
        results: {
            fStop: '',
            angleOfView: '',
            imageDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            },
            optimalPinholeDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            optimalFocalLength: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            }
        }
        
    });

    // handlers

    function handleInputChange(e){
        e.preventDefault();
        const id = e.target.id;
        const value = e.target.value < 0 ? '' : e.target.value;

        if(state.inputs[id].unit === constants.units.millimeters.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : value,
                        [constants.units.inches.variable] : value * constants.units.inches.multiplierFromMillimeters % 1 > 0 ? (value * constants.units.inches.multiplierFromMillimeters).toFixed(2): value * constants.units.inches.multiplierFromMillimeters,
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
                        [constants.units.millimeters.variable] : value * constants.units.millimeters.multiplierFromInches % 1 > 0 ? (value * constants.units.millimeters.multiplierFromInches).toFixed(2) : value * constants.units.millimeters.multiplierFromInches,
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
    <main >
            <div style={{display: "flex", width:"100%", maxWidth: "95%", margin: "0 auto",justifyContent: "center"}}>
                <Container>
                    <div style={{marginTop: "40px", display: "flex", alignSelf: "center", justifyContent: "center"}}>
                        <h1 style={{fontWeight: "800", fontSize: "36px", lineHeight: "42px"}}>Pinhole Calculator</h1>
                    </div>
                    <InputSection handleInputChange={handleInputChange} inputs={state.inputs} handleUnitToggle={handleUnitToggle}/>
                    <div style={{width: "100%", height: "4px", background: "#D9D9D9"}}></div>
                    <h3 style={{marginTop: "24px", fontSize: "20px", fontWeight: "700", lineHeight: "23px"}}>Results</h3>
                    <ResultsMiniSection fStop={state.results.fStop} angleOfView={state.results.angleOfView}/>
                    <ResultsSection results={state.results} handleUnitToggle={handleUnitToggle}/>
                </Container>
            </div>
    </main>
    )
}   
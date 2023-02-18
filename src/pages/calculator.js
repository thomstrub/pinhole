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

        console.log(state.inputs[id].unit, " <---- unit")

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
        console.log(type, "<----type");
        console.log(label, "<----label");
        console.log(state[type][label], "handle Unit<------")
        if(type && label){
            if(state[type][label]){
            const newUnit = state[type][label].unit === millimeters ? inches : millimeters;
            console.log(newUnit, "<----------newUnit")
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
    console.log(state.results.fStop, "<-- fstop from calc page")
    return (
    <main>
        <Container fluid>
            <InputSection handleInputChange={handleInputChange} inputs={state.inputs} handleUnitToggle={handleUnitToggle}/>
            <hr/>
            <h3>Results</h3>
            <ResultsMiniSection fStop={state.results.fStop} angleOfView={state.results.angleOfView}/>
            <ResultsSection results={state.results} handleUnitToggle={handleUnitToggle}/>
        </Container>
    </main>
    )
}   
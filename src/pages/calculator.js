import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import InputSection from "../components/inputSection/inputSection"
import ResultsSection from "../components/resultsSection/resultsSection"
import constants from '../constants/constants';
import calculateResults from '../helper/calculate';
import ToggleContainer from '../components/toggles/toggleContainer';
import ResultsMiniSection from '../components/resultMiniSection/resultsMiniSection';


export default function Calculator() {

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

    // handler

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
                        [constants.units.inches.variable] : value * constants.units.inches.multiplierFromMillimeters,
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
                        [constants.units.millimeters.variable] : value * constants.units.millimeters.multiplierFromInches,
                        [constants.units.inches.variable] : value,
                        unit : state.inputs[id].unit 
                    }
                }
            })
        } else {
            throw new Error("Unit Error.")
        }
        
        
    }

    useEffect(()=> {
        setState({
            ...state,
            results: calculateResults(state)
        })
    },[state.inputs])
    console.log(state.results.fStop, "<-- fstop from calc page")
    return (
    <main>
        <Container fluid>
            <InputSection handleInputChange={handleInputChange}/>
            <br/>
            <br/>
            <hr/>
            <h3>Results</h3>
            <ResultsMiniSection fStop={state.results.fStop} angleOfView={state.results.angleOfView}/>
            <ResultsSection results={state.results}/>
        </Container>
    </main>
    )
}   
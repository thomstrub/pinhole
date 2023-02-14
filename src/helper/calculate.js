import constants from "../constants/constants"

export default function calculateResults(state){

    const inputs = state.inputs;
    const millimeters = constants.units.millimeters.variable;
    const inches = constants.units.inches.variable;

    //calculate image diameter in mm
    function calculateImageDiameterFromMm(focalLength){
        return Number(focalLength[millimeters]) * 1.92
    }

    // calculate fstop
    function calculateFStopFromMm(diameter, focalLength){
        return(Number(focalLength[millimeters])/ Number(diameter[millimeters]))
    }

    // calculate angle of view
    function calculateAngleOfViewFromMm(filmDimension, focalLength){
        return (2 * Math.atan(Number(filmDimension[millimeters])/(2 * Number(focalLength[millimeters]))).toFixed(2))
    }
    //

    return {
        [constants.results.imageDiameter.variable]: {
            [millimeters]: inputs.focalLength.millimeters ? calculateImageDiameterFromMm(inputs.focalLength): '',
            [inches]: inputs.focalLength.millimeters ? calculateImageDiameterFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters : '',
            unit : state.results.imageDiameter.unit
        },
        [constants.results.fstop.variable]: inputs.diameter.millimeters && inputs.focalLength.millimeters ? calculateFStopFromMm(inputs.diameter, inputs.focalLength) : '',
        [constants.results.angleOfView.variable]: inputs.filmDimension[millimeters] && inputs.focalLength[millimeters] ? calculateAngleOfViewFromMm(inputs.filmDimension, inputs.focalLength) : ''
       
    }
}
import constants from "../constants/constants"

export default function calculateResults(state){

    const inputs = state.inputs;
    const millimeters = constants.units.millimeters.variable;
    const inches = constants.units.inches.variable;

    // calculate fstop
    function calculateFStopFromMm(diameter, focalLength){
        return "F-" + (Number(focalLength[millimeters])/ Number(diameter[millimeters]))
    }

    // calculate angle of view
    function calculateAngleOfViewFromMm(filmDimension, focalLength){
        return (2 * Math.atan(Number(filmDimension[millimeters])/(2 * Number(focalLength[millimeters]))).toFixed(2)) + "°"
    }

    //calculate image diameter in mm
    function calculateImageDiameterFromMm(focalLength){
        const imageDiameter = Number(focalLength[millimeters]) * 1.92
        return imageDiameter.toFixed(2)
    }

    //calculate optimal pinhole diameter in mm
    function calculateOptimalPinholeDiameterFromMm(focalLength){
        return Number(focalLength[millimeters]) * 1.92
    }

    //calculate optimal focal length in mm
    function calculateOptimalFocalLengthFromMm(focalLength){
        return Number(focalLength[millimeters]) * 1.92
    }

    return {
        [constants.results.fstop.variable]: inputs.diameter.millimeters && inputs.focalLength.millimeters ? calculateFStopFromMm(inputs.diameter, inputs.focalLength) : '',
        [constants.results.angleOfView.variable]: inputs.filmDimension[millimeters] && inputs.focalLength[millimeters] ? calculateAngleOfViewFromMm(inputs.filmDimension, inputs.focalLength) : '',
        [constants.results.imageDiameter.variable]: {
            [millimeters]: inputs.focalLength.millimeters ? calculateImageDiameterFromMm(inputs.focalLength): '',
            [inches]: inputs.focalLength.millimeters ? calculateImageDiameterFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters : '',
            unit : state.results.imageDiameter.unit
        },
        [constants.results.optimalPinholeDiameter.variable]: {
            [millimeters]: inputs.focalLength.millimeters ? calculateOptimalPinholeDiameterFromMm(inputs.focalLength): '',
            [inches]: inputs.focalLength.millimeters ? calculateOptimalPinholeDiameterFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters : '',
            unit : state.results.optimalPinholeDiameter.unit
        },
        [constants.results.optimalFocalLength.variable]: {
            [millimeters]: inputs.focalLength.millimeters ? calculateOptimalFocalLengthFromMm(inputs.focalLength): '',
            [inches]: inputs.focalLength.millimeters ? calculateOptimalFocalLengthFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters : '',
            unit : state.results.optimalFocalLength.unit
        }

       
    }
}
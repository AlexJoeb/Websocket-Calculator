export const SET_EQUATIONS = 'SET_EQUATIONS';

export const setEquations = equations => dispatch => {
    console.log("Setting..")
    dispatch({ type: SET_EQUATIONS, payload: equations });
}
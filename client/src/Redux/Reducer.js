import { SET_EQUATIONS } from './Actions';

let defaultState = {
    name: null,
    history: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_EQUATIONS:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}
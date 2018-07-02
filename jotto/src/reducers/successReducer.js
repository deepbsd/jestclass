import { actionTypes } from '../actions';

/**
 * @function success reducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @array {boolean} - new success state
 */
export default (state=false, action) => {
  //const winner = (action.type === actionTypes.CORRECT_GUESS) ? true : state ;

    switch(action.type) {
        case(actionTypes.CORRECT_GUESS):
            return true;
        default:
            return state;
    }
}

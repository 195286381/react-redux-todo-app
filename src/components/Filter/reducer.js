import {TOGGLE_FILTER } from './actionTypes'
const initialState = 'all'

export default (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FILTER: {
            return action.filter
        }
        default:
            return state
    }
}
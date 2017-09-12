import { TOGGLE_FILTER } from './actionTypes'

export const changeFilter = filter => {
    return {
        type: TOGGLE_FILTER,
        filter,
    }
}
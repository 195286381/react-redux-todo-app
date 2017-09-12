import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM} from './actionTypes'
const initialState = []
let uniqueKey = 0;
export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM: {
      return [
        ...state,
        { 
          id: uniqueKey++,
          complete: false,
          content: action.content,
        }
      ]
    }
    case REMOVE_ITEM: {
      return state.filter(item => item.id !== action.id)
    }
    case TOGGLE_ITEM: {
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            complete: !item.complete,
          }
        } else {
          return item
        }
      })
    }
    default:
      return state
  }
}
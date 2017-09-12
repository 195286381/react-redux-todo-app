import { createStore, combineReducers } from 'redux'
import { reducer as todoList } from './components/TodoList'
const reducers = combineReducers({
  todoList: todoList,
})

const store = createStore(reducers)

export default store
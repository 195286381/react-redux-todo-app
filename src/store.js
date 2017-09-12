import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as todoList } from './components/TodoList'
import { reducer as filter } from './components/Filter'
const reducers = combineReducers({
  todoList: todoList,
  filter: filter,
})

const middlewares = []

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f,
)

const store = createStore(reducers, {}, storeEnhancers);

export default store
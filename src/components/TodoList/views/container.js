import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.css'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { removeItem, toggleItem, addItem } from '../actions'

const Component = ({items, onToggleTodo, onRemoveTodo, onAddTodo}) => (
  <div>
    <ul className="todo-list">
      {
        items.map(item => {
          const { id, complete, content } = item
          return (
            <TodoItem
              key={id}
              completed={complete}
              content={content}
              onToggle={() => onToggleTodo(id)}
              onRemove={() => onRemoveTodo(id)}
            />
          )
        })
      }
    </ul>
    <AddTodo onHandleInput={onAddTodo}/>
  </div>
)

Component.propTypes = {
  items: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todoList
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleItem,
  onRemoveTodo: removeItem,
  onAddTodo: addItem,
}, dispatch)

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddTodo: (text) => {dispatch(addItem(text))},
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Component)
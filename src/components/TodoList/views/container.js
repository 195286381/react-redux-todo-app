import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import {removeItem, toggleItem} from '../actions'

const Component = ({items, onToggleTodo, onRemoveTodo}) => (
  <div>
    <ul className="todo-list">
      {
        items.map(item => {
          const { id, complete, content } = item
          return (
            <TodoItem
              key={id}
              complete={complete}
              content={content}
              onToggle={() => onToggleTodo(id)}
              onRemove={() => onRemoveTodo(id)}
            />
          )
        })
      }
    </ul>
    <AddTodo />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
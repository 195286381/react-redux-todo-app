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
    <AddTodo onAdd={onAddTodo}/>
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
  </div>
)

Component.propTypes = {
  items: PropTypes.array.isRequired,
}

const selectItems = (items, filter) => {
  if (filter === 'all') {
    return items
  } else if (filter === 'completed') {
    return items.filter(item => item.complete === true)
  } else {
    return items.filter(item => item.complete === false)
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoList, filter } = state
  return {
    items: selectItems(todoList, filter),
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleItem,
  onRemoveTodo: removeItem,
  onAddTodo: addItem,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class AddTodo extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  }

  constructor() {
    super(...arguments)
    this.state = {
      inputValue: '',
    }

    this.onHandleInputChange = this.onHandleInputChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  onHandleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  onHandleClick(e) {
    e.preventDefault()
    const { inputValue } = this.state
    this.props.onAdd(inputValue)
    // alert(inputValue)
  }

  render() {
    const { } = this.props

    return (
      <div>
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.onHandleInputChange} placeholder="请输入内容" />
          <button onClick={this.onHandleClick}>添加</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
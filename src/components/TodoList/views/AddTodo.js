import React, { Component } from 'react'

class AddTodo extends Component {
  static propTypes = {

  }

  constructor() {
    super(...arguments)
    this.state = {
      inputValue: '',
    }

    this.onHandleInputChange = this.onHandleInputChange.bind(this)
  }

  onHandleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    const { } = this.props

    return (
      <div>
        <form>
          <input type="text" value={this.state.inputValue} onChange={this.onHandleInputChange}/>
          <button>添加</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
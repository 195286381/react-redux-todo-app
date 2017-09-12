import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';

import { view as TodoList } from './components/TodoList/'
import { view as Filter } from './components/Filter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React todo demo</h2>
            </div>
          </div>
          <div className="todo-app">
            <h1 style={{display: 'none'}}>todo demo</h1>
            <Filter />
            <TodoList />
            
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

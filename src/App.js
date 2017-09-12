import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';

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
          <div class="todo-app">
            <h1 style={{display: 'none'}}>todo demo</h1>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

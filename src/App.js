import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a react app</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now!'));
  }
}

export default App;


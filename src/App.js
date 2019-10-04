import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
    
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked! Omg!');
    // this.state.people[0].name = "Maximillian"; //DON'T DO THIS! 
    this.setState( { 
      people: [
        { name: newName, age: 29 },
        { name: 'Manu', age: 10 },
        { name: 'Stephanie', age: 99 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler.bind(this, 'MaxXXX@!')}>Switch Name</button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}/>
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, '!!MaXimillian')}
          >My Hobbies: Racing</Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}/>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now!'));
  }
}

export default App;


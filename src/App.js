import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{name: 'Jasu', age: 24},
    {name: 'Jasu2', age: 27},
    {name: 'Jasusa', age: 35}
  ],
    otherState: 'valor random',
    showPersons: 'false'
  }

  nameChangeHandler = (event) =>{
    this.setState( {
      persons: [{name: 'Jasu', age: 24},
      {name: event.target.value, age: 27},
      {name: 'Jasusa', age: 35}
    ]
})
  }
  togglePersonsHandler =() =>{
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    //NO VA:  this.state.persons[0].name='Jesús Galera';
    this.setState( {
      persons: [{name: newName, age: 24},
    {name: 'Jasu2', age: 27},
    {name: 'Jasusa', age: 35}
  ]
})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'Sandalio')}
        >Datos adicionales</Person>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Eufrasio')}
        change={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
      );
    }

    return (

      <div className="App">
        <h1> Hola, somos springmaniacos</h1>
        <p>¿Están ahí mis vidas? Están ahí? me oyeeen, me escuchan</p>
        <button
         style={style}
         onClick={this.togglePersonsHandler} >Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'holiwis'));
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{id: 'person1', name: 'Jasu', age: 24},
    {id: 'person2', name: 'Jasu2', age: 27},
    {id: 'person3', name: 'Jasusa', age: 35}
  ],
    otherState: 'valor random',
    showPersons: 'false'
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex] //... para copiarlo y no hacer referencia al mismo objeto
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }
  togglePersonsHandler =() =>{
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }

  switchNameHandler = (newName) => {
    // console.log ('Was clicked!');
    //NO VA:  this.state.persons[0].name='Jesús Galera';
    this.setState( {
      persons: [{name: newName, age: 24},
    {name: 'Jasu2', age: 27},
    {name: 'Jasusa', age: 35}
  ]
})
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();//Con slice copiamos el array en lugar de hacer referencia al original
    const persons = [...this.state.persons]; //alternativa a slice más moderna
    persons.splice(personIndex, 1); //Elimina 1 persona de personas empezando en la posición personIndex
    this.setState({persons: persons });

  }


  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) =>{
          return <Person
          name={person.name}
          age={person.age}
          click={() => this.deletePersonHandler(index)}
          key={person.id}
          change={(event) => this.nameChangeHandler(event, person.id)}
          />
        })}
      </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
      if(this.state.persons.length <=1){
        assignedClasses.push(classes.bold);
      }
    }


    return (
        <div className={classes.App}>
          <h1> Hola, somos springmaniacos</h1>
          <p className={assignedClasses.join(' ')}>¿Están ahí mis vidas? Están ahí? me oyeeen, me escuchan</p>
          <button
           onClick={this.togglePersonsHandler}
           className={btnClass}>
           Toggle people</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'holiwis'));
  }
}

export default App;

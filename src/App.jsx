import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Challenge from './Challenge';

import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2019',
      newDeadline: '',
      number: '100',
      newNumber: ''


    }
  }

  changeDeadline(){
    this.setState({ deadline: this.state.newDeadline })
  }

  changeNumber(){
    this.setState({ number: this.state.newNumber })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to { this.state.deadline }
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <Form inline>
          <FormControl
            className = "Deadline-input"
            placeholder='new date'
            onChange = { event => this.setState({newDeadline:event.target.value})}
          />
          <Button onClick={ () => this.changeDeadline() }>
            Submitr
          </Button>
        </Form>


        <div className="App-title">
          Countdown to { this.state.number }
        </div>
        <Challenge
          number = {this.state.number}
        />
        <Form inline>
          <FormControl
            className = "Deadline-input"
            placeholder='number'
            onChange = { event => this.setState({newNumber:event.target.value})}
          />
          <Button onClick={ () => this.changeNumber() }>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;

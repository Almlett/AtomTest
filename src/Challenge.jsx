import React, { Component } from 'react';
import './App.css';

class Challenge extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      less: 0,
      finish:false,
      oldnumber:0
    }
  } 
  componentWillMount(){
    this.getTimeUntil(this.props.number);
  }

  componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.number), 1000);
  }

  leading0(num){
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(number){
    //alert(this.state.number)
    if (this.state.oldnumber == number){
        this.state.less++;
    }
    else {
      this.state.less = 0;
      this.state.oldnumber = number;
      this.state.finish = false
    }

    var result = 0;
    result = number - this.state.less
    if (result > 0)
    {
      this.setState({number: result});
    }
    else if (result == 0) {
      this.setState({number: result});
      if (this.state.finish == false){
        alert("Termino");
        this.state.finish = true;
      }
    }


  }

  render(){
    return(
      <div>
        <div className = "challenge-1">Number {this.leading0(this.state.number)}</div>
      </div>
    )
  }
}

export default Challenge;

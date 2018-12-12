import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Components Life Cycle</h2>
          <Body />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r:0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    // console.log("random number called");

    this.setState({r: Math.floor(Math.random()*10)});
  }

  render(){
    return(
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log("ComponentWillMount will be called here.");
  }

  componentDidMount(){
    console.log("componentDidMount will be called here.");
  }

  componentWillReceiveProps(newProps){
    console.log("ComponentWillReceiveProps will be called here.");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("shouldComponentUpdate will be called here.");
  }

  componentWillUpdate(newProps, nextState){
    console.log("componentWillUpdate will be called here.");
  }

  componentDidUpdate(newProps, nextState){
    console.log("componentDidUpdate will be called here.");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount will be called here.");
  }

  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;

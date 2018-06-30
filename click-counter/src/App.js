import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            message: "",
            warning: "The counter cannot go below 0."
        };

        this.decrementCounter = this.decrementCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    decrementCounter(){
          if (this.state.counter <= 0){
              this.setState({counter: 0, message: this.state.warning});
          } else if (this.state.counter > 0 && this.state.message === "") {
              this.setState({counter: this.state.counter-1});
          } 
    }

    incrementCounter(){
          this.setState({counter: this.state.counter+1, message: ""});
    }

  render() {

      // I was putting logic in the render() here to setState({message: warning}) 
      // if this.state.counter < 0.  Doing this introduced a "Missed it by that much"
      // error.  My moral of the story: keep the logic in the function! Not the
      // render block!

    return (
      <div data-test="component-app" >
        <h1 data-test="counter-display">The Counter is: {this.state.counter}</h1>
        <h3 data-test="counter-warning" style={{color: "red"}} >{this.state.message}</h3>
        <button 
			data-test="increment-button"
			onClick={ this.incrementCounter }
			>
			Increment Counter
		</button>
        <button 
			data-test="decrement-button"
			onClick={ this.decrementCounter }
			>
			Decrement Counter
		</button>
      </div>
    );
  }
}

export default App;

//

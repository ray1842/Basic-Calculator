import React, {Component} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from "./components/ClearButton";
import * as math from "mathjs";
class App extends Component{
    constructor(props){
      super(props);
      this.state={
        input:"0"
      };
    }
    concatenation= val =>{
      this.setState({
        input: this.state.input + val
      });
    }

    handleEqual=()=>{
      this.setState({input:math.evaluate(this.state.input)});
    }
    render(){
      return(
      
        <div className="calculator">
        <div className="calc-container">
        <Input input={this.state.input}/>
          <div className="row">
            <Button handleClick={this.concatenation}>7</Button>
            <Button handleClick={this.concatenation}>8</Button>
            <Button handleClick={this.concatenation}>9</Button>
            <Button handleClick={this.concatenation}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenation}>4</Button>
            <Button handleClick={this.concatenation}>5</Button>
            <Button handleClick={this.concatenation}>6</Button>
            <Button handleClick={this.concatenation}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenation}>1</Button>
            <Button handleClick={this.concatenation}>2</Button>
            <Button handleClick={this.concatenation}>3</Button>
            <Button handleClick={this.concatenation}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.concatenation}>.</Button>
            <Button handleClick={this.concatenation}>0</Button>
            <Button handleClick={()=>this.handleEqual()}>=</Button>
            <Button handleClick={this.concatenation}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() =>this.setState({input:""})}>Clear</ClearButton>
        </div>
        </div>
    </div>
      
      );

      
    }
}


export default App;

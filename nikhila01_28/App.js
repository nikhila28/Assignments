//import React, {Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      txt:"Click Me to append"
    }
  }
  update(){
    this.setState({txt:this.state.txt+" \n Appended"})
  }
   componentWillMount(){
    alert("You hit componentWillMount");
  }
  componentDidMount(){
    alert("You hit componentDidMount")
  }
  componentWillUnmount(){
    alert("You hit componentWillUnMount")
  }
  render(){
    console.log("render")
    return (
      <div>
        <p onClick={this.update.bind(this)}>{this.state.txt}</p>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      txt:"This should change"
    }
  }
  update(){
    this.setState({
      txt:this.refs.sample.value,
      txt1:this.refs.sample1.value
    })
  }
  render(){
    return (
      <div>
        <input ref="sample" type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
        <input ref="sample1" type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt1}</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(){
  super();
    this.state = {
      txt:"This will change"
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }

  render(){
    return (
      <div>
        <textarea rows="12" cols="12"
              onCopy={this.update.bind(this)}
              onPaste={this.update.bind(this)}
              onChange={this.update.bind(this)}
              onClick={this.update.bind(this)}
              
        ></textarea>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }



}


export default App;
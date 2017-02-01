import React from 'react';
//import ReactDOM from 'react-dom'

/*class App extends React.Component {
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
class App2 extends React.Component {
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
class App3 extends React.Component {
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
  }
}*/

class App extends React.Component {
constructor(){
  super();
  this.state = {
    items :[]
  }
}
filter(e){
  this.setState({filter:e.target.value})
}
componentWillMount(){
  //var url ="https://swapi.co/api/people/?format=json";
  //fetch
  fetch('https://swapi.co/api/people/?format=json').then(response =>response.json())
    .then(({results:items})=>this.setState({items}))
}
render(){
  let items = this.state.items
  if(this.state.filter){
    items = items.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  /*for(var i=0;i<items.length;i++){
    console.log(items[i].vehicles);
  }*/
  return (
    <div>
      Search By Name : <input type="text" onChange={this.filter.bind(this)}/>
      {items.map(item=> <Person update={item}/>)}
    </div>
  )
}
}

const Person = (prop) =>
<div>
<h3>Name :{prop.update.name} <br/>
Vehicles: {prop.update.vehicles} <br/>
Films: {prop.update.films}<br/>
Starships:{prop.update.starships[0,1]} </h3>
</div>

export default App




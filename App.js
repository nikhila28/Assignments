import React from 'react';

class App extends React.Component {
  /*render() {
    return <Sample iphone="sixsplus"/>
  }
}
const Sample = (props)=><h1>{props.iphone}</h1>

Sample.propTypes = {
    iphone(props, propsName, component){
        if(!(propsName in props)){
            return new Error(`Missing ${propsName}`)
        }
        if((props[propsName].length)<5){
            return new Error(`${propsName} is too short`)
        }

} */
   /* constructor(){
        super();
        this.state = {
            txt:"sample-------"
        }
    }
    update(e){
       {/*this.setState({txt:e.type})*/
    /*  this.setState({
        txt:this.refs.sample.value,
        txts:this.refs.sampledata.value
       })
    }
    render(){
        return(
            <div>
              { /* <textarea rows="12" cols="12"
                    onClick={this.update.bind(this)}
                    onMouseOver={this.update.bind(this)}
                ></textarea>
                <h1>{this.state.txt}</h1> */
               /* <input ref="sample" type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt}</h1>
                <input ref="sampledata" type="text" onChange={this.update.bind(this)} />
                <h2>{this.state.txts}</h2>
            </div>
        )
    } */

    constructor(){
        super()
        this.state={
            val:0
        }
    }
    update(){
        this.setState({val:this.state.val+1})
    }
    componentWillMount(){
        console.log("componentWillMount will trigger before render method or before component is mounted on DOM")
    }
    componentDidMount(){
        console.log("componentDidMount will trigger when the component is mounted on the DOM")
    }

    render(){
        console.log("render")
        return (
            <div>
                <button onClick={this.update.bind(this)}>{this.state.val}</button>
            </div>
        )
    }
}
export default App



import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state={
        header:'Welcome To React Components',
        link:'https://www.google.com',
        content:'This is para1',
        footer:'This is para2'
      }
  }
  render() {
    return (
      <div>

        <h1>{this.state.header}</h1>
        <br/><br/><br/>
        <Content contentProp={this.state.content}/>
        <Footer footerProp={this.state.footer}/>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div>

        <a href="{this.props.link}" target='blank'>Link</a>
        <br/>

        {/*using state as props*/}
        <p>{this.props.contentProp}</p>
      </div>
    )
  }
}
class Footer extends Component {
  render() {
    return (
      <div>


        <p>{this.props.footerProp}</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        <span>{this.props.at}</span>
        <span>{this.props.CopyRights}</span>
      </div>
    )
  }
}


Component.defaultProps={at:'@',CopyRights:  'CopyRights Reserved For Sandeep Kumar Puli'}
export default App;

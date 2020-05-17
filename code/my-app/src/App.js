import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      text2: ""
    };
    this.onhandleClick = this.onhandleClick.bind(this)
    this.onhandleChange = this.onhandleChange.bind(this)

    this.onhandleClick2 = this.onhandleClick2.bind(this)
    this.onhandleChange2 = this.onhandleChange2.bind(this)
  }

  onhandleChange(event){
    const value = event.target.value;
    this.setState({
      text: value
    })
  }

  onhandleChange2(e){
    const value2= e.target.value;
    this.setState({
      text2: value2
    })
  }

  onhandleClick(event) {
      event.preventDefault();
      console.log(this.state.text)
  }

  onhandleClick2(e) {
    e.preventDefault();
    console.log(this.state.text2)
  }

  render(){
    return (
        <Form
          text={this.state.text}
          onhandleClick={this.onhandleClick}
          onhandleChange={this.onhandleChange}
        />
    );
  }
}

export default App;

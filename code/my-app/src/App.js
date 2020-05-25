import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      text2: "",
      view_text: "",
      view_text2: "",
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
    this.setState({
      view_text: this.state.text
    })
  }

  onhandleClick2(e) {
    e.preventDefault();
    this.setState({
      view_text2: this.state.text2
    })
  }

  render(){
    const content = {"display": "flex"}
    return (
      <div>
          <Form
            text={this.state.text}
            text2={this.state.text2}
            onhandleClick={this.onhandleClick}
            onhandleClick2={this.onhandleClick2}
            onhandleChange={this.onhandleChange}
            onhandleChange2={this.onhandleChange2}
          />
          <div>
            <div style={content}>
              {this.state.view_text}
            </div>
            <div style={content}>
              {this.state.view_text2}
            </div>
          </div>
      </div>
    );
  }
}

export default App;

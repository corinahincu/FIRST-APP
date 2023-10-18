import React, { Component } from "react";
import "./Button.css"

// main App component
class Button extends Component {
  
  // capture the Construction phase
  constructor(props){
    super(props)
    console.warn("A button has been created")
  }
  // Capture the End of Mount phase
  componentDidMount(){
    console.warn("A button has been MOUNTED")
  }

  handleClick() {
    console.log(`btn ${this.props.label} clicked`);
  }
  render() {
    console.warn("A button has been RENDERED")
    return <button 
      onClick={this.handleClick.bind()}
      className={this.props.color}
      >
        {this.props.label}</button>;
  }
}

export default Button;

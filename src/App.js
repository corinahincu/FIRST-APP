import React, { Component } from "react";
import Button from './btn/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Button label="Button One" color="red" /> 
        <Button label="Button Two" color="green" />
      </div>
      // react.createElement(Button,...) . to ce scriem aici, se interpreteaza in props: label, color, etc
    );
  }
}

export default App;

// <App>
//   <Button />
// </App>
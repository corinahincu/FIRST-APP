
import React, { Component } from "react";

// main App component 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First React JS APP</h1>
      </div>
    );
  }
}

export default App;

/* function App() { */
  // below jsx syntax
/*   return (
    <div className="App">
      <h1> First React JS APP</h1>
    </div>
  );
}

export default App; */


// element.innerHTML = ´ <div> </div>´  -> aceasta varianta nu se considera profesionista sa dai prin string structura, se pierde starea,renderingul e mult mai complicat
// element.appendChild(document.createElement('div')) -> aceasta varianta e considerata profesionista, a lucra ca stilul OOP, dar e mai lung si la fel nu e performant sa scrii asa

// datorita dezvoltarii reactului a aparut : JSX (initial lucra doar in react, acum e separata si putem lucra cu ea inafara reactului) 
// e o componenta biblioteca JSX - library, scrii compact dar executa cu stilul OOP si sinaìtaxa html -> (HTML like syntax + DOM OOP)

// jsx e un limbaj strict
// babel - convertor de limbaje 

// componentele reactului sunt descrise prin functii, clase, in interiorul lor printr-un cod special,daca ii functie, trebuie sa returneze : return(). daca ii clasa atunci prin render.

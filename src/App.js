import Button from "./btn/Button";

/* function App(){
  return (
    <div>
      <Button label="Button Two" color="red" />
      <Button label="Button Two" color="green" />
    </div>
  );
} */

function App() {
  const btn1 = <Button label="Button One" color="red" />;
  console.dir(btn1);

  return (
    <div>
      {btn1}
      <Button label="Button Two" color="green" />
    </div>
  );
}

/* class App extends Component{
  render(){
    const btn1 = <Button label="Button One" color="red" />
    console.dir(btn1)
    return(
      <div>
        {btn1}
        <Button label="Button Two" color="green"/>
      </div>
    )
  }
} */


export default App;

// <App>
//   <Button />
// </App>

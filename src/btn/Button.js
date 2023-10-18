import "./Button.css";

// functional component / order
function Button(props) {
  console.warn("A button has been created");

  console.warn("A button has been MOUNTED");

  console.warn("A button has been RENDERED");

  function handleClick() {
    console.log(`button "${props.label}" clicked`);
  }
  return (
    <button onClick={handleClick} className={props.color}>
      {props.label}
    </button>
  );
}

export default Button;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 10;

  // initializes a state variable 'counter' with a default value of 10
  let [counter, setCounter] = useState(10);

  // defines a function 'addValue' that increments the 'counter' state variable by 1
  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    if (counter == 20) {
      setCounter(20);
    }
    // console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Chai Aur Code</h1>
      {/* displays the current value of the 'counter' state variable */}
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

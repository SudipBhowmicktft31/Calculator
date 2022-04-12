import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clearForm = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Syntax Error");
    }
  };
  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keyboard">
        <button onClick={clearForm} id="clear">
          Clear
        </button>
        <button onClick={backspace} id="backspace">
          C
        </button>
        <button name="/" onClick={clickHandler} id="operator">
          &divide;
        </button>
        <button name="7" onClick={clickHandler}>
          7
        </button>
        <button name="8" onClick={clickHandler}>
          8
        </button>
        <button name="9" onClick={clickHandler}>
          9
        </button>
        <button name="*" onClick={clickHandler} id="operator">
          &times;
        </button>
        <button name="4" onClick={clickHandler}>
          4
        </button>
        <button name="5" onClick={clickHandler}>
          5
        </button>
        <button name="6" onClick={clickHandler}>
          6
        </button>
        <button name="+" onClick={clickHandler} id="operator">
          +
        </button>
        <button name="1" onClick={clickHandler}>
          1
        </button>
        <button name="2" onClick={clickHandler}>
          2
        </button>
        <button name="3" onClick={clickHandler}>
          3
        </button>
        <button name="-" onClick={clickHandler} id="operator">
          -
        </button>
        <button name="." onClick={clickHandler}>
          .
        </button>
        <button name="0" onClick={clickHandler}>
          0
        </button>
        <button onClick={calculateResult} id="result">
          =
        </button>
      </div>
    </div>
  );
};

export default App;

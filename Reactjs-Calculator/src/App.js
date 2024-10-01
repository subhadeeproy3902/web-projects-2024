import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer/footer";
import { evaluate } from "mathjs";

const App = () => {
  const [result, setResult] = useState("");
  const [liveResult, setLiveResult] = useState("");
  const [showLiveResult, setShowLiveResult] = useState(true);
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
    setShowLiveResult(true);
  };
  const del = () => {
    setResult(result.slice(0, result.length - 1));
    setShowLiveResult(true);
  };
  const calc = () => {
    try {
      setResult(evaluate(result).toString());
      setShowLiveResult(false);
    } catch (err) {
      setResult("Error");
      setShowLiveResult(false);
    }
  };

  useEffect(() => {
    if (result === "") {
      setLiveResult("");
      return;
    }

    try {
      const evaluated = evaluate(result);
      setLiveResult(evaluated.toString());
    } catch (err) {}
  }, [result]);

  return (
    <>
      <h1>Simple Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={result} />
          {showLiveResult && result !== liveResult && liveResult !== "" && (
            <div className="live-result">{liveResult}</div>
          )}
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={del} id="del">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calc} id="result">
            =
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

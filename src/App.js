import "./App.css";
import { useState } from "react";

function App() {
  const [binArray, setBinArray] = useState(
    Array(8)
      .fill(0)
      .map((x) => x)
  );
  const [currentNumber, setCurrentNumber] = useState(0);
  const helloWorld = "hello world".split("");

  const interval = setInterval(() => {
    let newCurr = currentNumber + 1;
    newCurr < helloWorld.length
      ? setCurrentNumber(newCurr)
      : setCurrentNumber(0);
    const bin = helloWorld[currentNumber]
      .charCodeAt(0)
      .toString(2)
      .padStart(8, "0")
      .split("");
    setBinArray(bin);
    clearInterval(interval);
  }, 500);

  return (
    <div className="App">
      <div id="bin-array">
        {!!binArray.length &&
          binArray.map((binNo, i) => {
            return (
              <span
                key={binNo + i}
                className={(!!parseInt(binNo) ? "on" : "off") + " bin"}
              ></span>
            );
          })}
      </div>
    </div>
  );
}

export default App;

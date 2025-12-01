import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  let name = "hello";
  let age = 20;

  const sum = a && b ? Number(a) + Number(b) : "";
  const product = c && d ? Number(c) * Number(d) : "";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is {name} and my age is {age}</h1>

        <div style={{ margin: "20px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <h2>Calculator</h2>
          <div style={{ marginBottom: "10px" }}>
            <label>Number 1 for adding: </label>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Number 2 for adding: </label>
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
          </div>
          {sum && <h1>This is your add value = {sum}</h1>}

          <div style={{ marginBottom: "10px", marginTop: "20px" }}>
            <label>Number 3 for multiplication: </label>
            <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Number 4 for multiplication: </label>
            <input type="number" value={d} onChange={(e) => setD(e.target.value)} />
          </div>
          {product && <h1>This is your multiply value = {product}</h1>}
        </div>
      </header>
    </div>
  );
}

export default App;

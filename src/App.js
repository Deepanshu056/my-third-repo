import logo from "./logo.svg";
import "./App.css";

// Prompting at module scope so prompts run once (avoids repeated prompts on re-renders)
const a = Number(prompt("Enter number 1 for adding:"));
const b = Number(prompt("Enter number 2 for adding:"));
const c = Number(prompt("Enter number 3 for multiplication:"));
const d = Number(prompt("Enter number 4 for multiplication:"));

function App() {
  let name = "hello";
  let age = 20;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is {name} and </h1><h1> my age is {age}</h1>
        <h1>{a+b}</h1>
        <h1>{c*d}</h1>

      </header>
    </div>
  );
}

export default App;

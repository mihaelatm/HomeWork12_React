import { useState } from "react";
import "./App.css";
import ValueDisplay from "./components/ValueDisplay";

function App() {
  const [userValue, setUserValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setSubmittedValue(userValue);
      setUserValue("");
    }
  }
  console.log(submittedValue);
  return (
    <div className="App">
      <h1>Current and Previos Value</h1>
      <input
        type="text"
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ValueDisplay value={submittedValue} />
    </div>
  );
}

export default App;

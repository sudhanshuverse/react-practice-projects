import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState(null);
  const ageFun = () => {
    if (!date) return;

    const birthYear = date.split("-")[0];
    const currentYear = new Date().getFullYear();
    if(currentYear - birthYear <= 0) return;
    setAge(currentYear - birthYear);
  }

  const resetFun = () => {
    setAge(null);
  }

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>Age Calculator</h1>
        <div className="inner-card">
          <div className="first-column">
            <h1>Date Of Birth</h1>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <div className="button-container">
              <button onClick={ageFun}>Calculate Age</button>
              <button onClick={resetFun}>Reset</button>
            </div>
          </div>
          <div className="second-column">
            <div className="second-row-inner">
              <h1>Your Age Is</h1>
              <h2>{age !== null ? age : "--"}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
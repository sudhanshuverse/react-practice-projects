import { useState } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState("");
  let totalWords = text.length;
  let totalSentence = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>Words And Sentence Counter</h1>
        <div className="inner-card-container">
          <div className="first-column">
            <textarea placeholder="Enter the text..." onChange={(e) => setText(e.target.value)}></textarea>
          </div>
          <div className="second-column">
            <h3>Result</h3>
            <div className="inner-result-container">
              <h4>Character :  <span>{totalWords}</span></h4>
              <h4>Sentence :  <span>{totalSentence}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
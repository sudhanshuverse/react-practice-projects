import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speechFunction = () => {
    if (!text) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = selectedVoice;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>
          Text To Speech <span>Converter</span>
        </h1>

        <textarea
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="last-row-container">
          <select
            onChange={(e) =>
              setSelectedVoice(
                voices.find((voice) => voice.name === e.target.value)
              )
            }
          >
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>

          <button onClick={speechFunction}>Listen</button>
        </div>
      </div>
    </div>
  );
}

export default App;

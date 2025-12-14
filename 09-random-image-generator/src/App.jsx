import { useState } from "react"
import "./App.css"

function App() {
  const [bg, setBg] = useState(
    `https://picsum.photos/1000/400?random=${Math.random()}`
  )

  const changeImage = () => {
    setBg(`https://picsum.photos/1000/400?random=${Math.random()}`)
  }

  return (
    <div className="main-container">
      <main style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-section">
          <button onClick={changeImage}>Change Image</button>
        </div>
      </main>
    </div>
  )
}

export default App

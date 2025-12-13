import "./App.css"

function App() {
  const reload = () => {
    window.location.reload()
  }
  return (
    <div className="main-container">
      <header>
        <nav>
          <div className="left">
            <h1>Xplore</h1>
          </div>
          <div className="right">
            <a href="">Travel Guide</a>
            <a href="">Famous Places</a>
            <a href="">Contact Us</a>
            <button>Booking</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="hero-section">
            <button onClick={reload}>Change Image</button>
        </div>
      </main>
    </div>
  )
}

export default App;
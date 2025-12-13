import "./App.css";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="*" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App;
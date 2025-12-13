import { useState } from "react";
import "./App.css";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const fruits = ["Mango 🥭", "Apple 🍎", "Orange 🍊", "Grapes 🍇", "Banana 🍌", "Watermelon 🍉", "Cherry 🍒"];

  const result = fruits.find(item =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>Fruit Filter</h1>

        <input type="text" placeholder="Search Fruit" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />

        <div className="item-container">
          {result && <li>{result}</li>}
        </div>
      </div>
    </div>
  );
}

export default App;

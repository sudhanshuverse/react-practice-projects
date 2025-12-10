import './style.css';

import reloadImg from '/assets/reload.svg'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return(
      <div className='parent-container'>
        <div className='card-container'>
          <div className='first-row'>
            <img src={reloadImg} alt="reload image" onClick={() => setCount(0)}/>
          </div>

          <div className='second-row'>
            <h1>{count}</h1>
          </div>
          
          <div className='third-row'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count>0 ? count - 1: 0)}>-</button>
          </div>
        </div>
      </div>
  )
}

export default App;
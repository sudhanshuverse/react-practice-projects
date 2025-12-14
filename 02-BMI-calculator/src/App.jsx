import { useState } from 'react';
import './style.css';

function App() {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(null)

    const handleClick = () => {
        const result = (weight / (height * height)) * 703
        setBmi(result)
    }

    const reload = () => {
        setHeight(0)
        setWeight(0)
        setBmi(null)
    }

    return (
        <div className="parent-container">
            <div className="card-container">
                <div className="heading">
                    <h2>BMI Calculator</h2>
                </div>
                <div className="input-fields">
                    <div className="first-input">
                        <label htmlFor="weight">Weight (ibs)</label>
                        <input type="number" placeholder='Enter weight' id='weight' onChange={(e) => setWeight(e.target.value)} value={weight}/>
                    </div>
                    <div className="second-input">
                        <label htmlFor="height">Height (in)</label>
                        <input type="number" placeholder='Enter height' onChange={(e) => setHeight(e.target.value)} value={height}/>
                    </div>
                    <button className='submit' onClick={handleClick}>Submit</button>
                    <button onClick={reload}>Reload</button>
                </div>
                <div className="output-field">
                    <h3>Your BMI is: {bmi}</h3>
                </div>
            </div>
        </div>
    )
}

export default App;
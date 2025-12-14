import { useEffect, useState } from 'react'
import './App.css'
import currencyConverter from '/assets/currency-converter.svg'

function App() {
  const [rates, setRates] = useState({})
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("INR")
  const [to, setTo] = useState("USD")
  const [converted, setConverted] = useState("")

  const API = "https://api.exchangerate-api.com/v4/latest/INR"

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setRates(data.rates))
  }, [])

  useEffect(() => {
    if (rates[from] && rates[to]) {
      const result = (amount * rates[to] / rates[from]).toFixed(2)
      setConverted(result)
    }
  }, [amount, from, to, rates])

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="first-row">
          <img src={currencyConverter} alt="" />
          <h2>Currency Converter</h2>
        </div>

        <div className="second-row">
          <div className="first-input">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
          </div>

          <div className="second-input">
            <label htmlFor="from">From Currency</label>
            <select id="from" value={from} onChange={(e)=> setFrom(e.target.value)}>
              {Object.keys(rates).map(code => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>

          <div className="third-input">
            <label htmlFor="to">To Currency</label>
            <select id="to" value={to} onChange={(e)=> setTo(e.target.value)}>
              {Object.keys(rates).map(code => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="third-row">
          <p>Converted Amount: <span>{converted}</span></p>
        </div>
      </div>
    </div>
  )
}

export default App

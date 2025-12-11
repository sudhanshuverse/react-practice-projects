import React, { useEffect, useState } from 'react';
import './App.css';
import search from '/assets/search.svg';
import cloud from '/assets/cloud.png';

const API_KEY = '8cfff37a35a38f4c2f527222d73a235a';

export default function App() {
  const [weather, setWeather] = useState(null); 
  const [place, setPlace] = useState('Tokio');  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const msToKmh = (m) => (m ? (m * 3.6).toFixed(1) : '-');
  const metersToKm = (m) => (m ? (m / 1000).toFixed(1) : '-');

  const formatTime = (unixSeconds, tzOffsetSeconds) => {
    if (!unixSeconds) return '-';
    const localMillis = (unixSeconds + (tzOffsetSeconds || 0)) * 1000;
    const d = new Date(localMillis);
    let hours = d.getUTCHours();
    const minutes = d.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = ((hours + 11) % 12) + 1; 
    return `${hours}:${minutes} ${ampm}`;
  };

  const fetchWeather = async (city) => {
    if (!city || city.trim() === '') {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        setWeather(null);
        setError(data?.message || 'City not found');
      } else {
        setWeather(data);
        setError(null);
      }
    } catch (e) {
      setWeather(null);
      setError('Network error. Please try again');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(place);
  }, []);

  const callAPI = () => {
    fetchWeather(place);
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>Weather App</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Enter the place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') callAPI();
            }}
          />

          <div
            className="search-image-container"
            onClick={callAPI}
            style={{ cursor: 'pointer' }}
          >
            <img src={search} alt="search" />
          </div>
        </div>

        <div className="inner-container">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}

          {weather ? (
            <>
              <div className="first-row">
                <h4>
                  {weather.name}, {weather.sys?.country}
                </h4>
                <h4>
                  Weather: {weather.weather?.[0]?.main} (
                  {weather.weather?.[0]?.description})
                </h4>
              </div>

              <div className="second-row">
                <div className="image-container">
                  <img src={cloud} alt="cloud" />
                </div>
              </div>

              <div className="third-row">
                <h4>Temperature: {weather.main?.temp}°C</h4>
                <h4>Humidity: {weather.main?.humidity}%</h4>
                <h4>Wind: {msToKmh(weather.wind?.speed)} km/h</h4>
                <h4>Visibility: {metersToKm(weather.visibility)} km</h4>
                <h4>Clouds: {weather.clouds?.all}%</h4>
              </div>

              <div className="fourth-row">
                <h4>Sunrise: {formatTime(weather.sys?.sunrise, weather.timezone)}</h4>
                <h4>Sunset: {formatTime(weather.sys?.sunset, weather.timezone)}</h4>
              </div>
            </>
          ) : (
            <>
              <div className="first-row">
                <h4>City not available</h4>
                <h4>Weather: -</h4>
              </div>

              <div className="second-row">
                <div className="image-container">
                  <img src={cloud} alt="cloud" />
                </div>
              </div>

              <div className="third-row">
                <h4>Temperature: -</h4>
                <h4>Humidity: -</h4>
                <h4>Wind: -</h4>
                <h4>Visibility: -</h4>
                <h4>Cloud: -</h4>
              </div>

              <div className="fourth-row">
                <h4>Sunrise: -</h4>
                <h4>Sunset: -</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

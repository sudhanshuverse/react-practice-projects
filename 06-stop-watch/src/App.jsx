import "./App.css";
import refresh from "/assets/refresh.svg";
import start from "/assets/play.svg";
import stop from "/assets/pause.svg";
import { useEffect, useState } from "react";

function App() {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 10);      
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);

        return (
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0")
        );
    };

    const resetTime = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div className="main-container">
            <div className="card-container">
                <div className="first-row">
                    <div className="refresh-image-container">
                        <img src={refresh} alt="refresh image" title="Refresh Image" onClick={resetTime}/>
                    </div>
                </div>

                <div className="second-row">
                    <h1>{formatTime()}</h1>
                </div>

                <div className="third-row">
                    <div className="start-stop-image-container">
                        <img src={isRunning ? stop : start} alt="Start and Stop image" title="Start and stop image" onClick={() => setIsRunning(prev => !prev)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

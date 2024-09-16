import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherAside from "./shared/global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "./shared/global_aside/roadStatus_asede/RoadstatusAside";
import FlightsAside from "./shared/global_aside/flights_aside/FlightsAside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WeatherAside />
        <RoadstatusAside />
        <FlightsAside />
      </div>
    </>
  );
}

export default App;

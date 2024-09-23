import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherAside from "./shared/global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "./shared/global_aside/roadStatus_asede/RoadStatusAside";
import FlightsAside from "./shared/global_aside/flights_aside/FlightsAside";
import TaxiScheduleAside from "./shared/global_aside/taxiSchedule_aside/TaxiScheduleAside";
import Header from "./shared/header/Header";
import Archive from "./pages/archive_page/Archive";
import Footer from "./shared/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-10 min-h-[100vh] mx-auto">
        <Header />
        {/* <Archive /> */}
        <Weather />
        {/* <WeatherAside />
        <RoadstatusAside />
        <FlightsAside /> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;

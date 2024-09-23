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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/news/News";
import Afisha from "./pages/afisha/Afisha";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-10  mx-auto">
        <Header />
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/afisha" element={<Afisha />} />
        </Routes>
        <Archive />
        {/* <WeatherAside />
        <RoadstatusAside />
        <FlightsAside /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

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
import Afisha from "./pages/afisha/Afisha";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import Weather from "./pages/weather_page/Weather";
import SearchResults from "./pages/search_results/SearchResults";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-10 min-h-[100vh] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/archive_page" element={<Archive />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <SearchResults />
        <Footer />
      </div>
    </>
  );
}

export default App;

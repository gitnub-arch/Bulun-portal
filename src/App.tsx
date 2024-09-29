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
import AdministrationSection from "./pages/administration/AdministrationSection";
import AddFile from "./shared/add_file/AddFile";
import AccountHome from "./account_pages/accont_home/AccountHome";
import Announcement from "./pages/announcement/Announcement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" min-h-[100vh] mx-auto">
        <Header className="pt-5" />
        <Routes>
          <Route path="/account" element={<AccountHome />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/archive_page" element={<Archive />} />
          <Route path="/add-file" element={<AddFile />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/administration" element={<AdministrationSection />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

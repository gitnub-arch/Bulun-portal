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

import AccountHeader from "./shared/account_header/AccountHeader";
import AccountTarif from "./account_pages/account_addTarif/AccountTarif";
import AccountTarifs from "./account_pages/account_tarifs/AccountTarifs";
import Account from "./account_pages/account/Account";
import AccountInfo from "./account_pages/account_info/AccountInfo";
import AccountPayment from "./account_pages/account_payment/AccountPayment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" min-h-[100vh] mx-auto">
        <Header className="pt-5" />
        {/* <AccountHeader /> */}
        <Routes>
          <Route path="/account-info" element={<AccountInfo />} />
          <Route path="/account" element={<AccountHome />} />
          <Route path="/account-addTarif" element={<AccountTarif />} />
          <Route path="/account-tarifs" element={<AccountTarifs />} />
          <Route path="/account-payment" element={<AccountPayment />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
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

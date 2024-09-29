import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import WeatherAside from "./shared/global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "./shared/global_aside/roadStatus_asede/RoadStatusAside";
import FlightsAside from "./shared/global_aside/flights_aside/FlightsAside";
import TaxiScheduleAside from "./shared/global_aside/taxiSchedule_aside/TaxiScheduleAside";
import Header from "./shared/header/Header";
import Archive from "./pages/archive_page/Archive";
import Footer from "./shared/footer/Footer";
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
import Announcement from "./pages/announcement/Announcement";
import SearchResults from "./pages/search_results/SearchResults";
import  { Auth }  from "./shared/authorization/Auth";
import Transport from "./pages/transport/Transport";

function App() {
  const location = useLocation(); // Получаем текущий путь

  // Массив с путями личного кабинета
  const accountPaths = [
    "/account",
    "/accont-home",
    "/account-addTarif",
    "/account-info",
    "/account-tarifs",
    "/account-payment",
  ];

  // Проверка на нахождение на странице личного кабинета
  const isAccountPage = accountPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-[100vh] mx-auto">
      {/* Условный рендеринг хедера */}
      {isAccountPage ? <AccountHeader /> : <Header className="pt-5" />}

      <Routes>
        {/* Маршруты личного кабинета */}
        <Route path="/account-info" element={<AccountInfo />} />
        <Route path="/account" element={<AccountHome />} />
        <Route path="/account-addTarif" element={<AccountTarif />} />
        <Route path="/account-tarifs" element={<AccountTarifs />} />
        <Route path="/account-payment" element={<AccountPayment />} />
        {/* Обычные маршруты */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/announcement" element={<Announcement />} />{" "}
        <Route path="/authorization" element={<Auth />} /> {/* Маршрут на авторизацию */}
        <Route path="/afisha" element={<Afisha />} />
        <Route path="/archive_page" element={<Archive />} />
        <Route path="/add-file" element={<AddFile />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/administration" element={<AdministrationSection />} />
        <Route path="/search-result" element={<SearchResults />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Auth />
      <Footer />
    </div>
  );
}

export default App;

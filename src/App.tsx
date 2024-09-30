import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import AccountHeader from "./shared/account_header/AccountHeader";
import AddFile from "./shared/add_file/AddFile";
import Archive from "./pages/archive_page/Archive";
import Afisha from "./pages/afisha/Afisha";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import Weather from "./pages/weather_page/Weather";
import AdministrationSection from "./pages/administration/AdministrationSection";
import AccountHome from "./account_pages/accont_home/AccountHome";
import AccountTarif from "./account_pages/account_addTarif/AccountTarif";
import AccountTarifs from "./account_pages/account_tarifs/AccountTarifs";
import AccountInfo from "./account_pages/account_info/AccountInfo";
import AccountPayment from "./account_pages/account_payment/AccountPayment";
import Announcement from "./pages/announcement/Announcement";
import SearchResults from "./pages/search_results/SearchResults";

import AccountDevices from "./account_pages/account_devices/AccountDevices";
import DevicesReduct from "./account_pages/devices_reduct/DevicesReduct";
import Transport from "./pages/transport/Transport";

function App() {
  const location = useLocation();

  const accountPaths = [
    "/account",
    "/accont-home",
    "/account-addTarif",
    "/account-info",
    "/account-tarifs",
    "/account-payment",
    "/devices-reduct",
    "/account-devices",
  ];

  const isAccountPage = accountPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-[100vh] mx-auto">
      {isAccountPage ? <AccountHeader /> : <Header className="pt-5" />}

      <Routes>
        <Route path="/account-info" element={<AccountInfo />} />
        <Route path="/account" element={<AccountHome />} />
        <Route path="/account-devices" element={<AccountDevices />} />
        <Route path="/account-addTarif" element={<AccountTarif />} />
        <Route path="/account-tarifs" element={<AccountTarifs />} />
        <Route path="/account-payment" element={<AccountPayment />} />
        <Route path="/devices-reduct" element={<DevicesReduct />} />
        {/* Обычные маршруты */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/announcement" element={<Announcement />} />{" "}
        {/* Маршрут на авторизацию */}
        <Route path="/afisha" element={<Afisha />} />
        <Route path="/archive_page" element={<Archive />} />
        <Route path="/add-file" element={<AddFile />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/administration" element={<AdministrationSection />} />
        <Route path="/search-result" element={<SearchResults />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

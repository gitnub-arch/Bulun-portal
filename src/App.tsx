import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./shared/footer/Footer";
import AdministrationSection from "./shared/administration/AdministrationSection";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
<Footer/>
<AdministrationSection/>
    </>
  );
}

export default App;

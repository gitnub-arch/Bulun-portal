import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/news/News.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

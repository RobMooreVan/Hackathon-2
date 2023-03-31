import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RetentionPage from "./pages/RetentionPage/RetentionPage";
import TwoRetentionPage from "./pages/TwoRetentionPage/TwoRetentionPage";
import './App.scss';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/retention" element={<RetentionPage />} />
        <Route path="/tworetention" element={<TwoRetentionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

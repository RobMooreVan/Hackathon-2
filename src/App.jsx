import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RetentionPage from "./pages/RetentionPage/RetentionPage";
import TwoRetentionPage from "./pages/TwoRetentionPage/TwoRetentionPage";
import AdvancePage from "./pages/AdvancePage/AdvancePage";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [chatState, setChatState] = useState("");

  const handleChatContent = (chatState) => {
    setChatState(chatState);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <MainPage
              chatState={chatState}
              handleChatContent={handleChatContent}
            />
          }
        />
        <Route
          path="/retention"
          element={
            <RetentionPage
              chatState={chatState}
              handleChatContent={handleChatContent}
            />
          }
        />
        <Route
          path="/tworetention"
          element={
            <TwoRetentionPage
              chatState={chatState}
              handleChatContent={handleChatContent}
            />
          }
        />
        <Route path="/advance" element={<AdvancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

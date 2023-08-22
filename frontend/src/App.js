import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import SciFiImage from "./pages/SciFiImage";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          {isLogin ? (
            <Route path="/" element={<Homepage />} />
          ) : (
            <Route path="/" element={<Welcome />} />
          )}
          {/* <Route path="/" element={<Welcome />} />
          <Route path="/" element={<Homepage />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<SciFiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
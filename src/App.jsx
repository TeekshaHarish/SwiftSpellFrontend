import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Match from "./components/Match/Match";
import Dictation from "./components/Dictation/Dictation";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      {/* <Register /> */}
      <Profile />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>

      <Footer />
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;

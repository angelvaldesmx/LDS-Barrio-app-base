import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Records from "./pages/Records";
import Certificates from "./pages/Certificates";
import Library from "./pages/Library";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/records" element={<Records />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/library" element={<Library />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
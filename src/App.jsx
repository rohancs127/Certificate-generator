import { useState } from "react";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import Input from "./pages/Input";
import Download from "./pages/Download";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/generate" element={<Input />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

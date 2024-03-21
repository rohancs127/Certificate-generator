import { useState } from "react";
import Home from "./assets/pages/Home";
import Certificate from "./assets/pages/Certificate";
import Input from "./assets/pages/Input";
import Download from "./assets/pages/Download";
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

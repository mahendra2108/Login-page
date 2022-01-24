import React, { useState } from "react";
import ExamMaster from "./Components/ExamMaster";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="ExamMaster" element={<ExamMaster />} />
          <Route path="Sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

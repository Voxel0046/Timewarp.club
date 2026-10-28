import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Modules } from "./pages/Modules";
import { FAQ } from "./pages/FAQ";
import { Login, Register } from "./pages/Auth";
import { Terms, Privacy, Refund } from "./pages/Legal";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
        <Route path="/purchase" element={<Navigate to="/#pricing" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
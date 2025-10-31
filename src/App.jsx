import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Steps from "./pages/Steps";

export default function App() {
  return (
    // <h1 className="text-4xl font-bold text-rose-500">
    //   Tailwind v4 is Working 🎉
    // </h1>

    <Router>
      <Routes>
        <Route path="/steps" element={<Steps />} /> {/* temporary */}
      </Routes>
    </Router>
  );
}

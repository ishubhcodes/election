import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Steps from "./pages/Steps";
import Rules from "./pages/Rules";

export default function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/steps" element={<Steps />} />
      </Routes>

      <Routes>
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
}

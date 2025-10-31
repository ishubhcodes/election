import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Steps from "./pages/Steps";
import Rules from "./pages/Rules";
import Demo from "./pages/VoteDemo";

export default function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/steps" element={<Steps />} />
      </Routes>

      <Routes>
        <Route path="/rules" element={<Rules />} />
      </Routes>

      <Routes>
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

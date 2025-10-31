import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Steps from "./pages/Steps";
import Rules from "./pages/Rules";
import Demo from "./pages/VoteDemo";
import Home from "./pages/Home";

export default function App() {
  return( 
    <Router>
      {/* Header appears on all pages */}
      <Header />
      
      {/* All routes in one Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}
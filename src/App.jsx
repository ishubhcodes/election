import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Steps from "./pages/Steps";
import Rules from "./pages/Rules";
import Demo from "./pages/VoteDemo";
import VoteInfo from "./pages/VoteInfo";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Navbar from './components/Navbar';


export default function App() {
  return( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/steps" element={<Steps />} />
      </Routes>
      <Routes>
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <Routes>
        <Route path="/demo" element={<Demo />} />
      </Routes>
        <Routes>
        <Route path="/voteinfo" element={<VoteInfo />} />
      </Routes>
      <Toaster position='top-right' richColors toastOptions={{ className: 'text-xl p-6 w-120 h-18' }} />
    </Router>

  );
}

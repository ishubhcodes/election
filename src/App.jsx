import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
<<<<<<< HEAD
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
=======
      {/* Header appears on all pages */}
      <Header />
      
      {/* All routes in one Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> 601d96fdeadf5d0511af3f4a25c97a59e6aecd0d
        <Route path="/steps" element={<Steps />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/voteinfo" element={<VoteInfo />} />
        <Toaster position='top-right' richColors toastOptions={{ className: 'text-xl p-6 w-96 h-16' }} />
      </Routes>
<<<<<<< HEAD
      <Toaster position='top-right' richColors toastOptions={{ className: 'text-xl p-6 w-120 h-18' }} />
=======
>>>>>>> 601d96fdeadf5d0511af3f4a25c97a59e6aecd0d
    </Router>

  );
}
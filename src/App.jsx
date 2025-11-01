import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Steps from "./pages/Steps";
import Rules from "./pages/Rules";
import Demo from "./pages/VoteDemo";
import VoteInfo from "./pages/VoteInfo";
import Candidates from "./pages/Candidates";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizPage from './pages/Quiz';
import { LanguageProvider } from "./context/language-context"

export default function App() {
  return( 
    <Router>
          <LanguageProvider>
      {/* Header appears on all pages */}
      <Header />
      {/* All routes in one Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/voteinfo" element={<VoteInfo />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
      <Toaster position='top-right' richColors toastOptions={{ className: 'text-xl p-6 w-120 h-18' }} />
      <Footer/>
      </LanguageProvider>
    </Router>

  );
}
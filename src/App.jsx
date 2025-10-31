import { useState } from 'react'
import './App.css'
import VoteDemo from "./pages/VoteDemo";
import VoteInfo from "./pages/VoteInfo";
import { Toaster } from "sonner";


export default function App() {
  return( 
    <>
    <Toaster position='top-right' richColors toastOptions={{ className: 'text-xl p-6 w-96 h-16' }} />
    <VoteInfo/>
    </>
  );
}

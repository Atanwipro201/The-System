import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Verdict from './pages/Verdict';
import './App.css';

// Main App component
//I use the export default so its a bit shorter and cleaner
//setting up routes for different pages

function App() {
  return (
        <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/verdict" element={<Verdict />} />
      </Routes>
    </BrowserRouter>
        </div>
  )
};
export default App;


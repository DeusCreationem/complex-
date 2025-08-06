//import { useState } from 'react'//
import './index.css'
import './App.css'
import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import PrivacyPage from './pages/Privacy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

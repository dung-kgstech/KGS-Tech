import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/HomePage'; 
import Company from './pages/Company'; 
import Business from './pages/Bussiness'; 
import Blog from './pages/Blog'; 

const App = () => {
  return (
    <Router>
    <Header home="Home" company="Company" business="Business" blog="Blog" />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
  </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/HomePage'; 
import Company from './pages/Company'; 
import Business from './pages/Bussiness'; 
import Blog from './pages/Blog'; 
import Post from './pages/Post'; // Import trang chi tiết bài viết
import './App.css'
import './i18n/i18n';   
import { useTranslation } from 'react-i18next'; 

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Header home={t('Home')} company={t('Company')} business={t('Business')} blog={t('Blog')} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/business" element={<Business />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />}/>
        </Routes>
      <Footer />
  </Router>
  );
};

export default App;

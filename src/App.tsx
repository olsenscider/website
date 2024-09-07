import React from 'react';
// import NavBar from './components/Navbar'
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme'
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import CiderTipsPage from './pages/CiderTipsPage';
import FoodSafetyPage from './pages/FoodSafetyPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Services' element={<ServicesPage />} />
            <Route path='/CiderTips' element={<CiderTipsPage />} />
            <Route path='/FoodSafety' element={<FoodSafetyPage />} />
            <Route path='/ContactUs' element={<ContactUsPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default App;

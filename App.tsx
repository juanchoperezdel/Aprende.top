
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ScrollToTop Component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animates only once while scrolling down
      duration: 800, // Animation duration
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-de-servicio" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;

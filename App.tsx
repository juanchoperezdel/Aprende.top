
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TermsOfService from './pages/TermsOfService';

// ... (keep ScrollToTop and imports)

const App: React.FC = () => {
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

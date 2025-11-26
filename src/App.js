import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Recommendations from './Components/Recommendations';
import AdminDashboard from './Components/AdminDashboard';
import Contact from './Components/Contact';
import TravelCatalog from './Components/TravelCatalog';

function App() {
  const [view, setView] = useState('landing');
  const [pendingSection, setPendingSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (view === 'landing' && pendingSection) {
      const target = pendingSection;
      setPendingSection(null);
      requestAnimationFrame(() => scrollToSection(target));
    }
  }, [view, pendingSection]);

  const handleNavigation = (target) => {
    if (target === 'catalog') {
      setView('catalog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (view !== 'landing') {
      setPendingSection(target);
      setView('landing');
    } else {
      scrollToSection(target);
    }
  };

  return (
    <div className="relative">
      <Navbar onNavigate={handleNavigation} currentView={view} />
      {view === 'landing' ? (
        <>
          <Home />
          <About />
          <Recommendations />
          <AdminDashboard />
          <Contact />
        </>
      ) : (
        <TravelCatalog onBack={() => setView('landing')} />
      )}
    </div>
  );
}

export default App;

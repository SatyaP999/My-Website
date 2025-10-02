import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [activeTab, setActiveTab] = useState("landing");
  return (
    <>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "landing" && <LandingPage />}
      {activeTab === "about" && <AboutPage />}
      {activeTab === "contact" && <ContactPage />}
    </>
  )
}

export default App

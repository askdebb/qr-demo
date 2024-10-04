// import React from 'react'
import Navbar from "../components/PageSections/Navbar";
import Heropage from "../components/PageSections/Heropage";
import Footer from "../components/PageSections/Footer";
import QRInterface from "../components/QRInterface/QR-Interface";
import MainTutorialSection from "../components/TutorialSections/MainTutorialSection";
const Homepage = () => {
  return (
    <>
      {/* Handles the navbar component */}
      <header>
        <Navbar />
      </header>

      <main>
        <Heropage />
        <QRInterface />
        <MainTutorialSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;

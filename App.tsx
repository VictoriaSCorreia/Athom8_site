
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InnovationSection from './components/InnovationSection';
import ScenarioSection from './components/ScenarioSection';
import MethodologySection from './components/MethodologySection';
import SolutionsSection from './components/SolutionsSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950 font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InnovationSection />
        <ScenarioSection />
        <MethodologySection />
        <SolutionsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

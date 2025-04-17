import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel/Carousel';
import CreativeCarousel from './components/Carousel/CreativeCourosel';
import AboutSection from './components/AboutSection';
import Coolthings from './components/Coolthings';
import CreativeForever from './components/CreativeForever';
import AnimatedCircuit from './components/Animation/AnimatedCircuit';
import GlassMorphismCards from './components/glowingCards/GlassMorphismCards';
import WorkExperience from './components/WorkExperience';
import Products from './components/Products/Products';
import Emphasis from './components/Emphasis';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState("Formal");

  const toggleMode = () => {
    setMode((prev) => (prev === "Formal" ? "Creative" : "Formal"));
  };

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Hero mode={mode} />
      {mode === "Formal" ? <Carousel /> : <CreativeCarousel />}
      {mode === "Formal" ? <AboutSection /> : <Coolthings />}
      {mode === "Formal" ? <AnimatedCircuit /> : <CreativeForever />}
      <GlassMorphismCards />
      <WorkExperience />
      <Products />
      <Emphasis />
      <Contact />
    </>
  );
}

export default App;

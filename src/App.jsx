import { useState, useEffect } from 'react';
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
import Iscathulo from './components/Iscathulo';
import WorkExperience from './components/WorkExperience';
import DesignProducts from './components/Products/DesignProducts';
import Products from './components/Products/Products';
import Emphasis from './components/Emphasis';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState("Formal");

  // ✅ Preload images on mount
  useEffect(() => {
    const preloadImages = [
      "/THOKOZANI_PROFILE_pure_WHITE_BACKGROUND.png",
      "/corporate_punk_teekay.png"
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
      {mode === "Formal" ? <GlassMorphismCards />: <Iscathulo/>}
      {mode === "Formal" ? <WorkExperience />: <DesignProducts/>}
      <Products />
      <Emphasis />
      <Contact />
    </>
  );
}

export default App;


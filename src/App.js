import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
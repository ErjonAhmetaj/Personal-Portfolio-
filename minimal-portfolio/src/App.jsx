import React from 'react';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';



function App() {

  return (
      <div className='App'>
        <Intro />
        <Portfolio />
        <Footer />
        <Contact />
        <Timeline />

      </div>
  )
}

export default App

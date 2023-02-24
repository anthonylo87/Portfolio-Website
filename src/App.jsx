import { useState, useRef } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <SectionContainer>
          <NavBar aboutRef={aboutRef} skillsRef={skillsRef} />
        </SectionContainer>
        <SectionContainer>
          <About aboutRef={aboutRef} />
        </SectionContainer>
        <SectionContainer>
          <Skills skillsRef={skillsRef} />
        </SectionContainer>
      </MainContainer>
    </div>
  );
}

export default App;

import { useState, useRef } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import About from './pages/About';
import Experience from './pages/Experience';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const expRef = useRef(null);

  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <NavBar aboutRef={aboutRef} expRef={expRef} />
        <SectionContainer bgColor={`bg-raffia-400`}>
          <About aboutRef={aboutRef} />
        </SectionContainer>
        <SectionContainer bgColor={`bg-raffia-900`}>
          <Experience expRef={expRef} />
        </SectionContainer>
      </MainContainer>
    </div>
  );
}

export default App;

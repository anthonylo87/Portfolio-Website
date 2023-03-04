import { useState, useRef, useContext } from 'react';
import { appContext } from './providers/appProvider';
import MainContainer from './layouts/MainContainer';
import SectionContainer from './layouts/SectionContainer';
import DotNav from './components/DotNav';
import NavBar from './components/NavBar';
import Socials from './components/Socials';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const { appColor, handleScroll, aboutRef, expRef, projectRef, contactRef } =
    useContext(appContext);

  return (
    <div className='App flex flex-row justify-center text-xs md:text-sm'>
      <MainContainer>
        <DotNav />
        <Socials />
        <NavBar />
        <div
          className='h-screen snap-y snap-mandatory overflow-y-scroll'
          onScroll={handleScroll}
        >
          <SectionContainer bgColor={appColor[0].background} refProp={aboutRef}>
            <About id={0} />
          </SectionContainer>
          <SectionContainer
            bgColor={appColor[1].background}
            refProp={projectRef}
          >
            <Project id={1} />
          </SectionContainer>
          <SectionContainer
            bgColor={appColor[2].background}
            refProp={projectRef}
          >
            <Projects id={2} />
          </SectionContainer>
          <SectionContainer
            bgColor={appColor[3].background}
            refProp={contactRef}
          >
            <Contact id={3} />
          </SectionContainer>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;

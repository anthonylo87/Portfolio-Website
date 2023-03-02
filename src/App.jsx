import { useState, useRef, useContext } from 'react';
import { appContext } from './providers/appProvider';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import DotNav from './components/DotNav';
import NavBar from './Components/NavBar';
import Socials from './components/Socials';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const { appColor, handleScroll } = useContext(appContext);

  return (
    <div className='App flex flex-row justify-center text-xs md:text-sm'>
      <MainContainer>
        <DotNav />
        <Socials />
        <NavBar />
        <div
          className='h-screen snap-y snap-mandatory overflow-scroll'
          onScroll={handleScroll}
        >
          <SectionContainer bgColor={appColor[0].background}>
            <About id={0} />
          </SectionContainer>
          <SectionContainer bgColor={appColor[1].background}>
            <Experience id={1} />
          </SectionContainer>
          <SectionContainer bgColor={appColor[2].background}>
            <Projects id={2} />
          </SectionContainer>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;

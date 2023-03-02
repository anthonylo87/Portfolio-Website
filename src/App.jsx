import { useState, useRef } from 'react';
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
  const [color, setColor] = useState(`text-raffia-800`);
  const [selSection, setSelSection] = useState(0);

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const appColor = {
    0: {
      background: 'bg-raffia-400',
      textColor: 'text-raffia-900',
      borderColor: 'border-raffia-900',
      bgFill: 'bg-raffia-900',
    },
    1: {
      background: 'bg-raffia-900',
      textColor: 'text-raffia-200',
      borderColor: 'border-raffia-200',
      bgFill: 'bg-raffia-200',
    },
    2: {
      background: 'bg-nepal-200',
      textColor: 'text-nepal-900',
      borderColor: 'border-nepal-900',
      bgFill: 'bg-nepal-900',
    },
    3: {},
  };

  const changeColor = () => {
    let height = window.innerHeight;
    if (window.scrollY >= 2 * height) {
      setColor(appColor[2].textColor);
      setSelSection(2);
    } else if (window.scrollY >= height) {
      setColor(appColor[1].textColor);
      setSelSection(1);
    } else {
      setColor(appColor[0].textColor);
      setSelSection(0);
    }
  };

  function handleScroll(e) {
    const innerHeight = window.innerHeight;
    const scrollTop = e.currentTarget.scrollTop;

    if (scrollTop >= 2 * innerHeight) {
      setColor(appColor[2].textColor);
      setSelSection(2);
    } else if (scrollTop >= innerHeight) {
      setColor(appColor[1].textColor);
      setSelSection(1);
    } else {
      setColor(appColor[0].textColor);
      setSelSection(0);
    }
  }

  return (
    <div className='App flex flex-row justify-center text-xs md:text-sm'>
      <MainContainer>
        <DotNav
          selSection={selSection}
          borderColor={appColor[selSection].borderColor}
          bgFill={appColor[selSection].bgFill}
          aboutRef={aboutRef}
          expRef={expRef}
          projectRef={projectRef}
        />
        <Socials color={color} />
        <NavBar
          color={color}
          aboutRef={aboutRef}
          expRef={expRef}
          projectRef={projectRef}
        />
        <div
          onScroll={handleScroll}
          className='h-screen snap-y snap-mandatory overflow-scroll'
        >
          <SectionContainer bgColor={appColor[0].background}>
            <About
              aboutRef={aboutRef}
              id={0}
              selSection={selSection}
              appColor={appColor}
            />
          </SectionContainer>
          <SectionContainer bgColor={appColor[1].background}>
            <Experience
              expRef={expRef}
              id={1}
              selSection={selSection}
              appColor={appColor}
            />
          </SectionContainer>
          <SectionContainer bgColor={appColor[2].background}>
            <Projects
              projectRef={projectRef}
              id={2}
              selSection={selSection}
              appColor={appColor}
            />
          </SectionContainer>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;

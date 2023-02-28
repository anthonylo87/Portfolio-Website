import { useState, useRef } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import Socials from './components/Socials';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [color, setColor] = useState(`text-raffia-800`);
  const [selSection, setSelSection] = useState(1);

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const appColor = {
    1: {
      background: 'bg-raffia-400',
      textColor: 'text-raffia-900',
      borderColor: 'border-raffia-900',
    },
    2: {
      background: 'bg-raffia-900',
      textColor: 'text-raffia-200',
      borderColor: 'border-raffia-200',
    },
    3: {
      background: 'bg-nepal-200',
      textColor: 'text-nepal-900',
      borderColor: 'border-nepal-900',
    },
    4: {},
  };

  const changeColor = () => {
    let height = window.innerHeight;
    if (window.scrollY >= 2 * height) {
      setColor(appColor[3].textColor);
      setSelSection(3);
    } else if (window.scrollY >= height) {
      setColor(appColor[2].textColor);
      setSelSection(2);
    } else {
      setColor(appColor[1].textColor);
      setSelSection(1);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <Socials color={color} />
        <NavBar
          aboutRef={aboutRef}
          expRef={expRef}
          projectRef={projectRef}
          color={color}
        />
        <SectionContainer bgColor={appColor[1].background}>
          <About
            aboutRef={aboutRef}
            id={1}
            selSection={selSection}
            appColor={appColor}
          />
        </SectionContainer>
        <SectionContainer bgColor={appColor[2].background}>
          <Experience
            expRef={expRef}
            id={2}
            selSection={selSection}
            appColor={appColor}
          />
        </SectionContainer>
        <SectionContainer bgColor={appColor[3].background}>
          <Projects
            projectRef={projectRef}
            id={3}
            selSection={selSection}
            appColor={appColor}
          />
        </SectionContainer>
      </MainContainer>
    </div>
  );
}

export default App;

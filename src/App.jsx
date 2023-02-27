import { useState, useRef } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import Socials from './components/Socials';
import About from './pages/About';
import Experience from './pages/Experience';
import './App.css';

function App() {
  const [color, setColor] = useState(`text-raffia-800`);
  const [section, setSection] = useState(0);

  const aboutRef = useRef(null);
  const expRef = useRef(null);

  const changeColor = () => {
    let height = window.innerHeight;
    if (window.scrollY >= height) {
      setColor(`text-raffia-200`);
      setSection(1);
    } else {
      setColor(`text-raffia-800`);
      setSection(0);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <Socials color={color} />
        <NavBar aboutRef={aboutRef} expRef={expRef} color={color} />
        <SectionContainer bgColor={`bg-raffia-400`}>
          <About aboutRef={aboutRef} section={section} />
        </SectionContainer>
        <SectionContainer bgColor={`bg-raffia-900`}>
          <Experience expRef={expRef} />
        </SectionContainer>
      </MainContainer>
    </div>
  );
}

export default App;

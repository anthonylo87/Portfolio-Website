import { useState, useRef } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import Socials from './components/Socials';
import About from './pages/About';
import Experience from './pages/Experience';
import './App.css';

function App() {
  const [color, setColor] = useState('raffia-800');

  const aboutRef = useRef(null);
  const expRef = useRef(null);

  const changeColor = () => {
    let height = window.innerHeight;
    if (window.scrollY >= height) {
      setColor('raffia-200');
    } else {
      setColor('raffia-800');
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <Socials color={color} />
        <NavBar aboutRef={aboutRef} expRef={expRef} color={color} />
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

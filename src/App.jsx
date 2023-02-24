import { useState } from 'react';
import MainContainer from './Layouts/MainContainer';
import SectionContainer from './Layouts/SectionContainer';
import NavBar from './Components/NavBar';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className='App flex flex-row justify-center'>
      <MainContainer>
        <SectionContainer>
          <NavBar />
        </SectionContainer>
        <SectionContainer>
          <About />
        </SectionContainer>
      </MainContainer>
    </div>
  );
}

export default App;

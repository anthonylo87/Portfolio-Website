import { useState } from 'react';

function NavBar({ aboutRef, expRef, color }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = `text-` + color;

  return (
    <nav className={`fixed inset-x-0 top-0 w-full font-bold ` + textColor}>
      <div className='max-w-7xl m-auto flex flex-row justify-end'>
        <ul className='flex flex-row'>
          <button onClick={() => scrollIntoView(aboutRef)}>
            <li className='p-3'>01. About</li>
          </button>
          <button onClick={() => scrollIntoView(expRef)}>
            <li className='p-3'>02. Experience</li>
          </button>
          <li className='p-3'>03. Projects</li>
          <li className='p-3'>04. Contact</li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

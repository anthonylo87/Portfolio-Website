import { useState } from 'react';

function NavLink({ children, refType }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li className='p-3'>
      <button
        className='hover:underline hover:underline-offset-4'
        onClick={() => scrollIntoView(refType)}
      >
        {children}
      </button>
    </li>
  );
}

function NavBar({ aboutRef, expRef, projectRef, contactRef, color }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed inset-x-0 top-0 w-full font-bold ${color}`}>
      <div className='max-w-7xl m-auto flex flex-row justify-end'>
        <ul className='flex flex-row'>
          <NavLink refType={aboutRef}>01. About</NavLink>
          <NavLink refType={expRef}>02. Experience</NavLink>
          <NavLink refType={projectRef}>03. Projects</NavLink>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

import { useContext } from 'react';
import { appContext } from '../providers/appProvider';

function NavLink({ children, refType }) {
  const { scrollIntoView } = useContext(appContext);

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

function NavBar() {
  const { aboutRef, expRef, projectRef, contactRef, color, scrollIntoView } =
    useContext(appContext);

  return (
    <nav className={`fixed inset-x-0 top-0 w-full font-bold ${color}`}>
      <div className='max-w-7xl m-auto flex flex-row justify-center lg:justify-end'>
        <ul className='flex flex-row'>
          <NavLink refType={aboutRef}>01. About</NavLink>
          <NavLink refType={expRef}>02. Experience</NavLink>
          <NavLink refType={projectRef}>03. Projects</NavLink>
          <NavLink refType={contactRef}>04. Contact</NavLink>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

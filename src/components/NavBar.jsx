import { useContext } from 'react';
import { appContext } from '../providers/appProvider';

function NavLink({ id, children, refType }) {
  const { scrollIntoView, selSection } = useContext(appContext);

  return (
    <li className='p-3'>
      <button
        className={`hover:underline hover:underline-offset-4 ${
          id === selSection ? `underline underline-offset-4` : ``
        }`}
        onClick={() => scrollIntoView(refType)}
      >
        {children}
      </button>
    </li>
  );
}

function NavBar() {
  const { aboutRef, expRef, projectRef, contactRef, color } =
    useContext(appContext);

  return (
    <nav className={`fixed inset-x-0 top-0 w-full font-bold ${color}`}>
      <div className='max-w-7xl m-auto flex flex-row justify-center lg:justify-end'>
        <ul className='flex flex-row'>
          <NavLink id={0} refType={aboutRef}>
            01. About
          </NavLink>
          <NavLink id={1} refType={expRef}>
            02. Experience
          </NavLink>
          <NavLink id={2} refType={projectRef}>
            03. Projects
          </NavLink>
          <NavLink id={3} refType={contactRef}>
            04. Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

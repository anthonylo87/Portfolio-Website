function NavBar({ aboutRef, skillsRef }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <nav className='fixed top-0 w-screen max-w-[1260px] flex flex-row justify-end'>
      <ul className='flex flex-row'>
        <button onClick={() => scrollIntoView(aboutRef)}>
          <li className='p-3'>1. About</li>
        </button>
        <button onClick={() => scrollIntoView(skillsRef)}>
          <li className='p-3'>2. Skills</li>
        </button>
        <li className='p-3'>3. Projects</li>
        <li className='p-3'>4. Contact</li>
      </ul>
    </nav>
  );
}
export default NavBar;

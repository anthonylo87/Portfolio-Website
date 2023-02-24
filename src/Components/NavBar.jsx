function NavBar({ aboutRef, skillsRef }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <nav className='fixed top-0 w-screen max-w-[1260px] flex flex-row justify-end font-bold'>
      <ul className='flex flex-row'>
        <button onClick={() => scrollIntoView(aboutRef)}>
          <li className='p-3'>01. About</li>
        </button>
        <button onClick={() => scrollIntoView(skillsRef)}>
          <li className='p-3'>02. Experience</li>
        </button>
        <li className='p-3'>03. Projects</li>
        <li className='p-3'>04. Contact</li>
      </ul>
    </nav>
  );
}
export default NavBar;

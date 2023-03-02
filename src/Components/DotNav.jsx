function Dot({ bgFill, borderColor, id, selSection, refType }) {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={() => scrollIntoView(refType)}
      className={`border-2 rounded-full w-3 h-3 my-2 ${borderColor} ${
        id === selSection && bgFill
      } ${id !== selSection && `hover:animate-ping hover:duration-900`}`}
    ></button>
  );
}

function DotNav({
  selSection,
  borderColor,
  bgFill,
  aboutRef,
  expRef,
  projectRef,
}) {
  return (
    <nav className='fixed inset-y-0 left-6 flex flex-col justify-center invisible lg:visible'>
      <Dot
        id={0}
        selSection={selSection}
        bgFill={bgFill}
        borderColor={borderColor}
        refType={aboutRef}
      />
      <Dot
        id={1}
        selSection={selSection}
        bgFill={bgFill}
        borderColor={borderColor}
        refType={expRef}
      />
      <Dot
        id={2}
        selSection={selSection}
        bgFill={bgFill}
        borderColor={borderColor}
        refType={projectRef}
      />
      <Dot
        id={3}
        selSection={selSection}
        bgFill={bgFill}
        borderColor={borderColor}
      />
    </nav>
  );
}
export default DotNav;

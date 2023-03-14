import { useContext } from 'react';
import { appContext } from '../providers/appProvider';

function Dot({ id, refType }) {
  const { selSection, appColor, scrollIntoView } = useContext(appContext);

  const bgFill = appColor[selSection].bgFill;
  const borderColor = appColor[selSection].borderColor;

  return (
    <button
      onClick={() => scrollIntoView(refType)}
      className={`border-2 rounded-full w-3 h-3 my-2 ${borderColor} ${
        id === selSection && bgFill
      } ${id !== selSection && `hover:animate-ping hover:duration-900`}`}
    ></button>
  );
}

function DotNav() {
  const { aboutRef, expRef, projectRef, contactRef } = useContext(appContext);

  return (
    <nav className='fixed inset-y-0 left-6 flex flex-col justify-center invisible lg:visible'>
      <Dot id={0} refType={aboutRef} />
      <Dot id={1} refType={expRef} />
      <Dot id={2} refType={projectRef} />
      <Dot id={3} refType={contactRef} />
    </nav>
  );
}
export default DotNav;

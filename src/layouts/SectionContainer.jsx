import { useContext } from 'react';
import { appContext } from '../providers/appProvider';

function SectionContainer({ children, bgColor, refProp, id }) {
  const { appColor } = useContext(appContext);

  return (
    <>
      <section
        className={`h-screen w-screen flex flex-col justify-center snap-start snap-always ${bgColor}`}
        ref={refProp}
      >
        <div
          className={`w-full lg:w-5/6 max-w-screen-2xl max-h-[75vh] overflow-y-scroll no-scrollbar m-auto ${appColor[id].textColor}`}
        >
          {children}
        </div>
      </section>
    </>
  );
}
export default SectionContainer;

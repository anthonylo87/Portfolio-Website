import { useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../layouts/SectionBorder';
import profileUrl from '../images/profile.jpeg';

function About({ id }) {
  const { aboutRef, selSection, appColor } = useContext(appContext);

  return (
    <div
      className={`w-full lg:w-5/6 max-w-screen-xl m-auto ${appColor[id].textColor}`}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. About`}
        orientation={`left`}
        appColor={appColor}
      >
        <div className='flex flex-col md:flex-row md:gap-6'>
          <div
            className={`my-auto text-justify w-full max-w-xl lg:w-1/2 lg:mx-4 lg:px-6 ${
              selSection === id ? `motion-safe:animate-fadeUp` : ``
            }`}
          >
            <h3 className='font-bold text-4xl'>
              Hi, I'm... <br />
              <strong className='font-bold text-5xl xl:text-8xl bg-gradient-to-r from-beaver-700 via-nepal-600 to-nepal-500 text-transparent bg-clip-text'>
                {' '}
                Anthony.
              </strong>
            </h3>
            <p>
              <br />
              <strong className='text-2xl'>I'm a full stack developer.</strong>
              <br />
              <br />
              Most recently I co-developed a product called DenoGres &#40;open
              source&#41;, an ORM tool built for PostgreSQL for use with the
              Deno runtime.
              <br />
              <br />
              My previous background is in utilizing data warehousing solutions
              and building out business intelligence tools, having spent over 7
              years as a senior analyst at various companies.
              <br />
              <br />
              When I'm not coding, you can find me traveling the world,
              exploring pour over coffee shops in the LA area, and pouring latte
              art!
            </p>
          </div>
          <div className='mx-auto my-auto invisible md:visible '>
            <img
              className='mx-auto rounded-full w-0 md:min-w-[350px] md:w-[350px]'
              src={profileUrl}
              alt='profile picture'
            />
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default About;

import SectionBorder from '../Layouts/SectionBorder';

function About({ aboutRef, id, selSection, appColor }) {
  return (
    <div
      className={`h-full flex max-w-screen-xl m-auto ${appColor[id].textColor}`}
      ref={aboutRef}
    >
      <SectionBorder
        id={id}
        header={`${String(id).padStart(2, '0')}. About`}
        orientation={`left`}
        appColor={appColor}
      >
        <div className='flex flex-row'>
          <div
            className={
              'my-auto mx-4 text-justify w-1/2' +
              (selSection === id && ' motion-safe:animate-fadeIn')
            }
          >
            <h3 className='font-bold text-4xl'>
              Hi, I'm... <br />
              <strong className='font-bold text-8xl bg-gradient-to-r from-beaver-700 via-nepal-600 to-nepal-500 text-transparent bg-clip-text'>
                &nbsp; Anthony.
              </strong>
            </h3>
            <p>
              <br />
              <strong>
                I'm a full stack developer currently living in Los Angeles,
                California.
              </strong>
              <br />
              <br />
              Most recently I co-developed a product called DenoGres &#40;open
              source&#41;, an object relational mapper built for PostgreSQL for
              use with Deno runtime.
              <br />
              <br />
              My previous background is in utilizing data warehousing solutions
              and building out business intelligence tools, having spent over 7
              years at various companies as a senior analyst.
              <br />
              <br />
              When I'm not coding, you can find me traveling the world,
              exploring pour over coffee shops in the LA area, and pouring latte
              art!
            </p>
          </div>
          <div className='w-1/2 my-auto'>
            <img
              className='mx-auto rounded-full'
              src='src/images/Profile.jpeg'
              width={400}
              alt='profile picture'
            />
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default About;

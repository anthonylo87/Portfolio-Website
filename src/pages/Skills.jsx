function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} className='text-left w-full'>
      <div>
        <h2 className='font-bold text-4xl py-3'>Skills</h2>
        <div className='flex flex-row'>
          <div className='pr-3 w-1/2'>
            <p>
              I'm a full stack developer currently living in Los Angeles,
              California.
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
              When I'm not coding, you can find me traveling the world &#40;most
              recently got married in Italy&#41; , exploring pour over shops in
              the LA area , and tinkering with my espresso machine!
            </p>
          </div>
          <div className='w-96'>
            <img src='src/images/Profile.jpeg' alt='profile picture' />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;

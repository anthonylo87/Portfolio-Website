function About() {
  return (
    <section className='text-left w-full'>
      <div className='flex flex-row'>
        <div>
          <h2 className='font-bold text-4xl'>Hi, I'm Anthony.</h2>
          <br />
          <hr className='border-nepal-900' />
          <br />
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
            During my tenure I led the end-to-end implementation of a new
            financial ERP system over a three month time span, drafting user
            stories, implementing and ultimately testing over 75 features during
            that time period. My prior experience includes serving as primary
            business partner to various C-suite executives &#40;CFO, COO, Chief
            People Officer&#41; as well. When I'm not coding, you can find me
            traveling the world &#40;most recently got married in Italy&#41; ,
            exploring pour over shops in the LA area , and tinkering with my
            espresso machine!
          </p>
        </div>
        <div>
          <img src='src/images/Profile.jpeg' alt='profile picture' />
        </div>
      </div>
    </section>
  );
}
export default About;

function SectionContainer({ children, bgColor }) {
  return (
    <>
      {/*
      mult-line
      test
    */}
      <section
        className={`h-screen w-screen flex flex-col justify-center snap-start ${bgColor}`}
      >
        {children}
      </section>
    </>
  );
}
export default SectionContainer;

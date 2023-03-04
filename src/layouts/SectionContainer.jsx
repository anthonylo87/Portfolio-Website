function SectionContainer({ children, bgColor, refProp }) {
  return (
    <>
      {/*
      mult-line
      test
    */}
      <section
        className={`h-screen w-screen flex flex-col justify-center snap-start snap-always ${bgColor}`}
        ref={refProp}
      >
        {children}
      </section>
    </>
  );
}
export default SectionContainer;

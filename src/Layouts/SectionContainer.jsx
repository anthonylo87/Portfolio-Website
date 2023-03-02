function SectionContainer({ children, bgColor }) {
  return (
    <>
      {/*
      mult-line
      test
    */}
      <section className={`h-screen w-screen snap-start ${bgColor}`}>
        {children}
      </section>
    </>
  );
}
export default SectionContainer;

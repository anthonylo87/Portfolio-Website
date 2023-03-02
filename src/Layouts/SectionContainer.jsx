function SectionContainer({ children, bgColor }) {
  return (
    <div className='w-screen h-screen snap-start'>
      <section className={`h-full w-full ${bgColor}`}>{children}</section>
    </div>
  );
}
export default SectionContainer;

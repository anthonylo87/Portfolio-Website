function SectionContainer({ children, bgColor }) {
  return <section className={`h-screen ` + bgColor}>{children}</section>;
}
export default SectionContainer;

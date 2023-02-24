function SectionBorder({ children, header, aboutRef }) {
  return (
    <div className='h-full flex' ref={aboutRef}>
      <div className='text-left w-full h-min my-auto'>
        <div>
          <div className='flex flex-row'>
            <div className='my-auto mx-4 w-full text-justify'>
              <div className='flex flex-row'>
                <h2 className='font-bold'>{header}</h2>
                <div className='grow flex flex-row'>
                  <div className='w-1/2'>
                    <hr className='my-3 border-raffia-700 mx-3' />
                  </div>
                </div>
              </div>
              <div className='border-l border-raffia-700 my-2 p-8'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionBorder;

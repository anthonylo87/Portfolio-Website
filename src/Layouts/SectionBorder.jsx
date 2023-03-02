function SectionBorder({
  id,
  selSection,
  children,
  header,
  orientation,
  appColor,
}) {
  return (
    <div className='h-5/6 m:h-4/6 my-auto'>
      <div className='text-left w-full h-full flex flex-col justify-center my-auto lg:p-16'>
        <div>
          <div className='flex flex-row'>
            <div className='my-auto mx-8 w-full text-justify'>
              <div
                className={
                  `flex flex-row py-2 lg:py-0` +
                  (orientation === 'right' ? ` justify-end` : ``)
                }
              >
                {orientation === 'right' && (
                  <div className='w-full lg:w-1/2'>
                    <hr
                      className={`my-3 mx-3 opacity-0 ${
                        id === selSection
                      } ${id} ${selSection} ${
                        id === selSection
                          ? `motion-safe:animate-fadeIn`
                          : `false`
                      } ${appColor[id].borderColor}`}
                    />
                  </div>
                )}
                <div className='flex flex-col justify-center'>
                  <h2
                    className={`font-bold opacity-0 ${
                      id === selSection ? `motion-safe:animate-fadeIn` : ``
                    }`}
                  >
                    {header}
                  </h2>
                </div>
                {orientation === 'left' && (
                  <div className='grow lg:w-1/2'>
                    <hr
                      className={`my-3 mx-3 opacity-0 ${id === selSection} ${
                        id === selSection ? `motion-safe:animate-fadeIn` : ``
                      } ${appColor[id].borderColor}`}
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  `lg:my-1 xl:p-8 opacity-0 ${appColor[id].borderColor} ${
                    id === selSection ? `motion-safe:animate-fadeIn` : ``
                  } ` + (orientation === `left` ? `lg:border-l` : `lg:border-r`)
                }
              >
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

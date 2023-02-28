function SectionBorder({
  id,
  selSection,
  children,
  header,
  orientation,
  appColor,
}) {
  return (
    <div className='h-min my-auto'>
      <div className='text-left w-full my-auto'>
        <div>
          <div className='flex flex-row'>
            <div className='my-auto mx-4 w-full text-justify'>
              <div
                className={
                  `flex flex-row` +
                  (orientation === 'right' ? ` justify-end` : ``)
                }
              >
                {orientation === 'right' && (
                  <div className='w-1/2 '>
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
                <h2
                  className={`font-bold opacity-0 ${
                    id === selSection ? `motion-safe:animate-fadeIn` : ``
                  }`}
                >
                  {header}
                </h2>
                {orientation === 'left' && (
                  <div className='w-1/2'>
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
                  `my-2 p-8 opacity-0 ${appColor[id].borderColor} ${
                    id === selSection ? `motion-safe:animate-fadeIn` : ``
                  } ` + (orientation === `left` ? `border-l` : `border-r`)
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

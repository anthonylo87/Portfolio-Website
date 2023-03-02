function SectionBorder({
  id,
  selSection,
  children,
  header,
  orientation,
  appColor,
}) {
  let animateBorder =
    orientation === 'left'
      ? 'motion-safe:animate-fadeBorderLeft'
      : 'motion-safe:animate-fadeBorderRight';

  return (
    <div className='h-5/6 m:h-4/6 my-auto'>
      <div className='text-left w-full h-full flex flex-col lg:justify-center my-auto lg:p-16'>
        <div className='flex flex-row'>
          <div className='my-auto mx-8 w-full text-justify'>
            <div
              className={`flex flex-row py-2 lg:py-0 ${
                id === selSection ? animateBorder : ``
              } ${orientation === 'right' && `justify-end`}`}
            >
              <div
                className={`flex flex-col justify-center ${
                  orientation === 'right' && ` order-2`
                }`}
              >
                <h2
                  className={`font-bold opacity-0 ${
                    id === selSection ? animateBorder : ``
                  }`}
                >
                  {header}
                </h2>
              </div>
              <div
                className={`grow lg:w-1/2 ${
                  orientation === 'right' && `order-1`
                }`}
              >
                <hr
                  className={`my-3 mx-3 opacity-0 ${id === selSection} ${
                    id === selSection ? animateBorder : ``
                  } ${appColor[id].borderColor}`}
                />
              </div>
            </div>
            <div
              className={
                `flex flex-col gap-8 lg:my-1 lg:p-8 opacity-0 animation-delay-900 ${
                  appColor[id].borderColor
                } ${
                  id === selSection ? `motion-safe:animate-fadeBorderUp` : ``
                } ` + (orientation === `left` ? `lg:border-l` : `lg:border-r`)
              }
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionBorder;

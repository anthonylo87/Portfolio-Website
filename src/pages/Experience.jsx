import { useState, useEffect, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';
// import { skillSet } from '../data/skills';
import { skillSet } from '../data/skills';

function Experience({ id }) {
  const { expRef, selSection, appColor } = useContext(appContext);

  return (
    <div
      className={`w-full lg:w-5/6 max-w-screen-xl m-auto ${appColor[id].textColor}`}
      ref={expRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Experience`}
        orientation={`right`}
        appColor={appColor}
      >
        <h3 className='font-bold text-4xl my-auto text-left'>
          My Professional Experience <br />
        </h3>
        <p className='text-xl'>
          For a full listing of my qualifications and experience, you can view
          and download my resume{' '}
          <a
            className='font-bold underline underline-offset-4'
            href='https://drive.google.com/file/d/18hyhi-U8bVX1LwNpbqyv67iWhWoVeR59/view?usp=share_link'
          >
            HERE.
          </a>
        </p>
        <div className={`border ${appColor[id].borderColor} p-4 lg:p-6`}>
          <h2 className='mb-4 text-lg font-bold'>Technologies I Work With</h2>
          <div className='flex flex-row justify-center'>
            <ul className='h-[300px] overflow-y-scroll grid grid-cols-2 p-4 gap-8 md:grid-cols-6 lg:gap-x-6 lg: gap-y-2 lg:overflow-y-hidden'>
              {skillSet.map((item, index) => (
                <li className='relative' key={index}>
                  <div
                    className={`absolute top-0 left -0 w-2/6 h-full hover:border-t-2 hover:${appColor[id].borderColor}`}
                  ></div>
                  <a
                    className='text-[2rem] flex flex-col gap-3 content-center my-4'
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.icon()}
                    <span className='text-xs text-left'>{item.spanText}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Experience;

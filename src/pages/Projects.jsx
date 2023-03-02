import { useState, useEffect, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';

function Projects({ id }) {
  const { projectRef, selSection, appColor } = useContext(appContext);

  return (
    <div
      className={`max-w-screen-2xl m-auto ${appColor[id].textColor}`}
      ref={projectRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Projects`}
        orientation={`left`}
        appColor={appColor}
      >
        <div className='mx-0 md:w-[600px] lg:w-[1200px]'>
          <div className='w-full flex flex-col gap-4 lg:overflow-y-hidden gap-4 lg:my-10'>
            <h3 className='font-bold text-4xl text-justify'>
              Featured Projects
            </h3>
            <div className='h-[500px] overflow-y-scroll md:overflow-y-hidden md:flex md:flex-row'>
              <ProjectCard id={id} src='src/images/denogres.gif' />
              <ProjectCard id={id} src='src/images/axolotlbeats.png' />
              <ProjectCard id={id} src='src/images/codepears.png' />
            </div>
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Projects;

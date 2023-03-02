import { useState, useEffect } from 'react';
import SectionBorder from '../Layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';

function Projects({ projectRef, id, selSection, appColor }) {
  return (
    <div
      className={`h-full flex flex-col max-w-screen-2xl m-auto ${appColor[id].textColor}`}
      ref={projectRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Projects`}
        orientation={`left`}
        appColor={appColor}
      >
        <h3 className='font-bold text-4xl my-auto mx-4 text-justify'>
          Featured Projects
        </h3>
        <div className='w-full flex flex-row gap-4 my-6 mx-4'>
          <ProjectCard
            id={id}
            appColor={appColor}
            src='src/images/denogres.gif'
          />
          <ProjectCard
            id={id}
            appColor={appColor}
            src='src/images/axolotlbeats.png'
          />
          <ProjectCard
            id={id}
            appColor={appColor}
            src='src/images/codepears.png'
          />
        </div>
      </SectionBorder>
    </div>
  );
}
export default Projects;

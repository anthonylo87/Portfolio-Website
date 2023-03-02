import { useState, useEffect, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';

function Projects({ id }) {
  const { projectRef, selSection, appColor } = useContext(appContext);

  const [currProj, setCurrProj] = useState(null);

  return (
    <div
      className={`w-5/6 max-w-screen-2xl m-auto ${appColor[id].textColor}`}
      ref={projectRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Projects`}
        orientation={`left`}
        appColor={appColor}
      >
        <div className='mx-0'>
          <div className='w-full flex flex-col gap-4 lg:overflow-y-hidden gap-4 lg:my-10'>
            <h3 className='font-bold text-4xl text-justify'>
              Featured Projects
            </h3>
            <div className='h-[400px] overflow-y-scroll lg:overflow-y-hidden lg:flex lg:flex-row lg:h-full'>
              <ProjectCard
                id={id}
                projID={1}
                currProj={currProj}
                setCurrProj={setCurrProj}
                src='src/images/denogres.png'
              />
              <ProjectCard
                id={id}
                currProj={currProj}
                setCurrProj={setCurrProj}
                projID={2}
                src='src/images/axolotlbeats.png'
              />
              <ProjectCard
                id={id}
                projID={3}
                currProj={currProj}
                setCurrProj={setCurrProj}
                src='src/images/codepears.png'
              />
            </div>
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Projects;

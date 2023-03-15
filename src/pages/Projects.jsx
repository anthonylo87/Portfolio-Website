import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';
import { projDescriptions } from '../data/projects.js';
import denogresUrl from '../images/denogres_ipadmini_spacegrey_landscape.png';
import portfolioUrl from '../images/portfolio_ipadmini_spacegrey_landscape.png';
import axolotlbeatsUrl from '../images/axolotl_ipadmini_spacegrey_landscape.png';
import codepearsUrl from '../images/codepears_ipadmini_spacegrey_landscape.png';

function Projects({ id }) {
  const { selSection, appColor } = useContext(appContext);
  const [currProj, setCurrProj] = useState(null);

  return (
    <SectionBorder
      id={id}
      selSection={selSection}
      header={`${String(id + 1).padStart(2, '0')}. Projects`}
      orientation={`left`}
      appColor={appColor}
    >
      <div className='w-full flex flex-col gap-8'>
        <h3 className='font-bold text-2xl lg:text-4xl text-justify'>
          Featured Projects
        </h3>
        <div className='h-[500px] overflow-y-scroll no-scrollbar flex flex-col gap-4'>
          <ProjectCard
            id={id}
            projID={0}
            currProj={currProj}
            setCurrProj={setCurrProj}
            projDescriptions={projDescriptions}
            src={denogresUrl}
          />
          <ProjectCard
            id={id}
            projID={1}
            currProj={currProj}
            setCurrProj={setCurrProj}
            projDescriptions={projDescriptions}
            src={portfolioUrl}
          />
          <ProjectCard
            id={id}
            projID={2}
            currProj={currProj}
            setCurrProj={setCurrProj}
            projDescriptions={projDescriptions}
            src={axolotlbeatsUrl}
          />
          <ProjectCard
            id={id}
            projID={3}
            currProj={currProj}
            setCurrProj={setCurrProj}
            projDescriptions={projDescriptions}
            src={codepearsUrl}
          />
        </div>
      </div>
    </SectionBorder>
  );
}
export default Projects;

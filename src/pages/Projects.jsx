import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';
import denogresUrl from '../images/denogres_ipadmini_spacegrey_landscape.png';
import portfolioUrl from '../images/portfolio_ipadmini_spacegrey_landscape.png';
import axolotlbeatsUrl from '../images/axolotl_ipadmini_spacegrey_landscape.png';
import codepearsUrl from '../images/codepears_ipadmini_spacegrey_landscape.png';

function Projects({ id }) {
  const { selSection, appColor } = useContext(appContext);
  const [currProj, setCurrProj] = useState(null);

  const projDescriptions = [
    {
      name: 'DenoGres',
      description:
        'An open source ORM tool used with Postgres and the Deno runtime',
      link1: ['Github', 'https://github.com/anthonylo87/DenoGres'],
      link2: [
        'Medium',
        'https://medium.com/@cvinsb/denogres-2-0-unleashed-37265baf571a',
      ],
    },
    {
      name: 'My Portfolio Website',
      description:
        'My personal page, showcasing projects that i have worked on',
      link1: ['Github', 'https://github.com/anthonylo87/Portfolio-Website'],
      link2: ['', ''],
    },
    {
      name: 'Axolotl Beats',
      description:
        'A playlist generator utilizing the spotify API to customize recommendations',
      link1: ['Github', 'https://github.com/anthonylo87/Axolotl-Beats'],
      link2: ['', ''],
    },
    {
      name: 'CodePears',
      description: 'A platform used to meet and connect with other engineers',
      link1: ['', ''],
      link2: ['', ''],
    },
  ];

  return (
    <SectionBorder
      id={id}
      selSection={selSection}
      header={`${String(id + 1).padStart(2, '0')}. Projects`}
      orientation={`left`}
      appColor={appColor}
    >
      <div className='mx-0'>
        <div className='w-full flex flex-col gap-8 lg:overflow-y-hidden'>
          <h3 className='font-bold text-2xl lg:text-4xl text-justify'>
            Featured Projects
          </h3>
          <div className='overflow-y-scroll lg:overflow-y-hidden lg:grid lg:grid-cols-2 lg:h-full lg:gap-4 lg:max-w-[750px]'>
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
      </div>
    </SectionBorder>
  );
}
export default Projects;

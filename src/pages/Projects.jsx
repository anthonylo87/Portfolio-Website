import { useState, useEffect, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';
import ProjectCard from '../components/ProjectCard';

function Projects({ id }) {
  const { projectRef, selSection, appColor } = useContext(appContext);
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
    <div
      className={`w-full lg:w-5/6 max-w-screen-2xl m-auto ${appColor[id].textColor}`}
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
                projID={0}
                currProj={currProj}
                setCurrProj={setCurrProj}
                projDescriptions={projDescriptions}
                src='src/images/denogres.png'
              />
              <ProjectCard
                id={id}
                projID={1}
                currProj={currProj}
                setCurrProj={setCurrProj}
                projDescriptions={projDescriptions}
                src='src/images/axolotlbeats.png'
              />
              <ProjectCard
                id={id}
                projID={2}
                currProj={currProj}
                setCurrProj={setCurrProj}
                projDescriptions={projDescriptions}
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

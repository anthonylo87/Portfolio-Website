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
        'An open source ORM tool used with Postgres and the Deno runtime. Deployed as a Deno package (similar to npm), DenoGres generates class representations of postgres tables within a schema, allowing developers to interact and query database tables utilizing javascript objects/methods. Also includes a query GUI that can be accessed via CLI command, which allows users to run/test queries built on DenoGres.',
      tags: [
        'Typescript',
        'Fresh.js',
        'React',
        'Tailwind',
        'Deno',
        'JWT/Authentication',
        'PostgreSQL',
      ],
      link1: ['Github', 'https://github.com/anthonylo87/DenoGres'],
      link2: [
        'Medium',
        'https://medium.com/@cvinsb/denogres-2-0-unleashed-37265baf571a',
      ],
    },
    {
      name: 'My Portfolio Website',
      description:
        'My personal page, showcasing projects that i have worked on. Includes a bio section with information about me and my background, core technologies that I have previously utilized, some key projects that I want to highlight, and my contact information. I opted to use Vite instead of Webpack to bundle (faster server start) and employ CI/CD to deploy to GH pages.',
      tags: ['React', 'Tailwind', 'Github Actions', 'Vite'],
      link1: ['Github', 'https://github.com/anthonylo87/Portfolio-Website'],
      link2: ['', ''],
    },
    {
      name: 'Axolotl Beats',
      description:
        'A playlist generator utilizing the spotify API to customize recommendations. Users input data relating to their playlist (total duration, number of sections, genre, bpm, etc.) and a custom algoritm generates a track listing which matches those criteria.',
      tags: [
        'React',
        'Node',
        'Express',
        'Material-UI',
        'PostgreSQL',
        'Webpack',
      ],
      link1: ['Github', 'https://github.com/anthonylo87/Axolotl-Beats'],
      link2: ['', ''],
    },
    {
      name: 'CodePears',
      description:
        'A platform used to meet and connect with other engineers. Users can create listings, view listings, and join listings created by other users.Users can also view their profiles to make changes to existing listings or cancel their exsiting listings',
      tags: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
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
        <div className='w-full flex flex-col gap-8'>
          <h3 className='font-bold text-2xl lg:text-4xl text-justify'>
            Featured Projects
          </h3>
          <div className='overflow-y-scroll lg:overflow-y-hidden flex flex-col gap-4'>
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

import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';

function ProjectCard({
  src,
  id,
  projID,
  currProj,
  setCurrProj,
  projDescriptions,
}) {
  const { appColor } = useContext(appContext);

  const handleClick = (e) => {
    if (currProj === projID) {
      setCurrProj(null);
    } else {
      setCurrProj(projID);
    }
  };

  const Card = ({ children }) => {
    return (
      <span className='my-1 display: inline-block px-1 mx-1 bg-nepal-700 text-white font-bold'>
        {children}
      </span>
    );
  };

  const Button = ({ description, link }) => {
    return (
      <a
        className='display: inline-block text-white bg-nepal-900 p-2 hover:underline hover:underline-offset-4'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {description}
      </a>
    );
  };

  return (
    <div className='flex flex-col gap-6 lg:flex-row'>
      <img
        loading='lazy'
        alt={`${projDescriptions[projID].name} picture`}
        src={src}
        className={`h-[210px] md:h-[430px] w-auto m-auto ${
          projID !== currProj ? `` : `bg-nepal-900 opacity-90`
        }`}
      ></img>
      <div
        className={`md:text-sm flex flex-col gap-8 my-4 p-8 border grow ${appColor[id].borderColor}`}
      >
        <h3 className='text-md lg:text-xl font-bold'>
          {projDescriptions[projID].name}
        </h3>
        <p>{projDescriptions[projID].description}</p>
        <p className='whitespace-normal'>
          <span className='font-bold display: inline-block'>
            Technologies used:
          </span>
          {projDescriptions[projID].tags.map((ele) => (
            <Card>{ele}</Card>
          ))}
        </p>
        <div className='flex flex-row gap-2 lg:gap-4 font-bold'>
          {projDescriptions[projID].link1[0] && (
            <Button
              description={projDescriptions[projID].link1[0]}
              link={projDescriptions[projID].link1[1]}
            />
          )}
          {projDescriptions[projID].link2[0] && (
            <Button
              description={projDescriptions[projID].link2[0]}
              link={projDescriptions[projID].link2[1]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

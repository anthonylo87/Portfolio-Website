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

  const bgImageSrc = {
    backgroundImage: projID !== currProj ? `url(${src})` : `none`,
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
      style={bgImageSrc}
      className={`h-[200px] bg-cover w-full my-4 lg:mx-2 lg:w-5/6 md:h-[400px] lg:h-[300px] ${
        projID !== currProj ? `` : `bg-nepal-900 opacity-90`
      }`}
    >
      <div
        className={`text-xs lg:text-md flex flex-col h-full gap-8 text-center text-white justify-center p-16 ${
          projID !== currProj ? `invisible` : `visible`
        }`}
      >
        <h3 className='text-md lg:text-xl font-bold'>
          {projDescriptions[projID].name}
        </h3>
        <p>{projDescriptions[projID].description}</p>
        <span className='font-bold mt-2'>
          {projDescriptions[projID].link1[0] && (
            <a
              className={`border border-white p-2 mx-2`}
              href={projDescriptions[projID].link1[1]}
            >
              {projDescriptions[projID].link1[0]}
            </a>
          )}
          {projDescriptions[projID].link2[0] && (
            <a
              className='border border-white p-2 m-2'
              href={projDescriptions[projID].link2[1]}
            >
              {projDescriptions[projID].link2[0]}
            </a>
          )}
        </span>
      </div>
    </div>
  );
}
export default ProjectCard;

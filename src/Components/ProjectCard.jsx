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
      className={`h-[300px] bg-cover w-full g:m-2 md:h-[375px] lg:h-full max-h-[300px] p-3 ${
        projID !== currProj ? `` : `bg-nepal-900 opacity-90`
      }`}
    >
      <div
        className={`text-base flex flex-col gap-8 text-center text-white justify-center p-16 ${
          projID !== currProj
            ? `invisible`
            : `visible motion-safe:animate-fadeIn`
        }`}
      >
        <h3 className='text-md lg:text-xl font-bold'>
          {projDescriptions[projID].name}
        </h3>
        <p>{projDescriptions[projID].description}</p>
        <span className='font-bold mt-2'>
          {projDescriptions[projID].link1[0] && (
            <a
              className='border border-white p-2 mx-2 hover:bg-white hover:text-nepal-900'
              href={projDescriptions[projID].link1[1]}
            >
              {projDescriptions[projID].link1[0]}
            </a>
          )}
          {projDescriptions[projID].link2[0] && (
            <a
              className='border border-white p-2 m-2 hover:bg-white hover:text-nepal-900'
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

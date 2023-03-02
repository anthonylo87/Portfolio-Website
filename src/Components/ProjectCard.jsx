import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';

function ProjectCard({ src, id, projID, currProj, setCurrProj, title, links }) {
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
    />
  );
}
export default ProjectCard;

import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';

function ProjectCard({ src, id }) {
  const { appColor } = useContext(appContext);

  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={`h-[300px] bg-cover w-full my-2 md:my-0 lg:w-5/6 lg:m-2`}
    />
  );
}
export default ProjectCard;

import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';

function ProjectCard({ src, id }) {
  const { appColor } = useContext(appContext);

  const [hover, setHover] = useState(false);

  return (
    <img
      src={src}
      alt='test picture'
      className={`lg:h-[250px] xl:h-[350px] aspect-auto border ${appColor[id].borderColor} p-2`}
    />
  );
}
export default ProjectCard;

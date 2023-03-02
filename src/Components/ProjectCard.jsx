import { useState } from 'react';

function ProjectCard({ src, id, appColor }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className='min-w-min h-full relative'
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div></div>
      {hover && (
        <>
          <div className='text-center text-2xl font-bold text-slate-200 w-full py-3 absolute top-5 z-10 '>
            Project Title
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-slate-700 opacity-90'></div>
        </>
      )}
      <img
        src={src}
        alt='test picture'
        className={`lg: h-[250px] xl:h-[350px] aspect-auto border ${appColor[id].borderColor} p-2`}
      />
    </div>
  );
}
export default ProjectCard;

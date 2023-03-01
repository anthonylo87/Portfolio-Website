import { useState, useEffect } from 'react';
import SectionBorder from '../Layouts/SectionBorder';

function Projects({ projectRef, id, selSection, appColor }) {
  return (
    <div
      className={`h-full flex flex-col max-w-screen-xl m-auto ${appColor[id].textColor}`}
      ref={projectRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Projects`}
        orientation={`left`}
        appColor={appColor}
      >
        Projects Placeholder
      </SectionBorder>
    </div>
  );
}
export default Projects;

import { useState } from 'react';
import SectionBorder from '../Layouts/SectionBorder';

function ListItem({ id, currentItem, setCurrentItem, children }) {
  function handleClick() {
    setCurrentItem(id);
  }
  return (
    <button
      className={
        `mb-2 mr-3 p-3 text-center text-sm uppercase font-bold border border-raffia-200 ` +
        (id === currentItem ? `bg-raffia-200 text-raffia-800` : ``)
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function Experience({ expRef }) {
  const [currentItem, setCurrentItem] = useState(0);

  let workplaces = ['DenoGres', 'Arup', 'Talend', 'Genesys'];
  workplaces = workplaces.map((ele, idx) => {
    return (
      <ListItem
        id={idx}
        key={idx}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      >
        {ele}
      </ListItem>
    );
  });

  return (
    <div
      className='h-full flex flex-col max-w-screen-xl m-auto text-raffia-200'
      ref={expRef}
    >
      <SectionBorder
        header={`02. Experience`}
        orientation={`right`}
        border={`border-raffia-200`}
      >
        <h3 className='font-bold text-4xl my-auto mx-4 text-justify'>
          My Professional Experience <br />
        </h3>
        <br />
        <br />
        <div className='flex flex-row w-9/12 mx-auto'>
          <div className='flex flex-col w-5/12'>{workplaces}</div>
          <div className='border border-raffia-200 w-full'></div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Experience;

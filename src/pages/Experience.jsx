import { useState, useEffect } from 'react';
import SectionBorder from '../Layouts/SectionBorder';

function ListItem({
  id,
  listId,
  currentItem,
  setCurrentItem,
  children,
  appColor,
}) {
  function handleClick() {
    setCurrentItem(listId);
  }
  return (
    <button
      className={
        `mb-2 mr-3 p-3 text-center text-sm uppercase font-bold border ${appColor[id].borderColor} ` +
        (listId === currentItem
          ? `bg-raffia-200 text-raffia-800`
          : `hover:bg-raffia-800 hover:underline hover:duration-300`)
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function Experience({ expRef, id, selSection, appColor }) {
  let workplaces = ['DenoGres', 'Arup', 'Talend', 'Genesys'];

  const [currentItem, setCurrentItem] = useState(0);
  const [currentWP, setCurrentWP] = useState(workplaces[currentItem]);

  useEffect(() => {
    setCurrentWP(workplaces[currentItem]);
  }, [currentItem]);

  const workplacesComponents = workplaces.map((ele, idx) => {
    return (
      <ListItem
        id={id}
        appColor={appColor}
        listId={idx}
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
      className={`h-full flex flex-col max-w-screen-xl m-auto ${appColor[id].textColor}`}
      ref={expRef}
    >
      <SectionBorder
        id={id}
        header={`${String(id).padStart(2, '0')}. Experience`}
        orientation={`right`}
        appColor={appColor}
      >
        <h3 className='font-bold text-4xl my-auto mx-4 text-justify'>
          My Professional Experience <br />
        </h3>
        <br />
        <br />
        <div className='flex flex-row w-9/12 mx-auto'>
          <div className='flex flex-col w-5/12'>{workplacesComponents}</div>
          <div className={`border ${appColor[id].borderColor} w-full p-6`}>
            <div className='flex flex-row justify-between mb-6 text-lg font-bold'>
              <h2>{currentWP}</h2>
              <p>2022 - Present</p>
            </div>
            <ul className='text-xs text-justify list-disc list-inside'>
              <li className='mb-3'>
                Developed a comprehensive ORM library for the Deno runtime
                (Node.js), allowing developers to fully interact with SQL
                databases without needing to parse query strings
              </li>
              <li className='mb-3'>
                Established bi-directional data flow between model classes and
                database schema, establishing a consistent “source of truth”
                data model and negating potential synchronization issues between
                sources
              </li>{' '}
              <li className='mb-3'>
                Constructed a graphical interface using Deno’s Fresh.js full
                stack framework (React and Tailwind), allowing users to test and
                and run queries via the browser
              </li>
            </ul>
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Experience;

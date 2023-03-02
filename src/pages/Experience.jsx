import { useState, useEffect, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';

function ListItem({ id, listId, currentItem, setCurrentItem, children }) {
  const { appColor } = useContext(appContext);

  function handleClick() {
    setCurrentItem(listId);
  }

  return (
    <button
      className={`mb-2 mr-3 p-3 text-center text-sm uppercase font-bold border ${
        appColor[id].borderColor
      }  ${
        listId === currentItem
          ? `bg-raffia-200 text-raffia-800`
          : `hover:bg-raffia-800 hover:underline hover:duration-300`
      }
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function Experience({ id }) {
  const { expRef, selSection, appColor } = useContext(appContext);

  const workHistory = [
    {
      listId: 0,
      companyName: 'DenoGres',
      timeWorked: '2022 - Present',
      description: [
        'Developed a comprehensive ORM library for the Deno runtime (Node.js), allowing developers to fully interact with SQL databases without having to parse query strings',
        'Designed a bi-directional synchronization between model classes and database schema, ensuring that Model classes subscribe to changes made to the underlying database schema.',
        'Constructed a graphical interface using Deno’s Fresh.js full stack framework (React and Tailwind), allowing users to test and run queries directly off the CLI/browser',
      ],
    },
    {
      listId: 1,
      companyName: 'Arup',
      timeWorked: '2019 - 2021',
      description: [
        'Led budgeting, forecasting and annual planning processes for the Americas region (>450M revenue annually)',
        'Served as lead on regional strategic planning/business intelligence initiatives for C-suite team (CFO, COO, CEO)',
        'Collected data from Azure SQL data warehouse, created Power BI data models, and summarized data into KPI dashboards tracking project and office level financial metrics',
      ],
    },
    {
      listId: 2,
      companyName: 'Talend',
      timeWorked: '2016 - 2019',
      description: [],
    },
    {
      listId: 3,
      companyName: 'Genesys',
      timeWorked: '2014 - 2016',
      description: [],
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const [currentWP, setCurrentWP] = useState(
    workHistory.filter((ele) => ele.listId === currentItem)
  );

  useEffect(() => {
    setCurrentWP(workHistory.filter((ele) => ele.listId === currentItem));
  }, [currentItem]);

  const workplacesComponents = workHistory.map((ele, idx) => (
    <ListItem
      id={id}
      listId={ele.listId}
      key={ele.listId}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    >
      {ele.companyName}
    </ListItem>
  ));

  return (
    <div
      className={`h-full flex flex-col max-w-screen-xl m-auto ${appColor[id].textColor}`}
      ref={expRef}
    >
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Experience`}
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
            <div className='flex flex-row justify-between mb-2 text-lg font-bold'>
              <h2>{currentWP[0].companyName}</h2>
              <p>{currentWP[0].timeWorked}</p>
            </div>
            <ul className='text-xs text-justify list-disc list-inside'>
              {currentWP[0].description.map((ele, idx) => (
                <li key={idx} className='p-2'>
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Experience;

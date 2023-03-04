import { useState, useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../layouts/SectionBorder';
import ContactForm from '../components/ContactForm';

function Contact({ id }) {
  const { contactRef, selSection, appColor } = useContext(appContext);

  const [showModal, setShowModal] = useState(false);
  const [showModalText, setShowModalText] = useState('');

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`w-full lg:w-5/6 max-w-screen-2xl m-auto relative ${appColor[id].textColor}`}
      ref={contactRef}
    >
      {showModal && (
        <div
          className='absolute top-20 w-full left-0 lg:w-1/2 lg:left-[25%] bg-white flex flex-col justify-center h-1/2 z-10 text-xl rounded
      '
        >
          <div className='flex flex-col gap-12'>
            <div className='text-black'>{showModalText}</div>
            <button
              className={`w-[200px] m-auto p-2 ${appColor[id].background}`}
              type='button'
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <SectionBorder
        id={id}
        selSection={selSection}
        header={`${String(id + 1).padStart(2, '0')}. Contact`}
        orientation={`left`}
        appColor={appColor}
      >
        <div className='mx-0'>
          <div className='w-full flex flex-col gap-8 lg:overflow-y-hidden'>
            <h3 className='font-bold text-4xl text-left'>
              Want to work together? I'm open to new opportunities!
            </h3>
            <ContactForm
              id={id}
              setShowModal={setShowModal}
              setShowModalText={setShowModalText}
            />
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Contact;

import { useContext } from 'react';
import { appContext } from '../providers/appProvider';
import SectionBorder from '../Layouts/SectionBorder';
import ContactForm from '../components/ContactForm';

function Contact({ id }) {
  const { contactRef, selSection, appColor } = useContext(appContext);

  return (
    <div
      className={`w-full lg:w-5/6 max-w-screen-2xl m-auto ${appColor[id].textColor}`}
      ref={contactRef}
    >
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
            <ContactForm id={id} />
          </div>
        </div>
      </SectionBorder>
    </div>
  );
}
export default Contact;

import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { appContext } from '../providers/appProvider';
import emailjs from '@emailjs/browser';

const ContactForm = ({ id, setShowModal, setShowModalText }) => {
  const { appColor } = useContext(appContext);
  const form = useRef();

  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending');

    //add serviceID, templateID, publicKey to ENV
    try {
      let result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setShowModalText('Thank you - your email has been sent!');
    } catch (e) {
      console.log(e);
      setShowModalText(
        'There was an error sending your message - please contact the website admin.'
      );
    }

    setShowModal(true);
    e.target.reset();
    setStatus('Submit');
  };
  return (
    <form
      className='flex flex-col gap-2 lg:gap-6 w-full max-w-3/4 motion-safe:animate-fadeIn'
      ref={form}
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
        <div className='flex flex-col justify-center w-1/12'>
          <label className='font-bold' htmlFor='name'>
            Name:{' '}
          </label>
        </div>
        <input
          className={`grow border ${appColor[id].borderColor} p-3 bg-inherit focus:outline-none`}
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
        <div className='flex flex-col justify-center w-1/12'>
          <label className='font-bold' htmlFor='email'>
            Email:{' '}
          </label>
        </div>
        <input
          className={`grow border ${appColor[id].borderColor} p-3 bg-inherit focus:outline-none`}
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
        <div className='flex flex-col justify-center w-1/12'>
          <label className='font-bold' htmlFor='message'>
            Message:{' '}
          </label>
        </div>
        <textarea
          className={`grow border ${appColor[id].borderColor} p-3 bg-inherit resize-none focus:outline-none`}
          id='message'
          name='message'
          rows='6'
          placeholder='Your message goes here'
          required
        />
      </div>
      <button
        className={`bg-beaver-200 lg:px-10 py-3 text-center text-beaver-900 font-bold hover:underline hover:underline-offset-4 lg:w-fit lg:flex lg:flex-row`}
        type='submit'
        disabled={status !== 'Submit' ? true : false}
      >
        {status !== 'Submit' && (
          <svg
            class='animate-spin -ml-1 mr-3 h-5 w-5 text-beaver-900'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              class='opacity-25 stroke-beaver-900'
              cx='12'
              cy='12'
              r='10'
              stroke-width='4'
            ></circle>
            <path
              class='opacity-75 bg-beaver-900'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        )}
        {status}
      </button>
    </form>
  );
};

export default ContactForm;

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
        'service_vyg3as7',
        'template_sqtpuby',
        form.current,
        'CK3eT10o0619zgOzr'
      );
      setShowModalText('Thank you - your email has been sent!');
    } catch (e) {
      console.log(e);
      setShowModalText(
        'There was an error sending your message - please contact the website admin at 87.anthonylo@gmail.com.'
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
      <div className='flex flex-col gap-2 lg:flex-row lg:justify-end lg:gap-4'>
        <div className='flex flex-col justify-center w-1/12'></div>
        <button
          className={`bg-beaver-200 lg:px-10 py-3 text-beaver-900 font-bold hover:underline hover:underline-offset-4`}
          type='submit'
        >
          {status}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

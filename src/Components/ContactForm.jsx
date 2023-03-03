import React, { useState } from 'react';
import { useContext } from 'react';
import { appContext } from '../providers/appProvider';

const ContactForm = ({ id }) => {
  const { appColor } = useContext(appContext);

  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending');
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    //TODO: change fetch URL
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });

    setStatus('Submit');

    let result = await response.json();
    alert(result.status);
  };
  return (
    <form
      className='flex flex-col gap-2 lg:gap-6 w-full max-w-3/4 motion-safe:animate-fadeIn'
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
          placeholder='Enter the subject'
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

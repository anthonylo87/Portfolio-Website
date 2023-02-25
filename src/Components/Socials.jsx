function Socials({ color }) {
  const [textColor, strokeColor] = color;

  return (
    <div className='flex flex-col fixed right-12 bottom-48 gap-4'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={
            `icon icon-tabler icon-tabler-brand-linkedin ` + strokeColor
          }
          width='42'
          height='42'
          viewBox='0 0 24 24'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <rect x='4' y='4' width='16' height='16' rx='2' />
          <line x1='8' y1='11' x2='8' y2='16' />
          <line x1='8' y1='8' x2='8' y2='8.01' />
          <line x1='12' y1='16' x2='12' y2='11' />
          <path d='M16 16v-3a2 2 0 0 0 -4 0' />
        </svg>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`icon icon-tabler icon-tabler-brand-github ` + strokeColor}
          width='42'
          height='42'
          viewBox='0 0 24 24'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
        </svg>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`icon icon-tabler icon-tabler-send ` + strokeColor}
          width='42'
          height='42'
          viewBox='0 0 24 24'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <line x1='10' y1='14' x2='21' y2='3' />
          <path d='M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5' />
        </svg>
      </div>
    </div>
  );
}
export default Socials;

import { useContext } from 'react';
import { appContext } from '../providers/appProvider';
import {
  AiFillMail as EmailIcon,
  AiFillGithub as GitHubIcon,
  AiFillLinkedin as LinkedInIcon,
} from 'react-icons/ai';

function Icon({ children, href }) {
  return (
    <div className='hover:animate-wiggle min-w-[3rem] min-h-[3rem]'>
      <a
        className='text-3xl hover:text-4xl'
        target='_blank'
        rel='noopener noreferrer'
        href={href}
      >
        {children}
      </a>
    </div>
  );
}

function Socials() {
  const { color } = useContext(appContext);
  return (
    <nav
      className={`flex flex-col py-1 fixed bottom-32 right-6 gap-4 ${color} invisible lg:visible`}
    >
      <Icon href='https://www.linkedin.com/in/anthonyelo/'>
        <LinkedInIcon fontSize='inherit' />
      </Icon>
      <Icon href='https://github.com/anthonylo87'>
        <GitHubIcon fontSize='inherit' />
      </Icon>
      <Icon href='mailto:87.anthonylo@gmail.com'>
        <EmailIcon fontSize='inherit' />
      </Icon>
    </nav>
  );
}
export default Socials;

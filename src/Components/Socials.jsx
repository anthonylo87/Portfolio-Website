import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Icon({ children, href }) {
  return (
    <div className='hover:animate-wiggle min-w-[3rem] min-h-[3rem]'>
      <a className='text-3xl hover:text-4xl' href={href}>
        {children}
      </a>
    </div>
  );
}

function Socials({ color }) {
  return (
    <div className={'flex flex-col fixed right-12 bottom-48 gap-4 ' + color}>
      <Icon href='https://www.linkedin.com/in/anthonyelo/'>
        <LinkedInIcon fontSize='inherit' />
      </Icon>
      <Icon href='https://github.com/anthonylo87'>
        <GitHubIcon fontSize='inherit' />
      </Icon>
      <Icon href='mailto:87.anthonylo@gmail.com'>
        <EmailIcon fontSize='inherit' />
      </Icon>
    </div>
  );
}
export default Socials;

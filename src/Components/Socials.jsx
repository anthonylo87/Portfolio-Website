import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Socials({ color }) {
  return (
    <div className={'flex flex-col fixed right-12 bottom-48 gap-4 ' + color}>
      <a href='https://www.linkedin.com/in/anthonyelo/'>
        <LinkedInIcon fontSize='large' />
      </a>
      <a href='https://github.com/anthonylo87'>
        <GitHubIcon fontSize='large' />
      </a>
      <a href='mailto:87.anthonylo@gmail.com'>
        <EmailIcon fontSize='large' />
      </a>
    </div>
  );
}
export default Socials;

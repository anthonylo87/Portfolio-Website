import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Socials({ color }) {
  return (
    <div className={'flex flex-col fixed right-12 bottom-48 gap-4 ' + color}>
      <div>
        <LinkedInIcon fontSize='large' />
      </div>
      <div>
        <GitHubIcon fontSize='large' />
      </div>
      <div>
        <EmailIcon fontSize='large' />
      </div>
    </div>
  );
}
export default Socials;

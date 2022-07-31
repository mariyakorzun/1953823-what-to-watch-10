import Copyright from '../copyright/copyright';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoStyle='light'/>

      <Copyright />
    </footer>
  );
}

export default Footer;

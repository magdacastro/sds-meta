import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por <span><a href="https://www.instagram.com/_magcastro/">@magdacastro</a></span>
        </p>
      </div>
    </header>
  )
}

export default Header;
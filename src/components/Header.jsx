import Navigation from './Navigation.jsx';
import './Header.css';

function Header({ companyName, tagline }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#">
          <span className="header__name">{companyName}</span>
          <span className="header__tagline">{tagline}</span>
        </a>
        <Navigation ariaLabel="Peamenüü" />
      </div>
    </header>
  );
}

export default Header;

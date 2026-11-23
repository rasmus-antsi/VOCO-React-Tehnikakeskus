import { useContext } from 'react';
import Navigation from './Navigation/Navigation.jsx';
import { FavoritesContext } from '../../context/FavoritesContext.js';
import './Header.css';

function Header({ companyName, tagline }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#">
          <span className="header__name">{companyName}</span>
          <span className="header__tagline">{tagline}</span>
        </a>
        <div className="header__actions">
          <Navigation ariaLabel="Peamenüü" />
          <p className="header__favorites">
            <span aria-hidden="true">★</span> Lemmikud: <strong>{favorites.length}</strong>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;

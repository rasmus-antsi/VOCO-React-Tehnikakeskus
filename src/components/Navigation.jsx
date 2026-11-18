import './Navigation.css';

const links = [
  { href: '#koolitused', label: 'Koolitused' },
  { href: '#kategooriad', label: 'Kategooriad' },
  { href: '#kontakt', label: 'Kontakt' },
];

function Navigation({ ariaLabel }) {
  return (
    <nav className="navigation" aria-label={ariaLabel}>
      <ul className="navigation__list">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a className="navigation__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

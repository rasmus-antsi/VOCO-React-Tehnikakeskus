import './Navigation.css';

const links = [
  { href: '#koolitused', label: 'Koolitused' },
  { href: '#kategooriad', label: 'Kategooriad' },
  { href: '#kontakt', label: 'Kontakt' },
];

function Navigation({ label }) {
  return (
    <nav className="navigation" aria-label={label}>
      <ul className="navigation__list">
        {links.map(({ href, label: linkLabel }) => (
          <li key={href}>
            <a className="navigation__link" href={href}>
              {linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

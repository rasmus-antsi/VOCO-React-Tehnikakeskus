import './Footer.css';

function Footer({ companyName, email, phone }) {
  return (
    <footer className="footer" id="kontakt">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {companyName}. Kõik õigused kaitstud.
        </p>
        <p className="footer__contact">
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

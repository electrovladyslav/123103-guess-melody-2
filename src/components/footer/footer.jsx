import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
          <img
            src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
            alt="Creative Commons License"
            width="88"
            height="31"
            style={{borderWidth: 0}}
          />
        </a>
        <section className="copyright">
          <a className="copyright__logo" href="https://htmlacademy.ru">
            <img
              src="img/logo-htmla.svg"
              width="144"
              height="49"
              alt="HTML Academy"
            />
          </a>
          <p className="copyright__text">
            Сделано в{` `}
            <a className="copyright__link" href="https://htmlacademy.ru">
              HTML Academy
            </a>
          </p>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

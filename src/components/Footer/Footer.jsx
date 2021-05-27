import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo, faGithub } from '@fortawesome/free-brands-svg-icons';
import GithubButtons from '../GithubButtons/GithubButtons';
import PortfolioContext from '../../context/context';

import { githubButtons } from '../../mock/data';

library.add(faItchIo, faGithub);

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks, prefix, subject, link } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <FontAwesomeIcon icon={faAngleUp} size="2x" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={['fab', name]} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - {`${prefix || 'Template developed by'} `}
          <a href={link || 'https://github.com/cobidev'} target="_blank" rel="noopener noreferrer">
            {subject || 'Jacobo Martínez'}
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;

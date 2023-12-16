'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Menu() {
  return (
    <div className="ground_1">
      <ul className="ground_menu">
        <li>
          <a
            href="https://twitter.com/fl4vasavah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/azizgharbi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/7253451/g-aziz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aziz-g-3b6397137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}

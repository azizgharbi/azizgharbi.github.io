import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import Icon from '../Icon';
import { links } from '../../lib/site';

const PROFILES = [
  { label: 'GitHub', href: links.github, icon: faGithub },
  { label: 'LinkedIn', href: links.linkedin, icon: faLinkedin },
  { label: 'Stack Overflow', href: links.stackoverflow, icon: faStackOverflow },
];

export default function Menu() {
  return (
    <nav className="menu" aria-label="Profiles">
      <ul className="menu__list">
        {PROFILES.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              className="menu__link"
              href={href}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`Aziz Gharbi on ${label}`}
              title={label}
            >
              <Icon icon={icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

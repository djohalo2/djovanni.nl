import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import NavigationLink from './NavigationLink';
import Button from './Button';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavigationLink href="https://github.com/djohalo2" label="Github" icon={faGithub} />
        </li>
        <li>
          <NavigationLink
            href="https://www.linkedin.com/in/djovanni-tehubijuluw-536a5a63"
            label="Linkedin"
            icon={faLinkedin}
          />
        </li>
        <li>
          <Button href="mailto:djohalo2@hotmail.com" icon={faEnvelope} />
        </li>
      </ul>
    </nav>
  );
}

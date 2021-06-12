import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import styles from './NavigationLink.module.scss';

interface Props {
  href: string;
  label: string;
  icon?: IconDefinition;
}

export default function NavigationLink({ href, label, icon }: Props) {
  return (
    <a className={styles['nav-link']} href={href} target="_blank">
      {icon && <FontAwesomeIcon className="icon-xs" icon={icon} />}
      {label}
    </a>
  );
}

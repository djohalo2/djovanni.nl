import styles from './Header.module.scss';

import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}

import logo from '@/assets/images/shared/logo.svg';
import menuIcon from '@/assets/images/shared/icon-hamburger.svg';

import styles from "./MobileNav.module.css";

export function MobileNav() {
  return (
    <nav className={styles.NavbarMobile}>
      <div className={styles.NavbarMobilelogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.NavbarMobileMenu}>
        <img src={menuIcon} alt="menu" />
      </div>
    </nav>
  );
}

// import logo from '@/assets/images/shared/logo.svg';
// import menuIcon from '@/assets/images/shared/icon-hamburger.svg';

// import styles from "./MobileNav.module.css";

// export function MobileNav() {
//   return (
//     <nav className={styles.NavbarMobile}>
//       <div className={styles.NavbarMobilelogo}>
//         <img src={logo} alt="logo" />
//       </div>
//       <div className={styles.NavbarMobileMenu}>
//         <img src={menuIcon} alt="menu" />
//       </div>
//     </nav>
//   );
// }

// import React from "react";
import { Logo } from "./Logo";
import "./style.css";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo-wrapper">
        <Logo className="logo-instance" />
      </div>

      <div className="menu">
        <div className="div">
          <div className="shape" />

          <div className="shape-2" />

          <div className="shape-3" />
        </div>
      </div>
    </div>
  );
};

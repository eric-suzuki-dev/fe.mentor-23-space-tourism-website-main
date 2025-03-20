import logo from '@/assets/images/shared/logo.svg';
import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.NavbarDesktop}>

      <div className={styles.NavbarDesktoplogo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.BarDesktop}>
        {["Home", "Destination", "Crew", "Technology"].map((item, index) => (
          <div key={index} className={styles.BraDesktop_box}>
            <span className={styles.BarDesktop_number}>
              {`0${index}`}
            </span>
            <p className={styles.BarDesktop_text}>
              {item}
            </p>
          </div>
        ))}
      </div>

    </nav>
  );
}

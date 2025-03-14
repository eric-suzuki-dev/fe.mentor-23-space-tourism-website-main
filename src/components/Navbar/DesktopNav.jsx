import logo from '@/assets/images/shared/logo.svg';
import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.NavbarDesktop}>

      <div className={styles.NavbarDesktoplogo}>
        <img src={logo} alt="logo" />
      </div>

      {/* <div className={styles.BarDesktop}>
        <div className={styles.BarDesktop_box}>
          <span className={styles.BarDesktop_number}>
            00
          </span>
          <p className={styles.BarDesktop_text}>
            Home
          </p>
        </div>
        <div className={styles.BarDesktop_box}>
          <span className={styles.BarDesktop_number}>
            01
            </span>
          <p className={styles.BarDesktop_text}>
            Destination
            </p>
        </div>
        <div className={styles.BarDesktop_box}>
          <span className={styles.BarDesktop_number}>
            02
            </span>
          <p className={styles.BarDesktop_text}>
            Crew
            </p>
        </div>
        <div className={styles.BarDesktop_box}>
          <span className={styles.BarDesktop_number}>
            03
            </span>
          <p className={styles.BarDesktop_text}>
            Technology
            </p>
        </div>
      </div> */}

<div className={styles.BarDesktop}>
  {["Home", "Destination", "Crew", "Technology"].map((item, index) => (
    <div key={index} className={styles.BarDesktop_box}>
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

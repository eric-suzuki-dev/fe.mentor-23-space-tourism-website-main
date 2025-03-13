import logo from '@/assets/images/shared/logo.svg';

export default function DesktopNav() {
  return (
    <nav className={styles.NavbarDesktop}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <span>00</span>
          <p>Home</p>
        </div>
        <div>
          <span>01</span>
          <p>Destination</p>
        </div>
        <div>
          <span>02</span>
          <p>Crew</p>
        </div>
        <div>
          <span>03</span>
          <p>Technology</p>
        </div>
      </div>
    </nav>
  );
}

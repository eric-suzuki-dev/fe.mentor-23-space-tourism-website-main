import logo from '@/assets/images/shared/logo.svg';
import menuIcon from '@/assets/images/shared/icon-hamburger.svg';

export function MobileNav() {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={menuIcon} alt="menu" />
      </div>
    </nav>
  );
}

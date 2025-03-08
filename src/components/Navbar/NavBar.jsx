import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar() {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  function getDeviceType() {
    if (window.innerWidth < 768) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  }

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType === 'mobile' ? <MobileNav /> : <DesktopNav />;
}

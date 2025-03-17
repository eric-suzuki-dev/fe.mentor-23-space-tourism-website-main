import { useEffect, useState, useCallback } from 'react';
import { MobileNav } from './MobileNav';
import DesktopNav from '@/components/Navbar/DesktopNav';

function getDeviceType() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
}

export default function NavBar() {
  const [deviceType, setDeviceType] = useState('desktop');

  const handleResize = useCallback(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return deviceType === 'mobile' ? <MobileNav /> : <DesktopNav />;
}

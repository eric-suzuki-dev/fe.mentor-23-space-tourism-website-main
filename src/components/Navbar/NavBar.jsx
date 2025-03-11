import { useEffect, useState } from 'react';
import { MobileNav } from './MobileNav';
// import DesktopNav from '@/components/Navbar/DesktopNav'; // Comente esta linha

function getDeviceType() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
}

export default function NavBar() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    setDeviceType(getDeviceType());

    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType === 'mobile' ? <MobileNav /> : null; // Retorna null para evitar erro
}

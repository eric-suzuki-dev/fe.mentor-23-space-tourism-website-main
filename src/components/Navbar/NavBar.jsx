import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function getDeviceType() {
  if (typeof window === 'undefined') return 'desktop'; // Evita erro no SSR
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
}

export default function Navbar() {
  const [deviceType, setDeviceType] = useState('desktop'); // Define um valor padrão seguro

  useEffect(() => {
    setDeviceType(getDeviceType()); // Define o estado no primeiro render

    const handleResize = () => setDeviceType(getDeviceType());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType === 'mobile' ? <MobileNav /> : <DesktopNav />;
}
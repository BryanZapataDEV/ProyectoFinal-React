import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Menu } from './Menu';
import { Schedule } from './Schedule';
import { Slider } from './Slider';
import { LogoAndDelivery } from './LogoAndDelivery';
import './Header.css';

export const Header = () => {

  const location = useLocation();
  const [showSlider, setShowSlider] = useState(true); // Estado para controlar la visibilidad del slider

  useEffect(() => {
    console.log('ocultando slide princ', location.pathname);
    setShowSlider(location.pathname !== "/menu");
  }, [location]);

  return (
    <div className="header-wrapper">
      <div className="fixed-header">
        <Schedule />
        <LogoAndDelivery />
        <Menu />
      </div>
      {showSlider && <Slider />}
    </div>
  )
}


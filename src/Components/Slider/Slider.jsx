import { useEffect, useState } from 'react';
import bannerImage1 from '../../Imagenes/banner-1.jpg';
import bannerImage2 from '../../Imagenes/banner-2.jpg';
import bannerImage3 from '../../Imagenes/banner-3.jpg';
import bannerImage4 from '../../Imagenes/banner-4.jpg';
import rightArrowIcon from '../../Imagenes/flecha-derercha.svg';
import leftArrowIcon from '../../Imagenes/flecha-izquierda.svg'
import imglogo from '../../Imagenes/logobembos.jpg';
import iconoLlamada from '../../Imagenes/llamada-telefonica.svg';
import hombre from '../../Imagenes/hombre.svg';
import { useLocation } from "react-router-dom";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

  const [showSlider, setShowSlider] = useState(true); // Estado para controlar la visibilidad del slider
  const location = useLocation();

  useEffect(() => {
    // Ocultar el slider cuando cambie a la vista del menú
    setShowSlider(location.pathname !== "/menu");
  }, [location]);


  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (

    <section className="slider-container">
      <div className="img-slide">
        <div className="previous-image">
          <img src={leftArrowIcon} className='icon-previous' onClick={goToPrevious} alt="Flecha Izquierda" />
        </div>
        <div className="next-image">
          <img src={rightArrowIcon} className='icon-next' onClick={goToNext} alt="Flecha Derecha" />
        </div>
        <img src={images[currentIndex]} alt={`imagen ${currentIndex + 1}`} />
      </div>
    </section>

  )
}


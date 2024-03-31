import './MenuPage.css';
import ubicacion from '../../Imagenes/ubicacion.png';
import bannerImage1 from '../../Imagenes/menu-1.webp';
import bannerImage2 from '../../Imagenes/menu-2.webp';
import bannerImage3 from '../../Imagenes/menu-3.webp';
import bannerImage4 from '../../Imagenes/menu-4.webp';
import rightArrowIcon from '../../Imagenes/flecha-derercha.svg';
import leftArrowIcon from '../../Imagenes/flecha-izquierda.svg'
import { useState, useEffect } from 'react';
import { MenuHamburgesas } from '../MenuHamburgesas/MenuHamburgesas';
import { BurgerMenu } from '../BurgerPromoMenu/BurgerMenu/BurgerMenu';



export const MenuPage = () => {

  useEffect(() => {
    // Aquí puedes ejecutar tu código cuando el componente esté listo
    console.log('El componente funcional está listo');
  }, []); // El segundo argumento, un array vacío, asegura que el efecto solo se ejecute una vez (equivalente a componentDidMount)


  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4]

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
    <>
      <div className='contanier-menu-bembos'>
        <div className='ancho'>
          <div className="header-menu-bembos">
            <div className="texto-menu">
              <p>Se está mostrando el menú del restaurante</p>
            </div>
            <div className="contenedor-general">
              <div className="icono-general">
                <img src={ubicacion} />
                <p>GENERAL</p>
              </div>
              {/* <div className="texto-general">
              </div> */}

              <div className="contenedor-boton-cambiar">
                <button>Cambiar</button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <section className="slider-container-2 ancho">
        <h2>CONOCE NUESTRO MENÚ | BEMBOS</h2>
        <hr />
        <div className="img-slide-menu">
          <div className="previous-image">
            <img src={leftArrowIcon} className='icon-previous' onClick={goToPrevious} alt="Flecha Izquierda" />
          </div>
          <div className="next-image">
            <img src={rightArrowIcon} className='icon-next' onClick={goToNext} alt="Flecha Derecha" />
          </div>
          <img src={images[currentIndex]} alt={`imagen ${currentIndex + 1}`} />
        </div>
        <BurgerMenu />
      </section>

    </>
  )
}


import combos from "../../Imagenes/combos.png";
import hamburgesaMenu from "../../Imagenes/hamburguesamenu.png";
import promociones from "../../Imagenes/promociones.svg";
import hamburgesas from "../../Imagenes/hamburguesa.png";
import beneficios from "../../Imagenes/beneficios.png";
import tiendaIcon from "../../Imagenes/tienda.png";
import carritoIcon from "../../Imagenes/carrito-de-compras.svg";
import { MenuItem } from "./MenuItem";
import logoMobile from "../../Imagenes/logo2bembos.jpg";
import llamadaTelefonica from "../../Imagenes/llamada-telefonica-_1_.svg";
import menumobile from "../../Imagenes/menu.svg";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const Menu = () => {
  const menuItemsData = [
    {
      imageSource: combos,
      text: "MENÚ",
      link: "/menu"
    },
    {
      imageSource: hamburgesaMenu,
      text: "COMBOS",
      link: "/combos",
    },
    {
      imageSource: promociones,
      text: "PROMOCIONES",
      link: "/promociones",
    },
    {
      imageSource: hamburgesas,
      text: "HAMBURGUESAS",
      link: "/hamburguesas",
    },
    {
      imageSource: beneficios,
      text: "BENEFICIOS",
      link: "/hamburguesas",
    },
  ];

  const promotionsList = [
    { promocion: "Promociones Personales", link: "https://www.youtube.com/" },
    { promocion: "Promoción para 2", link: "https://www.youtube.com/" },
    { promocion: "Promoción para Compartir", link: "https://www.youtube.com/" },
    { promocion: "Cupones", link: "https://www.youtube.com/" },
  ];

  const [showPromotionsList, setShowPromocionesList] = useState(false);
  const [showSlider, setShowSlider] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Ocultar el slider cuando cambie a la vista del menú
    setShowSlider(location.pathname !== "/menu");
  }, [location]);


  const handleMouseEnter = () => {
    setShowPromocionesList(true);
  };

  const handleMouseLeave = () => {
    setShowPromocionesList(false);
  };

  return (
    <>
      <div className="global-navigation-menu-container ancho">
        <div className="c width ">
          <div className="menu">
            <nav>
              <ul className="menu-list" onMouseLeave={handleMouseLeave}>
                {/* Mapeando los elementos del menú */}
                {menuItemsData.map((item, index) => (
                  <MenuItem
                    key={index}
                    imageSource={item.imageSource}
                    text={item.text}
                    link={item.link}
                    onMouseEnter={
                      item.text === "PROMOCIONES" ? handleMouseEnter : undefined
                    }
                    onMouseLeave={
                      item.text === "PROMOCIONES" ? handleMouseLeave : undefined
                    }
                  />
                ))}
              </ul>
            </nav>
            {/* Mostrando la lista de promociones */}
            {showPromotionsList && (
              <ul className="promotions-list" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                {promotionsList.map(({ promocion, link }, index) => (
                  <li className="promotion-item" key={index}>
                    <a href={link} target="_blank">
                      {promocion}{" "}
                    </a>{" "}
                    <hr className="promotion-item"></hr>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="shop-order">
            <div className="shop-icon">
              <img src={tiendaIcon} alt="Tienda Icon" />{" "}
              {/* Añadido atributo alt */}
            </div>
            <div className="shop-text">
              <p>
                Pide en tiendas <span>SIN COLAS</span>
              </p>
            </div>
            {/* Botón "Carrito de compras" */}
          </div>
          <div className="shopping-cart">
            <div className="cart-icon-container">
              <img src={carritoIcon} alt="Carrito Icon" />{" "}
              {/* Añadido atributo alt */}
              <div className="cart-counter">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* version-mobile */}
      <div className="menu-mobiles-container">
        <div className="img-mobile">
          <img src={logoMobile} />
        </div>
        <div className="shop-order">
          <div className="shop-icon">
            <img src={tiendaIcon} alt="Tienda Icon" />{" "}
            {/* Añadido atributo alt */}
          </div>
          <div className="shop-text">
            <p>
              Pide en tiendas <span>SIN COLAS</span>
            </p>
          </div>
          {/* Botón "Carrito de compras" */}
        </div>
        <div className="icon-menu">
          <img src={llamadaTelefonica}></img>
          <img src={menumobile}></img>
        </div>
      </div>

    </>

  );
};

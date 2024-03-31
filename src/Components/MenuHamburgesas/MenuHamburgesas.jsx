import React, { useEffect, useState } from 'react';
import { readBurgerMenu } from '../../Services/Services';
import { BurgerMenuItem } from '../BurgerPromoMenu/BurgerMenu/BurgerMenuItem'
import '../MenuHamburgesas/MenuHamburgesas.css'
import { Pagination } from '../Pagination/Pagination';
import { MenuHambOnline } from './MenuHambOnline';
import menumobile from "../../Imagenes/banner-canjear.jpg";


export const MenuHamburgesas = () => {
  BurgerMenuItem
  const [burgerMenuData, setBurgerMenuData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [cantidadMenu, setcantidadMenu,] = useState(4);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readBurgerMenu();
        console.log(data);
        setBurgerMenuData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los menús de hamburguesas:', error);
        setError(error);
        setLoading(false);

      }
    };

    readData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const indexFinal = currentPage * cantidadMenu;
  const indexInicial = indexFinal - cantidadMenu;
  const nMenu = burgerMenuData.slice(indexInicial, indexFinal);
  const nPaginas = Math.ceil(burgerMenuData.length / cantidadMenu);

  return (
    <div className='ancho'>
      <div className='contenedor-global-promo-burger'>
        <div className='container-burger-promo-header'>
          <div className='title-promo-burge'>
            <h2>MENU HAMBURGUESAS ONLINE</h2>
          </div>
          <div className='contenedor-pagination-promo'>
            <Pagination
              setCurrentPage={setCurrentPage} currentPage={currentPage} nPaginas={nPaginas}
            />
          </div>
        </div>
        <div className="burger-promo-container">
          {nMenu.map(burger => (
            <MenuHambOnline key={burger.id} burger={burger} />
          ))}
        </div>
        <div className='paginas-promocion'>
          {<h3>{currentPage} / {nPaginas}</h3>}
        </div>

      </div>
      <div className='promos-bembos-banner'>
        <img src={menumobile}></img>
      </div>
    </div>

  )
};



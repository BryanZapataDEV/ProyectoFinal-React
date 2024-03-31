import React, { useEffect, useState } from 'react'
import { readPromoBurgers } from '../../../Services/Services'
import { Pagination } from '../../Pagination/Pagination';
import { PromoBurgerItem } from './PromoBurgerItem';
import './BurgePromo.css'

export const PromoBurgers = () => {
  const [promoBurgersData, setPromoBurgersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [cantidadPromo, setcantidadPromo] = useState(4);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readPromoBurgers();
        console.log(data);
        setPromoBurgersData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las promociones de hamburguesas:', error);
        setError(error);
        setLoading(false);
      }
    };

    readData();
  }, []);

  //El inidice final es la pagina actual y la cantidad de paginas
  const indexFinal = currentPage * cantidadPromo;
  const indexInicial = indexFinal - cantidadPromo;
  const nPromo = promoBurgersData.slice(indexInicial, indexFinal);
  const nPaginas = Math.ceil(promoBurgersData.length / cantidadPromo);
  console.log(nPaginas);



  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='ancho'>
      <div className='contenedor-global-promo-burger'>
        <div className='container-burger-promo-header'>
          <div className='title-promo-burge'>
            <h2>PROMOCIONES DE HAMBURGUESAS ONLINE</h2>
          </div>
          <div className='contenedor-pagination-promo'>
            <Pagination
              setCurrentPage={setCurrentPage} currentPage={currentPage} nPaginas={nPaginas}
            />
          </div>
        </div>
        <div className="burger-promo-container">
          {nPromo.map(burger => (
            <PromoBurgerItem key={burger.id} burger={burger} />
          ))}
        </div>
        {/* <div className='paginas-promocion'>
          {<h3>{currentPage} / {nPaginas}</h3>}
        </div> */}

      </div>

    </div>

  )
}

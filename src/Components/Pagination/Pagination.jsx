import '../Pagination/Paginacion.css'
import flechaDerecha from '../../Imagenes/flecha-derecha.png'
import flechaIzquierda from '../../Imagenes/flecha-izquierda.png'

export const Pagination = ({setCurrentPage,currentPage,nPaginas}) => {

  const next = () =>{
    if(currentPage!== nPaginas) setCurrentPage(currentPage+1)
}

const prev = () =>{
    if(currentPage !== 1) setCurrentPage(currentPage-1)
}
return (
  <>
    <div className='ancho cotenedor-botones-paginacion'>
      
      <div className='boton-previo-next'>
      <img className='flechas-promo' src={flechaIzquierda} onClick={prev}/>
      <img className='flechas-promo' src={flechaDerecha} onClick={next}/>
      </div>
  </div>
  </>

)
}


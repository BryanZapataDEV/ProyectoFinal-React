import '../PromotionsPage/PromotionsPage.css'
export const PromotionsPage = () => {
  return (
    <div className="container-promociones ancho">
          <div className="container-header-promotion">
            <div className="promociones-personales promociones-header">
                <p>Promociones Personales</p>
            </div>
            <div className="promociones-para-2 promociones-header">
              <p>Promociones para 2</p>
            </div>
            <div className="promociones-para-comprartir promociones-header">
              <p>Promociones para compartir</p>
            </div>
            <div className="cupones promociones-header">
              <p>Cupones</p>
            </div>
          </div>
          <div className='container-body-promotion'>
            <div className='busqueda-promociones'>
              <div className='texto-encabezado-busqueda'>
                <p>Promo online con hasta 50% descuento</p>
              </div>
              <div className='buscar-producto'>
              <div className='input-producto'>
                <input></input>
              </div>
              </div>
              
            </div>
          </div>

    </div>
  )
}
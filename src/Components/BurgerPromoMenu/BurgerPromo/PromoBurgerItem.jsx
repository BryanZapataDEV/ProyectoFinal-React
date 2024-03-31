import corazon from '../../../Imagenes/corazon.svg';


export const PromoBurgerItem = ({burger}) => {
    const  { img, nombre, precio_actual, precio_antiguo, descuento } = burger;
  return (
    <div className="content-promotion-card">
    <div className="div-promotion-img">
      <img className="promotion-img" src={img}></img>
    </div>
    <div className="div-promotion-content">
      
    <div className="div-content-name">
      <a href="#" className="promo-content-name">
        <h4>{nombre}</h4>
      </a>
      </div>
      <div className="div-content-price">
        <p className="real-price">
          S/ {precio_actual}
        </p>
        <p className="promo-content-price">
         S/ {precio_antiguo}
        </p>
      </div>
      <button type="button" className="promo-content-button">Ver más</button>
    </div>
    <div className="descuento">
      <p>{descuento}</p>
    </div>
    <div className="corazon">
      <img className='img-corazon' src={corazon}/>
    </div>
  </div>

  )
}


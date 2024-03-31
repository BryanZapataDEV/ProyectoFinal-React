import corazon from '../../Imagenes/corazon.svg';


export const CardCombos = ({ burger }) => {
  const { img, nombre, precio, link } = burger;

  return (
    <div className="content-combo-card">
      <div className="div-combo-img">
        <img className="combo-img" src={img}></img>
      </div>
      <div className="div-combo-content">

        <div className="div-combo-name">
          <a href="#" className="promo-combo-name">
            <h4>{nombre}</h4>
          </a>
        </div>
        <div className="div-combo-price">
          <p className="real-combo-price">
            S/ {precio}
          </p>
        </div>
        <p className='combo-terms'>Terminos y condiciones</p>
        <button className="promo-combo-button">Ver más</button>
      </div>

      {/* <div className="descuento">
      <p>{descuento}</p>
    </div> */}
      <div className="corazon">
        <img className='img-corazon' src={corazon} />
      </div>
    </div>
  )
};


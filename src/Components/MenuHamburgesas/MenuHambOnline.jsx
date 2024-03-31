import corazon from '../../Imagenes/corazon.svg';

export const MenuHambOnline = ({burger}) => {
  console.log(burger);
    const  { img, nombre, precio } = burger;
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
      <button type="button" className="promo-content-button">Ver más</button>
    </div>
    <div className="corazon">
      <img className='img-corazon' src={corazon}/>
    </div>
  </div>

  )
};

